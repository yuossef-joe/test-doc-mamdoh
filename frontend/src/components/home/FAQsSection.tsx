"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/types";
import { PiPlus, PiMinus } from "react-icons/pi";
import { cn } from "@/lib/utils";
import { faqs as mockFaqs } from "@/lib/mock-data";

interface FAQsSectionProps {
  faqs?: FAQ[];
}

export default function FAQsSection({ faqs }: FAQsSectionProps) {
  const items = faqs && faqs.length > 0 ? faqs : mockFaqs;
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[800px] px-4 md:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-[26px] font-bold text-text-primary md:text-[36px]">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-text-secondary">
            Find answers to common questions about our services.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-10 rounded-lg bg-surface p-4 shadow-md md:p-6">
          {items.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={cn(
                  "border-b border-border last:border-b-0",
                  index === 0 && "border-t-0",
                )}>
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-medium text-text-primary transition-colors hover:text-primary"
                  aria-expanded={isOpen}>
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <PiMinus size={20} className="shrink-0 text-primary" />
                  ) : (
                    <PiPlus size={20} className="shrink-0 text-primary" />
                  )}
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-250 ease-in-out",
                    isOpen ? "max-h-96 pb-4" : "max-h-0",
                  )}>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
