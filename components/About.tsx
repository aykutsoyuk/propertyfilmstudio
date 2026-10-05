import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { EMAIL, INSTAGRAM_URL, YOUTUBE_URL } from "@/content/site";

export function About() {
  const t = useTranslations("about");
  const tCta = useTranslations("finalCta");
  const facts = t.raw("facts") as { value: string; label: string }[];

  return (
    <section id="about" className="bg-bg py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-20">
          <Reveal>
            <div className="aspect-[4/5] w-full max-w-sm border border-border bg-[#eceae4] flex items-center justify-center">
              <span className="font-display text-5xl tracking-tight text-ink-soft/50">
                A.
              </span>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
                {t("heading")}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed">
                {t("paragraph1")}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
                {t("paragraph2")}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-12 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <p className="font-display text-lg tracking-tight">
                      {fact.value}
                    </p>
                    <p className="mt-1 text-sm text-ink-soft">{fact.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-10 flex items-center gap-6 text-sm text-ink-soft">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
                >
                  {t("social.instagram")}
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </a>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
                >
                  {t("social.youtube")}
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={200}>
          <div
            id="contact"
            className="mt-24 border-t border-border pt-16 text-center lg:mt-32 lg:pt-20"
          >
            <h2 className="mx-auto max-w-xl font-display text-3xl tracking-tight sm:text-4xl">
              {tCta("headline")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              {tCta("body")}
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-10 inline-flex items-center gap-2 border border-ink px-8 py-3.5 text-sm font-medium tracking-wide transition-colors hover:bg-ink hover:text-bg"
            >
              {tCta("cta")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
