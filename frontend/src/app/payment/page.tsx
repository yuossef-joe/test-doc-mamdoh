"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/common";
import { PiLock, PiCreditCard } from "react-icons/pi";
import { formatPrice } from "@/lib/utils";
import { useRouter } from "next/navigation";

function PaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const bookingId = searchParams.get("booking") || "";
  const amount = Number(searchParams.get("amount")) || 500;
  const serviceName = searchParams.get("service") || "Consultation";

  const [processing, setProcessing] = useState(false);

  const handlePayment = async () => {
    setProcessing(true);
    // Placeholder — would call initializePayment API
    setTimeout(() => {
      router.push("/payment/confirmation?booking=" + bookingId);
    }, 2000);
  };

  return (
    <section className="flex min-h-[60vh] items-center justify-center py-16">
      <div className="w-full max-w-md px-4">
        <div className="rounded-lg bg-surface p-6 shadow-md md:p-8">
          <div className="flex items-center justify-center gap-2 text-primary">
            <PiLock size={20} />
            <span className="text-sm font-medium">Secure Payment</span>
          </div>

          <h1 className="mt-4 text-center text-2xl font-bold text-text-primary">
            Complete Payment
          </h1>

          {/* Order Summary */}
          <div className="mt-6 rounded-lg bg-background p-4">
            <h3 className="text-sm font-semibold text-text-secondary">
              Order Summary
            </h3>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-text-primary">{serviceName}</span>
              <span className="font-semibold text-text-primary">
                {formatPrice(amount)}
              </span>
            </div>
            <div className="mt-2 border-t border-border pt-2">
              <div className="flex items-center justify-between font-semibold">
                <span className="text-text-primary">Total</span>
                <span className="text-primary">{formatPrice(amount)}</span>
              </div>
            </div>
          </div>

          {/* Payment Button */}
          <div className="mt-6">
            <Button
              variant="primary"
              className="w-full"
              onClick={handlePayment}
              loading={processing}>
              <PiCreditCard size={18} className="mr-2" />
              Pay {formatPrice(amount)}
            </Button>
            <p className="mt-3 text-center text-xs text-text-secondary">
              Your payment is processed securely. We do not store your card
              details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PaymentPage() {
  return (
    <Suspense>
      <PaymentContent />
    </Suspense>
  );
}
