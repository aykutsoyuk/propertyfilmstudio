import en from "@/content/translations/en.json";
import pt from "@/content/translations/pt.json";
import { EMAIL, INSTAGRAM_URL, LAST_UPDATED, SITE_NAME, SITE_URL, YOUTUBE_URL } from "@/content/site";

export const dynamic = "force-static";

type Messages = typeof en;

function services(m: Messages) {
  return m.services.items.map((s) => `- **${s.title}**: ${s.body}`).join("\n");
}

// Plain-text summary for LLM crawlers (https://llmstxt.org).
export function GET() {
  const social = [INSTAGRAM_URL, YOUTUBE_URL].filter((u) => u.startsWith("http"));
  const body = `# ${SITE_NAME}

> ${en.meta.description}

${SITE_NAME} is a boutique real estate film studio based in Braga, Portugal, serving Braga, Guimarães and Porto. It is run by Aykut Soyuk, a videographer and content creator with 4+ years of experience.

## Services

${services(en)}

## Serviços (PT-PT)

${services(pt)}

## What makes it different

${en.visualisation.heading} ${en.visualisation.body}

## Pages

- [Portuguese (default)](${SITE_URL}/): ${pt.meta.title}
- [English](${SITE_URL}/en): ${en.meta.title}

## Contact

- Email: ${EMAIL}
${social.map((u) => `- ${u}`).join("\n")}

Last updated: ${LAST_UPDATED}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
