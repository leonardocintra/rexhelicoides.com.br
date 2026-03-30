import Link from "next/link";
import type { ReactNode } from "react";

type CtaLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  external?: boolean;
};

export default function CtaLink({
  children,
  href,
  variant = "primary",
  icon,
  external = false,
}: CtaLinkProps) {
  const baseClassName =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-200";

  const variantClassName =
    variant === "primary"
      ? "bg-ember text-white shadow-lg shadow-orange-500/20 hover:bg-[#dc650f]"
      : "border border-current bg-transparent text-current hover:bg-white/10";

  return (
    <Link
      className={`${baseClassName} ${variantClassName}`}
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {children}
      {icon}
    </Link>
  );
}