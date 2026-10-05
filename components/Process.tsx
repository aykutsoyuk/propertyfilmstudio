import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

export function Process() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as { number: string; title: string; body: string }[];

  return (
    <section id="process" className="bg-bg py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display text-3xl tracking-tight sm:text-5xl">
            {t("heading")}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
              <span className="font-display text-sm text-ink-soft">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-xl tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
