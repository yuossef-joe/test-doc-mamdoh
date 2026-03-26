import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";

interface AboutSectionProps {
  bio?: string;
  photoUrl?: string;
}

export default function AboutSection({
  bio = "Prof. Mohamed Mamdouh Saleh is a distinguished Obstetrics & Gynecology Senior Consultant with decades of experience in women's health. He is dedicated to providing compassionate, evidence-based care for women at every stage of life — from prenatal care to postpartum recovery.",
  photoUrl,
}: AboutSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="overflow-hidden rounded-lg bg-surface shadow-lg">
          <div className="grid grid-cols-1 items-center gap-8 p-6 md:grid-cols-2 md:p-10">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-4 border-secondary/30 md:h-80 md:w-80">
                {photoUrl ? (
                  <Image
                    src={photoUrl}
                    alt="Prof. Mohamed Mamdouh Saleh"
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                    <span className="text-6xl font-bold text-primary/30">
                      M
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Text */}
            <div>
              <h2 className="text-[26px] font-bold text-text-primary md:text-[36px] leading-tight">
                About Prof. Mohamed
              </h2>
              <div className="mt-1 h-1 w-16 rounded-full bg-secondary" />
              <p className="mt-6 text-base leading-relaxed text-text-secondary">
                {bio}
              </p>
              <div className="mt-6">
                <Link href="/about">
                  <Button variant="ghost">Read More →</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
