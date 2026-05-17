import { Footer } from "@/components/chrome/Footer";
import { About } from "@/components/landing/About";
import { ApproachPillars } from "@/components/landing/ApproachPillars";
import { Contact } from "@/components/landing/Contact";
import { FeaturedWork } from "@/components/landing/FeaturedWork";
import { Hero } from "@/components/landing/Hero";
import { Pull } from "@/components/landing/Pull";
import { Quotes } from "@/components/landing/Quotes";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ApproachPillars />
      <FeaturedWork />
      <Pull />
      <Quotes />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
