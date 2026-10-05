import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

export function Why() {
  const t = useTranslations("why");
  const principles = t.raw("principles") as { title: string; body: string }[];

  return (
    <section className="bg-black py-32 text-white lg:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <h2 className="max-w-3xl font-display text-4xl leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            {t("heading")}
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/65 lg:text-lg">
            {t("body")}
          </p>
        </Reveal>

        <div className="mt-24 grid gap-14 border-t border-white/15 pt-16 sm:grid-cols-3 sm:gap-10">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 80}>
              <span className="font-display text-sm text-white/40">
                0{index + 1}
              </span>
              <h3 className="mt-3 font-display text-2xl tracking-tight">
                {principle.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {principle.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
