import Link from "next/link";
import { PiCheckCircle } from "react-icons/pi";
import { Button } from "@/components/common";

export default function PaymentConfirmationPage() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-16">
      <div className="w-full max-w-md px-4">
        <div className="rounded-lg bg-surface p-8 text-center shadow-md">
          <PiCheckCircle size={56} className="mx-auto text-green-500" />
          <h1 className="mt-4 text-2xl font-bold text-text-primary">
            Payment Successful!
          </h1>
          <p className="mt-2 text-sm text-text-secondary">
            Your booking has been confirmed. You will receive a confirmation
            email shortly.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/patient/appointments">
              <Button variant="primary">View Appointments</Button>
            </Link>
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
