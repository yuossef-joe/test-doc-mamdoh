"use client";

import { Button } from "@/components/common";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <section className="flex min-h-screen items-center justify-center py-16">
          <div className="px-4 text-center">
            <h1 className="text-7xl font-bold text-red-500">500</h1>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">
              Something Went Wrong
            </h2>
            <p className="mt-2 text-gray-600">
              An unexpected error occurred. Please try again.
            </p>
            <div className="mt-6">
              <Button variant="primary" onClick={reset}>
                Try Again
              </Button>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
