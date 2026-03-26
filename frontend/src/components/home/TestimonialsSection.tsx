"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Card from "@/components/common/Card";
import StarRating from "@/components/common/StarRating";
import type { Testimonial } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { PiQuotes, PiCaretLeft, PiCaretRight } from "react-icons/pi";
import { testimonials as mockTestimonials } from "@/lib/mock-data";

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const items =
    testimonials && testimonials.length > 0 ? testimonials : mockTestimonials;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })],
  );

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-[26px] font-bold text-text-primary md:text-[36px]">
            What Our Patients Say
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-text-secondary">
            Trusted by families — hear from our patients about their experience.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {items.map((t) => (
                <div
                  key={t.id}
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                  <Card className="relative h-full shadow-md">
                    <PiQuotes
                      size={40}
                      className="absolute right-4 top-4 text-secondary/20"
                    />
                    <StarRating rating={t.rating} />
                    <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                      &ldquo;{t.review}&rdquo;
                    </p>
                    <div className="mt-4 border-t border-border pt-3">
                      <p className="text-sm font-semibold text-text-primary">
                        {t.patientName}
                      </p>
                      <p className="text-xs text-text-muted">
                        {formatDate(t.date)}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            aria-label="Previous testimonial"
            className="absolute -left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-surface shadow-md text-text-primary transition-colors hover:bg-primary hover:text-white disabled:opacity-30">
            <PiCaretLeft size={20} />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            aria-label="Next testimonial"
            className="absolute -right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-surface shadow-md text-text-primary transition-colors hover:bg-primary hover:text-white disabled:opacity-30">
            <PiCaretRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
