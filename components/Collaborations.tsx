import { useTranslations } from "next-intl";
import Image from "next/image";
import { clients } from "@/content/clients";
import { Reveal } from "./Reveal";

// Repeat the list so one group is always wider than the viewport.
const REPEATS = 2;

function LogoGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {Array.from({ length: REPEATS }).flatMap((_, round) =>
        clients.map((client) => (
          <li
            key={`${round}-${client.name}`}
            className="relative mr-10 h-20 w-48 shrink-0 sm:mr-16 sm:h-24 sm:w-56 lg:mr-24 lg:h-28 lg:w-64"
          >
            <Image
              src={client.logo}
              alt={hidden ? "" : client.name}
              fill
              sizes="(min-width: 1024px) 256px, (min-width: 640px) 224px, 192px"
              unoptimized={client.logo.endsWith(".svg")}
              className="object-contain"
            />
          </li>
        )),
      )}
    </ul>
  );
}

export function Collaborations() {
  const t = useTranslations("collaborations");

  if (clients.length === 0) return null;

  return (
    <section aria-label={t("heading")} className="overflow-hidden bg-bg py-10 lg:py-12">
      <Reveal>
        <div className="marquee-mask">
          <div className="marquee-track flex w-max">
            <LogoGroup />
            <LogoGroup hidden />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
