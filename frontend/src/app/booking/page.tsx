"use client";

import { useState, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  PiCheck,
  PiStethoscope,
  PiCalendar,
  PiClock,
  PiUser,
  PiClipboardText,
  PiArrowLeft,
  PiArrowRight,
} from "react-icons/pi";
import { Button } from "@/components/common";
import { cn, formatPrice } from "@/lib/utils";
import type { Service, TimeSlot } from "@/lib/types";
import {
  services as mockServices,
  availableDates as mockAvailableDates,
  timeSlots as mockTimeSlots,
} from "@/lib/mock-data";

// ============================================
// Step indicator
// ============================================
const STEPS = [
  { label: "Service", icon: PiStethoscope },
  { label: "Date", icon: PiCalendar },
  { label: "Time", icon: PiClock },
  { label: "Details", icon: PiUser },
  { label: "Review", icon: PiClipboardText },
] as const;

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-0 md:gap-2">
      {STEPS.map((step, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={step.label} className="flex items-center">
            <div className="flex flex-col items-center gap-1">
              <div
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-colors md:h-10 md:w-10",
                  done && "bg-primary text-white",
                  active && "bg-primary text-white ring-4 ring-primary/20",
                  !done && !active && "bg-muted text-text-secondary",
                )}>
                {done ? <PiCheck size={18} /> : <step.icon size={18} />}
              </div>
              <span
                className={cn(
                  "hidden text-xs md:block",
                  active ? "font-semibold text-primary" : "text-text-secondary",
                )}>
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={cn(
                  "mx-1 h-0.5 w-6 md:mx-2 md:w-10",
                  i < current ? "bg-primary" : "bg-muted",
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ============================================
// Main booking wizard
// ============================================
function BookingWizard() {
  const searchParams = useSearchParams();
  const preselectedId = searchParams.get("service");

  const services = mockServices;
  const availableDates = mockAvailableDates;
  const timeSlots = mockTimeSlots;

  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState<Service | null>(
    preselectedId
      ? (services.find((s) => s.id === Number(preselectedId)) ?? null)
      : null,
  );
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [patientInfo, setPatientInfo] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const canProceed = useCallback(() => {
    switch (step) {
      case 0:
        return !!selectedService;
      case 1:
        return !!selectedDate;
      case 2:
        return !!selectedSlot;
      case 3:
        return !!patientInfo.name && !!patientInfo.email && !!patientInfo.phone;
      default:
        return true;
    }
  }, [step, selectedService, selectedDate, selectedSlot, patientInfo]);

  const next = () => {
    if (step < 4 && canProceed()) setStep(step + 1);
  };
  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <>
      <section className="bg-primary/5 py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h1 className="mb-6 text-center text-[24px] font-bold text-text-primary md:text-[32px]">
            Book an Appointment
          </h1>
          <StepIndicator current={step} />
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <div className="rounded-lg bg-surface p-6 shadow-md md:p-8">
            {/* Step 0: Service Selection */}
            {step === 0 && (
              <div>
                <h2 className="text-lg font-bold text-text-primary">
                  Select a Service
                </h2>
                <div className="mt-4 space-y-3">
                  {services.map((svc) => (
                    <button
                      key={svc.id}
                      onClick={() => setSelectedService(svc)}
                      className={cn(
                        "w-full rounded-lg border-2 p-4 text-left transition-all",
                        selectedService?.id === svc.id
                          ? "border-primary bg-primary/5 shadow-md"
                          : "border-border hover:border-primary/40 hover:shadow-sm",
                      )}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-text-primary">
                            {svc.name}
                          </h3>
                          <p className="mt-0.5 text-sm text-text-secondary">
                            {svc.description}
                          </p>
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="font-semibold text-primary">
                            {formatPrice(svc.price)}
                          </p>
                          <p className="text-xs text-text-secondary">
                            {svc.duration} min
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Date Selection */}
            {step === 1 && (
              <div>
                <h2 className="text-lg font-bold text-text-primary">
                  Choose a Date
                </h2>
                <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
                  {availableDates.map((date) => {
                    const d = new Date(date + "T00:00:00");
                    const dayName = d.toLocaleDateString("en-US", {
                      weekday: "short",
                    });
                    const dayNum = d.getDate();
                    const month = d.toLocaleDateString("en-US", {
                      month: "short",
                    });
                    return (
                      <button
                        key={date}
                        onClick={() => {
                          setSelectedDate(date);
                          setSelectedSlot(null);
                        }}
                        className={cn(
                          "flex flex-col items-center rounded-lg border-2 p-3 transition-all",
                          selectedDate === date
                            ? "border-primary bg-primary/5 shadow-md"
                            : "border-border hover:border-primary/40",
                        )}>
                        <span className="text-xs text-text-secondary">
                          {dayName}
                        </span>
                        <span className="text-lg font-bold text-text-primary">
                          {dayNum}
                        </span>
                        <span className="text-xs text-text-secondary">
                          {month}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Time Selection */}
            {step === 2 && (
              <div>
                <h2 className="text-lg font-bold text-text-primary">
                  Choose a Time
                </h2>
                <p className="mt-1 text-sm text-text-secondary">
                  Available slots for{" "}
                  {new Date(selectedDate + "T00:00:00").toLocaleDateString(
                    "en-US",
                    {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      disabled={slot.isBooked}
                      onClick={() => setSelectedSlot(slot)}
                      className={cn(
                        "rounded-lg border-2 px-3 py-2 text-sm font-medium transition-all",
                        slot.isBooked &&
                          "cursor-not-allowed border-border bg-muted text-text-secondary/50 line-through",
                        !slot.isBooked &&
                          selectedSlot?.time === slot.time &&
                          "border-primary bg-primary/5 text-primary shadow-md",
                        !slot.isBooked &&
                          selectedSlot?.time !== slot.time &&
                          "border-border text-text-primary hover:border-primary/40",
                      )}>
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Patient Info */}
            {step === 3 && (
              <div>
                <h2 className="text-lg font-bold text-text-primary">
                  Your Information
                </h2>
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-text-primary">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={patientInfo.name}
                      onChange={(e) =>
                        setPatientInfo({ ...patientInfo, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-text-primary">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={patientInfo.email}
                        onChange={(e) =>
                          setPatientInfo({
                            ...patientInfo,
                            email: e.target.value,
                          })
                        }
                        className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-text-primary">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={patientInfo.phone}
                        onChange={(e) =>
                          setPatientInfo({
                            ...patientInfo,
                            phone: e.target.value,
                          })
                        }
                        className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="+966 XX XXX XXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-text-primary">
                      Notes (optional)
                    </label>
                    <textarea
                      value={patientInfo.notes}
                      onChange={(e) =>
                        setPatientInfo({
                          ...patientInfo,
                          notes: e.target.value,
                        })
                      }
                      rows={3}
                      className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Any additional notes for the doctor"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {step === 4 && (
              <div>
                <h2 className="text-lg font-bold text-text-primary">
                  Review Your Booking
                </h2>
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg bg-background p-4">
                    <h3 className="text-sm font-semibold text-text-secondary">
                      Service
                    </h3>
                    <p className="mt-1 font-medium text-text-primary">
                      {selectedService?.name}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {selectedService?.duration} min —{" "}
                      {formatPrice(selectedService?.price || 0)}
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg bg-background p-4">
                      <h3 className="text-sm font-semibold text-text-secondary">
                        Date
                      </h3>
                      <p className="mt-1 font-medium text-text-primary">
                        {new Date(
                          selectedDate + "T00:00:00",
                        ).toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="rounded-lg bg-background p-4">
                      <h3 className="text-sm font-semibold text-text-secondary">
                        Time
                      </h3>
                      <p className="mt-1 font-medium text-text-primary">
                        {selectedSlot?.time}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-background p-4">
                    <h3 className="text-sm font-semibold text-text-secondary">
                      Patient
                    </h3>
                    <p className="mt-1 font-medium text-text-primary">
                      {patientInfo.name}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {patientInfo.email} · {patientInfo.phone}
                    </p>
                    {patientInfo.notes && (
                      <p className="mt-1 text-sm text-text-secondary">
                        Notes: {patientInfo.notes}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              {step > 0 ? (
                <Button variant="outline" onClick={prev}>
                  <PiArrowLeft size={16} className="mr-1" /> Back
                </Button>
              ) : (
                <div />
              )}
              {step < 4 ? (
                <Button
                  variant="primary"
                  onClick={next}
                  disabled={!canProceed()}>
                  Next <PiArrowRight size={16} className="ml-1" />
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={() => alert("Booking confirmed! (placeholder)")}>
                  Confirm Booking
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function BookingPage() {
  return (
    <Suspense>
      <BookingWizard />
    </Suspense>
  );
}
