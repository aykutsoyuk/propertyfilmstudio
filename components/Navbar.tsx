"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";

const SECTIONS = ["work", "services", "process", "about", "contact"] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
          <a
            href="#top"
            className="font-display text-sm font-medium tracking-[0.18em]"
          >
            PROPERTY FILM STUDIO
          </a>

          <nav className="hidden items-center gap-9 text-sm tracking-wide lg:flex">
            {SECTIONS.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-ink/80 transition-colors hover:text-ink"
              >
                {t(section)}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            {/* <LanguageSwitcher /> */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 text-sm font-medium tracking-wide"
            >
              {t("cta").replace(" →", "")}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <button
            type="button"
            className="-mr-2 p-2 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label={tCommon("openMenu")}
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-bg lg:hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-display text-sm font-medium tracking-[0.18em]">
              PROPERTY FILM STUDIO
            </span>
            <button
              type="button"
              className="-mr-2 p-2"
              onClick={() => setOpen(false)}
              aria-label={tCommon("closeMenu")}
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-8 px-8">
            {SECTIONS.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setOpen(false)}
                className="font-display text-3xl"
              >
                {t(section)}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-between border-t border-border px-8 py-8">
            <LanguageSwitcher />
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-sm font-medium tracking-wide"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
