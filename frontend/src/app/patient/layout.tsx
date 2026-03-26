"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiHouse, PiCalendar, PiUser, PiSignOut } from "react-icons/pi";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/patient/dashboard", label: "Dashboard", icon: PiHouse },
  { href: "/patient/appointments", label: "Appointments", icon: PiCalendar },
  { href: "/patient/profile", label: "Profile", icon: PiUser },
];

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { patient, logout } = useAuth();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
      <div className="grid gap-8 md:grid-cols-[240px_1fr]">
        {/* Sidebar */}
        <aside className="rounded-lg bg-surface p-4 shadow-sm md:self-start md:sticky md:top-24">
          <div className="mb-4 border-b border-border pb-4">
            <p className="font-semibold text-text-primary truncate">
              {patient?.name || "Patient"}
            </p>
            <p className="text-xs text-text-secondary truncate">
              {patient?.email || ""}
            </p>
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-text-secondary hover:bg-muted hover:text-text-primary",
                )}>
                <item.icon size={18} />
                {item.label}
              </Link>
            ))}
            <button
              onClick={logout}
              className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-red-50 hover:text-red-600">
              <PiSignOut size={18} />
              Sign Out
            </button>
          </nav>
        </aside>

        {/* Content */}
        <main>{children}</main>
      </div>
    </div>
  );
}
