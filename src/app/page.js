import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Agenda from "@/components/Agenda";
import Timeline from "@/components/Timeline";
import UseCases from "@/components/UseCases";
import DemoShowcase from "@/components/DemoShowcase";
import Principles from "@/components/Principles";
import Highlights from "@/components/Highlights";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Agenda />
        <Timeline />
        <UseCases />
        <DemoShowcase />
        <Principles />
        <Highlights />
        <Resources />
      </main>
      <Footer />
    </>
  );
}
