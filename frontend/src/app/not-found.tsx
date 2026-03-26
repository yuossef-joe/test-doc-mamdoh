import Link from "next/link";
import { Button } from "@/components/common";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-16">
      <div className="px-4 text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-text-primary">
          Page Not Found
        </h2>
        <p className="mt-2 text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/">
            <Button variant="primary">Go Home</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
