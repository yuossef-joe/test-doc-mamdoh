import { cn } from "@/lib/utils";

type BadgeVariant =
  | "confirmed"
  | "pending"
  | "cancelled"
  | "completed"
  | "paid"
  | "unpaid"
  | "featured"
  | "draft";

const variantStyles: Record<BadgeVariant, string> = {
  confirmed: "bg-emerald-100 text-emerald-800",
  pending: "bg-amber-100 text-amber-800",
  cancelled: "bg-red-100 text-red-800",
  completed: "bg-primary-light text-primary-dark",
  paid: "bg-emerald-100 text-emerald-800",
  unpaid: "bg-red-100 text-red-800",
  featured: "bg-secondary-light text-secondary-dark",
  draft: "bg-slate-100 text-text-secondary",
};

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantStyles[variant],
        className,
      )}>
      {children}
    </span>
  );
}
