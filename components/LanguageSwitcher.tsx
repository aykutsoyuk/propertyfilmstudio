"use client";

import { useLocale } from "next-intl";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale();

  function switchTo(nextLocale: "pt" | "en") {
    if (nextLocale === locale) return;
    const hash = window.location.hash;
    // Full navigation on purpose: locale switch must re-render the root
    // <html lang> attribute and all server-rendered metadata.
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.href = `${nextLocale === "en" ? "/en" : "/"}${hash}`;
  }

  return (
    <div className={`flex items-center gap-1 text-sm tracking-wide ${className}`}>
      <button
        type="button"
        onClick={() => switchTo("pt")}
        aria-current={locale === "pt"}
        className={`transition-opacity ${
          locale === "pt" ? "opacity-100" : "opacity-45 hover:opacity-80"
        }`}
      >
        PT
      </button>
      <span aria-hidden="true" className="opacity-40">
        |
      </span>
      <button
        type="button"
        onClick={() => switchTo("en")}
        aria-current={locale === "en"}
        className={`transition-opacity ${
          locale === "en" ? "opacity-100" : "opacity-45 hover:opacity-80"
        }`}
      >
        EN
      </button>
    </div>
  );
}
