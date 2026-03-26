"use client";

import {
  PiMapPin,
  PiPhone,
  PiEnvelope,
  PiClock,
  PiInstagramLogo,
  PiTwitterLogo,
  PiFacebookLogo,
} from "react-icons/pi";
import { clinicInfo } from "@/lib/mock-data";

interface ContactSectionProps {
  address?: string;
  phone?: string;
  email?: string;
  workingHours?: string;
  mapUrl?: string;
}

const infoCards = [
  { icon: PiMapPin, label: "Address", key: "address" as const },
  { icon: PiPhone, label: "Phone", key: "phone" as const },
  { icon: PiEnvelope, label: "Email", key: "email" as const },
  { icon: PiClock, label: "Working Hours", key: "workingHours" as const },
];

export default function ContactSection({
  address,
  phone,
  email,
  workingHours,
  mapUrl,
}: ContactSectionProps) {
  const info = {
    address: address || clinicInfo.address,
    phone: phone || clinicInfo.phone,
    email: email || clinicInfo.email,
    workingHours: workingHours || "Sun - Thu: 9:00 AM - 9:00 PM",
  };

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-[26px] font-bold text-text-primary md:text-[36px]">
            Contact Us
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-text-secondary">
            Have a question or want to schedule a visit? Reach out to us.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Info Cards */}
          <div className="space-y-4">
            {infoCards.map((item) => (
              <div
                key={item.key}
                className="flex items-start gap-4 rounded-lg bg-surface p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {info[item.key]}
                  </p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-sm font-medium text-text-secondary">
                Follow us:
              </span>
              {[PiFacebookLogo, PiTwitterLogo, PiInstagramLogo].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-text-secondary shadow-sm transition-all hover:bg-primary hover:text-white hover:shadow-md"
                    aria-label="Social media">
                    <Icon size={18} />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-lg shadow-md">
            {mapUrl ? (
              <iframe
                src={mapUrl}
                className="h-[300px] w-full md:h-full"
                style={{ border: 0, minHeight: 300 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              />
            ) : (
              <div className="flex h-[300px] items-center justify-center bg-muted text-text-secondary md:h-full">
                <p className="text-sm">Map will be displayed here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
