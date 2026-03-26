"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Button, Badge } from "@/components/common";
import {
  PiCalendar,
  PiClock,
  PiStethoscope,
  PiArrowRight,
} from "react-icons/pi";
import type { Booking } from "@/lib/types";
import { bookings } from "@/lib/mock-data";

// Filter to upcoming appointments
const upcoming = bookings.filter(
  (b) => b.status === "confirmed" || b.status === "pending",
);

export default function DashboardPage() {
  const { patient } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary">
        Welcome back, {patient?.name?.split(" ")[0] || "Patient"}!
      </h1>
      <p className="mt-1 text-sm text-text-secondary">
        Manage your appointments and health records.
      </p>

      {/* Quick Actions */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Link
          href="/booking"
          className="flex items-center gap-3 rounded-lg bg-primary/10 p-4 transition-shadow hover:shadow-md">
          <PiCalendar size={24} className="text-primary" />
          <div>
            <p className="font-semibold text-text-primary">Book Appointment</p>
            <p className="text-xs text-text-secondary">Schedule a new visit</p>
          </div>
        </Link>
        <Link
          href="/patient/appointments"
          className="flex items-center gap-3 rounded-lg bg-secondary/10 p-4 transition-shadow hover:shadow-md">
          <PiClock size={24} className="text-secondary" />
          <div>
            <p className="font-semibold text-text-primary">My Appointments</p>
            <p className="text-xs text-text-secondary">View all bookings</p>
          </div>
        </Link>
        <Link
          href="/services"
          className="flex items-center gap-3 rounded-lg bg-green-50 p-4 transition-shadow hover:shadow-md">
          <PiStethoscope size={24} className="text-green-600" />
          <div>
            <p className="font-semibold text-text-primary">Our Services</p>
            <p className="text-xs text-text-secondary">Browse services</p>
          </div>
        </Link>
      </div>

      {/* Upcoming Appointments */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-text-primary">
            Upcoming Appointments
          </h2>
          <Link
            href="/patient/appointments"
            className="flex items-center gap-1 text-sm text-primary hover:underline">
            View all <PiArrowRight size={14} />
          </Link>
        </div>

        {upcoming.length === 0 ? (
          <div className="mt-4 rounded-lg bg-surface p-8 text-center shadow-sm">
            <p className="text-text-secondary">No upcoming appointments.</p>
            <Link href="/booking">
              <Button variant="primary" size="sm" className="mt-3">
                Book Now
              </Button>
            </Link>
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            {upcoming.map((appt) => (
              <div
                key={appt.id}
                className="flex items-center justify-between rounded-lg bg-surface p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <PiCalendar size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">
                      {appt.service.name}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {new Date(appt.date + "T00:00:00").toLocaleDateString(
                        "en-US",
                        { weekday: "short", month: "short", day: "numeric" },
                      )}{" "}
                      at {appt.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={appt.status as "confirmed" | "pending"}>
                    {appt.status}
                  </Badge>
                  <Badge variant={appt.paymentStatus as "paid" | "unpaid"}>
                    {appt.paymentStatus}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
