import { useTranslations } from "next-intl";
import { HeroVideo } from "./HeroVideo";
import { EMAIL } from "@/content/site";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden bg-black text-white"
    >
      <HeroVideo />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
        <p className="text-xs font-medium tracking-[0.25em] text-white/80">
          {t("kicker")}
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.1] tracking-tight sm:text-6xl lg:text-8xl">
          {t("headline")}
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85 lg:text-lg">
          {t("body")}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-8">
          <a
            href="#work"
            className="inline-flex items-center border border-white/70 px-7 py-3.5 text-sm font-medium tracking-wide transition-colors hover:bg-white hover:text-black"
          >
            {t("ctaPrimary")}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-1.5 text-sm font-medium tracking-wide"
          >
            {t("ctaSecondary").replace(" →", "")}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <p className="mt-14 text-xs font-medium tracking-[0.2em] text-white/70">
          {t("location")}
        </p>
      </div>
    </section>
  );
}
