"use client";

import { useState, useMemo } from "react";
import type { Service, Specialty } from "@/lib/types";
import {
  PiClock,
  PiCurrencyDollar,
  PiMagnifyingGlass,
  PiFunnel,
  PiX,
  PiBaby,
  PiHeartbeat,
  PiStethoscope,
  PiFlask,
  PiShieldCheck,
  PiFirstAid,
} from "react-icons/pi";
import { formatPrice } from "@/lib/utils";
import { Button, Card } from "@/components/common";
import Link from "next/link";
import {
  specialties as mockSpecialties,
  services as mockServices,
} from "@/lib/mock-data";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  baby: PiBaby,
  heartbeat: PiHeartbeat,
  stethoscope: PiStethoscope,
  flask: PiFlask,
  shield: PiShieldCheck,
  firstaid: PiFirstAid,
};

interface ServiceDetailModalProps {
  service: Service;
  onClose: () => void;
}

function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={service.name}>
      <div className="relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-lg bg-surface p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-text-secondary hover:text-text-primary"
          aria-label="Close">
          <PiX size={20} />
        </button>

        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          {(() => {
            const Icon = iconMap[service.icon || ""] || PiStethoscope;
            return <Icon size={28} />;
          })()}
        </div>

        <h2 className="text-xl font-bold text-text-primary">{service.name}</h2>
        <p className="mt-1 text-sm text-primary font-medium">
          {service.specialty.name}
        </p>

        <p className="mt-4 leading-relaxed text-text-secondary">
          {service.description}
        </p>

        <div className="mt-6 flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <PiClock size={16} className="text-primary" />
            <span>{service.duration} min</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <PiCurrencyDollar size={16} className="text-primary" />
            <span>{formatPrice(service.price)}</span>
          </div>
        </div>

        <div className="mt-6">
          <Link href={`/booking?service=${service.id}`}>
            <Button variant="primary" className="w-full">
              Book This Service
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services = mockServices;
  const specialties = mockSpecialties;

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchSpecialty =
        selectedSpecialty === "all" || s.specialty.slug === selectedSpecialty;
      const matchSearch =
        !search ||
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase());
      return matchSpecialty && matchSearch;
    });
  }, [services, selectedSpecialty, search]);

  return (
    <>
      <section className="bg-primary/5 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h1 className="text-center text-[28px] font-bold text-text-primary md:text-[40px]">
            Our Services
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-center text-text-secondary">
            Comprehensive obstetrics & gynecology services tailored to your
            needs.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Specialty Filter */}
            <div className="flex items-center gap-2 overflow-x-auto">
              <PiFunnel size={18} className="shrink-0 text-text-secondary" />
              <button
                onClick={() => setSelectedSpecialty("all")}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  selectedSpecialty === "all"
                    ? "bg-primary text-white"
                    : "bg-surface text-text-secondary shadow-sm hover:shadow-md"
                }`}>
                All
              </button>
              {specialties.map((sp) => (
                <button
                  key={sp.id}
                  onClick={() => setSelectedSpecialty(sp.slug)}
                  className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    selectedSpecialty === sp.slug
                      ? "bg-primary text-white"
                      : "bg-surface text-text-secondary shadow-sm hover:shadow-md"
                  }`}>
                  {sp.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <PiMagnifyingGlass
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
              />
              <input
                type="text"
                placeholder="Search services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-border bg-surface py-2 pl-9 pr-3 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 sm:w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {filtered.length === 0 ? (
            <div className="py-16 text-center text-text-secondary">
              <p className="text-lg">
                No services found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedSpecialty("all");
                  setSearch("");
                }}
                className="mt-2 text-primary hover:underline">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((service) => {
                const Icon = iconMap[service.icon || ""] || PiStethoscope;
                return (
                  <Card key={service.id} hover className="flex flex-col">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-secondary">
                      {service.specialty.name}
                    </p>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary line-clamp-3">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                      <div className="flex items-center gap-4 text-xs text-text-secondary">
                        <span className="flex items-center gap-1">
                          <PiClock size={14} /> {service.duration} min
                        </span>
                        <span className="flex items-center gap-1">
                          <PiCurrencyDollar size={14} />{" "}
                          {formatPrice(service.price)}
                        </span>
                      </div>
                      <button
                        onClick={() => setSelectedService(service)}
                        className="text-sm font-medium text-primary hover:underline">
                        Details
                      </button>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
}
