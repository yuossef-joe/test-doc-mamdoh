"use client";

import { useState } from "react";
import { Button, Badge } from "@/components/common";
import { PiCalendar, PiFunnel, PiX } from "react-icons/pi";
import { cn, formatPrice } from "@/lib/utils";
import type { Booking } from "@/lib/types";
import Link from "next/link";
import { bookings as appointments } from "@/lib/mock-data";

type TabFilter = "all" | "upcoming" | "past" | "cancelled";

const tabs: { key: TabFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "upcoming", label: "Upcoming" },
  { key: "past", label: "Past" },
  { key: "cancelled", label: "Cancelled" },
];

export default function AppointmentsPage() {
  const [filter, setFilter] = useState<TabFilter>("all");

  const today = new Date().toISOString().split("T")[0];

  const filtered = appointments.filter((appt) => {
    if (filter === "upcoming")
      return appt.date >= today && appt.status !== "cancelled";
    if (filter === "past")
      return appt.date < today || appt.status === "completed";
    if (filter === "cancelled") return appt.status === "cancelled";
    return true;
  });

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-text-primary">
          My Appointments
        </h1>
        <Link href="/booking">
          <Button variant="primary" size="sm">
            <PiCalendar size={16} className="mr-1" /> Book New
          </Button>
        </Link>
      </div>

      {/* Tabs */}
      <div className="mt-6 flex items-center gap-1 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors",
              filter === tab.key
                ? "border-b-2 border-primary text-primary"
                : "text-text-secondary hover:text-text-primary",
            )}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="mt-8 rounded-lg bg-surface p-8 text-center shadow-sm">
          <PiFunnel size={32} className="mx-auto text-text-secondary" />
          <p className="mt-2 text-text-secondary">No appointments found.</p>
        </div>
      ) : (
        <div className="mt-4 space-y-3">
          {filtered.map((appt) => (
            <div
              key={appt.id}
              className="rounded-lg bg-surface p-4 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-semibold text-text-primary">
                    {appt.service.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-text-secondary">
                    {new Date(appt.date + "T00:00:00").toLocaleDateString(
                      "en-US",
                      {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      },
                    )}{" "}
                    at {appt.time}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {appt.service.duration} min —{" "}
                    {formatPrice(appt.service.price)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      appt.status as
                        | "confirmed"
                        | "pending"
                        | "cancelled"
                        | "completed"
                    }>
                    {appt.status}
                  </Badge>
                  <Badge variant={appt.paymentStatus as "paid" | "unpaid"}>
                    {appt.paymentStatus}
                  </Badge>
                  {appt.status !== "cancelled" &&
                    appt.status !== "completed" && (
                      <button
                        className="ml-2 text-xs text-red-500 hover:underline"
                        onClick={() =>
                          alert("Cancel appointment (placeholder)")
                        }>
                        <PiX size={14} className="inline" /> Cancel
                      </button>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
