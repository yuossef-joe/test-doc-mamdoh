"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { submitContactForm } from "@/lib/api";
import { Button, Input } from "@/components/common";
import {
  PiMapPin,
  PiPhone,
  PiEnvelope,
  PiClock,
  PiFacebookLogo,
  PiInstagramLogo,
  PiTwitterLogo,
  PiCheckCircle,
} from "react-icons/pi";

const contactInfo = [
  { icon: PiMapPin, label: "Address", value: "Riyadh, Saudi Arabia" },
  { icon: PiPhone, label: "Phone", value: "+966 XX XXX XXXX" },
  { icon: PiEnvelope, label: "Email", value: "info@drmamdoh.com" },
  { icon: PiClock, label: "Working Hours", value: "Sun - Thu: 9 AM - 9 PM" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitError("");
    try {
      await submitContactForm(data);
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      {/* Header */}
      <section className="bg-primary/5 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h1 className="text-center text-[28px] font-bold text-text-primary md:text-[40px]">
            Contact Us
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-center text-text-secondary">
            Have a question or want to schedule a visit? We&apos;d love to hear
            from you.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-lg bg-surface p-6 shadow-md md:p-8">
              <h2 className="text-xl font-bold text-text-primary">
                Send a Message
              </h2>

              {submitted ? (
                <div className="mt-6 flex flex-col items-center py-8 text-center">
                  <PiCheckCircle size={48} className="text-green-500" />
                  <h3 className="mt-3 text-lg font-semibold text-text-primary">
                    Message Sent!
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      label="Full Name"
                      {...register("name")}
                      error={errors.name?.message}
                      required
                    />
                    <Input
                      label="Email"
                      type="email"
                      {...register("email")}
                      error={errors.email?.message}
                      required
                    />
                  </div>
                  <Input
                    label="Phone (optional)"
                    type="tel"
                    {...register("phone")}
                    error={errors.phone?.message}
                  />
                  <Input
                    label="Subject"
                    {...register("subject")}
                    error={errors.subject?.message}
                    required
                  />
                  <div>
                    <label className="mb-1 block text-sm font-medium text-text-primary">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="How can we help you?"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <p className="text-sm text-red-500">{submitError}</p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    loading={isSubmitting}>
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Info & Map */}
            <div className="space-y-6">
              {/* Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-lg bg-surface p-4 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary">
                        {item.label}
                      </h3>
                      <p className="mt-0.5 text-sm text-text-secondary">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="flex items-center gap-4">
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

              {/* Map */}
              <div className="overflow-hidden rounded-lg shadow-md">
                <div className="flex h-[280px] items-center justify-center bg-muted text-text-secondary">
                  <p className="text-sm">Google Maps will be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
