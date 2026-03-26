"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";
import {
  PiHeartbeat,
  PiCaretRight,
  PiCheckCircle,
  PiStarFill,
  PiShieldCheck,
} from "react-icons/pi";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
}

export default function HeroSection({
  title = "Expert Care for Every Stage of",
  subtitle = "Comprehensive, compassionate, and advanced obstetric and gynecological care tailored to your unique health journey.",
  imageUrl = "/images/ultrasound.gif",
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-10 lg:pb-28 lg:pt-20">
      {/* Subtle background decorations */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-secondary/[0.04] blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-16 px-4 md:px-8 lg:flex-row lg:gap-12">
        {/* ── Text Column ── */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2.5 rounded-full border border-secondary/15 bg-secondary/5 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-wide text-secondary">
            <PiHeartbeat size={16} className="shrink-0" />
            Over 20 Years of Excellence
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up-delay-1 mb-6 text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
            {title}{" "}
            <span className="bg-gradient-to-r from-secondary to-secondary-dark bg-clip-text text-transparent">
              Womanhood
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up-delay-2 mx-auto mb-10 max-w-xl text-[1.05rem] leading-relaxed text-text-secondary lg:mx-0 lg:text-lg">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up-delay-3 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Link href="/booking">
              <Button
                size="lg"
                variant="secondary"
                className="w-full shadow-lg shadow-secondary/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-secondary/30 sm:w-auto">
                Book Your Consultation <PiCaretRight size={18} />
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-border bg-white text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:text-text-primary hover:shadow-md sm:w-auto">
                Patient Portal Login
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-in-up-delay-3 mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary lg:justify-start">
            <div className="flex items-center gap-1.5">
              <PiShieldCheck size={18} className="text-primary" />
              <span>Board Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <PiStarFill key={i} size={14} />
                ))}
              </div>
              <span>5.0 Rating</span>
            </div>
          </div>
        </div>

        {/* ── Image Column ── */}
        <div className="animate-fade-in-right relative w-full max-w-md flex-1 lg:max-w-lg">
          {/* Decorative ring */}
          <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-sm" />

          <div className="relative">
            <Image
              src={imageUrl}
              alt="Prof. Mohamed Mamdouh Saleh"
              width={1000}
              height={1000}
              className="relative z-10 h-auto w-full rounded-[2.5rem] object-cover object-top shadow-xl ring-1 ring-black/[0.04]"
              priority
              unoptimized
            />

            {/* Floating card — Happy Patients */}
            <div className="animate-float absolute -bottom-5 -left-4 z-20 flex items-center gap-3.5 rounded-2xl border border-border/60 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm sm:-left-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
                <PiCheckCircle size={22} />
              </div>
              <div>
                <p className="text-xl font-bold leading-tight text-text-primary">
                  5,000+
                </p>
                <p className="text-xs font-medium text-text-secondary">
                  Happy Patients
                </p>
              </div>
            </div>

            {/* Floating card — Experience */}
            <div
              className="animate-float absolute -right-2 top-8 z-20 flex items-center gap-3 rounded-xl border border-border/60 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm sm:-right-6"
              style={{ animationDelay: "2s" }}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <PiStarFill size={18} />
              </div>
              <div>
                <p className="text-lg font-bold leading-tight text-text-primary">
                  20+
                </p>
                <p className="text-xs font-medium text-text-secondary">
                  Years Exp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
