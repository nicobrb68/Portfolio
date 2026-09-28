import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Timeline from "@/components/site/Timeline";
import Projects42 from "@/components/site/Projects42";
import Stack from "@/components/site/Stack";
import Methodology from "@/components/site/Methodology";
import Contact from "@/components/site/Contact";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-paper text-ink">
      <Navbar />
      <Hero />
      <Timeline />
      <Projects42 />
      <Stack />
      <Methodology />
      <Contact />
    </main>
  );
}