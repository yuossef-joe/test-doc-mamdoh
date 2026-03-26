import Link from "next/link";
import { PiXCircle } from "react-icons/pi";
import { Button } from "@/components/common";

export default function PaymentFailedPage() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-16">
      <div className="w-full max-w-md px-4">
        <div className="rounded-lg bg-surface p-8 text-center shadow-md">
          <PiXCircle size={56} className="mx-auto text-red-500" />
          <h1 className="mt-4 text-2xl font-bold text-text-primary">
            Payment Failed
          </h1>
          <p className="mt-2 text-sm text-text-secondary">
            Something went wrong with your payment. Your booking is still
            reserved — please try again.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/payment">
              <Button variant="primary">Try Again</Button>
            </Link>
            <Link href="/patient/appointments">
              <Button variant="outline">View Appointments</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
