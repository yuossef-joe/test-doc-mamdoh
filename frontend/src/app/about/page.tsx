import type { Metadata } from "next";
import Image from "next/image";
import {
  PiGraduationCap,
  PiBriefcase,
  PiTrophy,
  PiGlobe,
  PiFacebookLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiTwitterLogo,
} from "react-icons/pi";
import { doctorProfile as doctor } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "About Dr. Mohamed Mamdoh",
  description:
    "Learn about Dr. Mohamed Mamdoh — qualifications, experience, and achievements in obstetrics and gynecology.",
};

export default function AboutPage() {
  return (
    <>
      {/* Profile Header */}
      <section className="bg-primary/5 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            {/* Photo */}
            <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg md:h-56 md:w-56">
              <Image
                src={doctor.photo}
                alt={doctor.name}
                fill
                className="object-cover object-top"
                sizes="224px"
                priority
              />
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <h1 className="text-[28px] font-bold text-text-primary md:text-[36px]">
                {doctor.name}
              </h1>
              <p className="mt-1 text-lg font-medium text-primary">
                {doctor.title}
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                {doctor.experienceYears}+ years of experience
              </p>

              <div className="mt-4 flex items-center justify-center gap-2 md:justify-start">
                <PiGlobe size={16} className="text-text-secondary" />
                <span className="text-sm text-text-secondary">
                  {doctor.languages.join(", ")}
                </span>
              </div>

              {/* Social Links */}
              <div className="mt-4 flex items-center justify-center gap-3 md:justify-start">
                {[
                  { icon: PiFacebookLogo, href: doctor.socialLinks.facebook },
                  { icon: PiInstagramLogo, href: doctor.socialLinks.instagram },
                  { icon: PiLinkedinLogo, href: doctor.socialLinks.linkedin },
                  { icon: PiTwitterLogo, href: doctor.socialLinks.twitter },
                ].map(
                  (social, i) =>
                    social.href && (
                      <a
                        key={i}
                        href={social.href}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-text-secondary shadow-sm transition-all hover:bg-primary hover:text-white hover:shadow-md"
                        aria-label="Social media">
                        <social.icon size={18} />
                      </a>
                    ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <h2 className="text-xl font-bold text-text-primary md:text-2xl">
            About
          </h2>
          <p className="mt-4 leading-relaxed text-text-secondary">
            {doctor.bio}
          </p>
        </div>
      </section>

      {/* Qualifications */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="flex items-center gap-3">
            <PiGraduationCap size={24} className="text-primary" />
            <h2 className="text-xl font-bold text-text-primary md:text-2xl">
              Qualifications
            </h2>
          </div>
          <div className="mt-6 space-y-4">
            {doctor.qualifications.map((q) => (
              <div
                key={q.id}
                className="rounded-lg bg-surface p-4 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="font-semibold text-text-primary">{q.degree}</h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {q.institution} — {q.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="flex items-center gap-3">
            <PiBriefcase size={24} className="text-primary" />
            <h2 className="text-xl font-bold text-text-primary md:text-2xl">
              Experience
            </h2>
          </div>
          <div className="mt-6 space-y-4">
            {doctor.experience.map((exp) => (
              <div
                key={exp.id}
                className="rounded-lg bg-surface p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-text-primary">
                      {exp.position}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {exp.organization}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm text-text-secondary">
                    {exp.startYear} — {exp.current ? "Present" : exp.endYear}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="flex items-center gap-3">
            <PiTrophy size={24} className="text-primary" />
            <h2 className="text-xl font-bold text-text-primary md:text-2xl">
              Achievements
            </h2>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {doctor.achievements.map((a) => (
              <div
                key={a.id}
                className="rounded-lg bg-surface p-4 shadow-sm text-center transition-shadow hover:shadow-md">
                <PiTrophy size={28} className="mx-auto text-secondary" />
                <h3 className="mt-2 font-semibold text-text-primary">
                  {a.title}
                </h3>
                {a.description && (
                  <p className="mt-1 text-xs text-text-secondary">
                    {a.description}
                  </p>
                )}
                {a.year && (
                  <p className="mt-1 text-xs text-text-secondary">{a.year}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
