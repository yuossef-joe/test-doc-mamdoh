import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  accentColor?: "primary" | "secondary";
  padding?: "sm" | "md" | "lg";
}

export default function Card({
  children,
  className,
  hover = false,
  accentColor,
  padding = "lg",
}: CardProps) {
  const paddings = { sm: "p-4", md: "p-5", lg: "p-6" };

  return (
    <div
      className={cn(
        "bg-surface rounded-lg border border-border shadow-sm",
        paddings[padding],
        hover &&
          "transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md cursor-pointer",
        accentColor === "primary" && "border-t-3 border-t-primary",
        accentColor === "secondary" && "border-t-3 border-t-secondary",
        className,
      )}>
      {children}
    </div>
  );
}
