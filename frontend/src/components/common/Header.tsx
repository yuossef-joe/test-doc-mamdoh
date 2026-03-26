"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PiList, PiX } from "react-icons/pi";
import Button from "./Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-surface transition-shadow duration-200",
        scrolled && "shadow-sm",
      )}>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Prof. Mohamed Mamdouh Saleh — Obs/Gyn Senior Consultant"
            width={689}
            height={426}
            className="h-18 w-auto"
            style={{ filter: "invert(1)" }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors duration-150 hover:text-primary",
                pathname === link.href
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-text-primary",
              )}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/booking">
            <Button size="sm">Book Appointment</Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded text-text-primary hover:bg-background transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}>
          {mobileOpen ? <PiX size={24} /> : <PiList size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-18 z-40 bg-surface">
          <nav
            className="flex flex-col p-6 gap-2"
            aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={cn(
                  "block rounded px-4 py-3 text-base font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary-light text-primary"
                    : "text-text-primary hover:bg-background",
                )}>
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <Link href="/booking" className="block" onClick={handleNavClick}>
                <Button className="w-full">Book Appointment</Button>
              </Link>
              <Link
                href="/login"
                className="block mt-2"
                onClick={handleNavClick}>
                <Button variant="outline" className="w-full">
                  Patient Login
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
