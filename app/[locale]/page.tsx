import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { Collaborations } from "@/components/Collaborations";
import { Services } from "@/components/Services";
import { Visualisation } from "@/components/Visualisation";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <SelectedWork />
        <Visualisation />
        <Services />
        <Process />
        <About />
        <Collaborations />
      </main>
      <Footer />
    </>
  );
}
