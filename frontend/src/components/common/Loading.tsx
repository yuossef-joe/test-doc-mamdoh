import { cn } from "@/lib/utils";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  fullPage?: boolean;
}

export default function Loading({
  size = "md",
  className,
  fullPage = false,
}: LoadingProps) {
  const sizes = { sm: "h-5 w-5", md: "h-8 w-8", lg: "h-12 w-12" };

  const spinner = (
    <div
      className={cn(
        "rounded-full border-2 border-border border-t-primary animate-spin",
        sizes[size],
        className,
      )}
      role="status"
      aria-label="Loading">
      <span className="sr-only">Loading...</span>
    </div>
  );

  if (fullPage) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        {spinner}
      </div>
    );
  }

  return spinner;
}

// Skeleton placeholder for content loading
export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("skeleton h-4 w-full", className)} {...props} />;
}
