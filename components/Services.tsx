import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";
import { ServiceCard } from "./ServiceCard";

const SLUGS = ["walkthrough.jpg", "drone.jpg", "agent-branding.jpg", "reels.jpg", "photography.jpg"];

export function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as { number: string; title: string; body: string }[];

  const [first, second, ...rest] = items;
  const [firstSlug, secondSlug, ...restSlugs] = SLUGS;

  return (
    <section id="services" className="bg-bg py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display text-3xl tracking-tight sm:text-5xl">
            {t("heading")}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <ServiceCard
              large
              number={first.number}
              title={first.title}
              body={first.body}
              video={`/videos/services/${firstSlug}.mp4`}
              poster={`/images/services/${firstSlug}`}
            />
          </Reveal>
          <Reveal delay={60}>
            <ServiceCard
              large
              number={second.number}
              title={second.title}
              body={second.body}
              video={`/videos/services/${secondSlug}.mp4`}
              poster={`/images/services/${secondSlug}`}
            />
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {rest.map((item, index) => (
            <Reveal key={item.number} delay={120 + index * 60}>
              <ServiceCard
                number={item.number}
                title={item.title}
                body={item.body}
                video={`/videos/services/${restSlugs[index]}.mp4`}
                poster={`/images/services/${restSlugs[index]}`}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
