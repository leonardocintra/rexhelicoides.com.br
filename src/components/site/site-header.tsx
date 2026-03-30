"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiMessageCircle, FiX } from "react-icons/fi";
import CtaLink from "@/components/site/cta-link";
import { navigation, whatsappQuoteUrl } from "@/content/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 text-white backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between gap-4 py-4">
        <Link
          className="flex items-center gap-3"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          <Image
            alt="Rex Helicoides"
            className="h-auto w-36"
            height={56}
            priority
            src="/logo-white.png"
            width={148}
          />
        </Link>

        <button
          aria-expanded={isOpen}
          aria-label="Abrir menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>

        <div
          className={`${isOpen ? "flex" : "hidden"} absolute inset-x-4 top-[76px] flex-col gap-4 rounded-[28px] border border-white/10 bg-slate-950/95 p-5 shadow-glow lg:static lg:flex lg:flex-row lg:items-center lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          <nav className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-1">
            {navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] ${isActive ? "bg-white/10 text-orange-200" : "text-slate-200 hover:text-white"}`}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <CtaLink href={whatsappQuoteUrl} external icon={<FiMessageCircle />}>
            Orcamento rapido
          </CtaLink>
        </div>
      </div>
    </header>
  );
}