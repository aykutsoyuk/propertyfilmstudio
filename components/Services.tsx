import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";
import { ServiceCard } from "./ServiceCard";

const SLUGS = ["walkthrough.jpg", "drone.jpg", "agent-branding.jpg", "reels.jpg", "photography.jpg"];

export function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as { number: string; title: string }[];

  const [first, second, ...rest] = items;
  const [firstSlug, secondSlug, ...restSlugs] = SLUGS;

  return (
    <section id="services" className="bg-bg py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
            {t("heading")}
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:gap-4">
          <Reveal>
            <ServiceCard
              large
              title={first.title}
              poster={`/images/services/${firstSlug}`}
            />
          </Reveal>
          <Reveal delay={60}>
            <ServiceCard
              large
              title={second.title}
              poster={`/images/services/${secondSlug}`}
            />
          </Reveal>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-3 lg:mt-4 lg:gap-4">
          {rest.map((item, index) => (
            <Reveal key={item.number} delay={120 + index * 60}>
              <ServiceCard
                title={item.title}
                poster={`/images/services/${restSlugs[index]}`}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
