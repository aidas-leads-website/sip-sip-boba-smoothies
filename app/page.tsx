import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Menu } from "@/components/sections/Menu";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { Location } from "@/components/sections/Location";
import { ContactCta } from "@/components/sections/ContactCta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <Reviews />
        <Location />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
