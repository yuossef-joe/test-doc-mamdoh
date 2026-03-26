import Link from "next/link";
import {
  PiPhone,
  PiEnvelope,
  PiMapPin,
  PiFacebookLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
} from "react-icons/pi";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/booking", label: "Book Appointment" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="bg-sidebar text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                M
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">
                  Prof. Mohamed Mamdouh
                </p>
                <p className="text-xs text-text-muted">
                  Obs/Gyn Senior Consultant
                </p>
              </div>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Expert care for every stage of motherhood. Providing compassionate
              obstetrics and gynecology services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <PiMapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                <span>Clinic Address, City, Saudi Arabia</span>
              </li>
              <li>
                <a
                  href="tel:+966000000000"
                  className="flex items-center gap-2 hover:text-primary transition-colors">
                  <PiPhone size={18} className="shrink-0 text-primary" />
                  +966 00 000 0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@example.com"
                  className="flex items-center gap-2 hover:text-primary transition-colors">
                  <PiEnvelope size={18} className="shrink-0 text-primary" />
                  info@example.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
              Legal
            </h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary">
                <PiFacebookLogo size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary">
                <PiInstagramLogo size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary">
                <PiLinkedinLogo size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-text-muted">
          <p>
            © {new Date().getFullYear()} Prof. Mohamed Mamdouh Saleh. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
