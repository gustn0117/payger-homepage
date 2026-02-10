import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Advantages from "@/components/Advantages";
import Platform from "@/components/Platform";
import BusinessModel from "@/components/BusinessModel";
import Roadmap from "@/components/Roadmap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Clients />
      <Advantages />
      <Platform />
      <BusinessModel />
      <Roadmap />
      <Contact />
      <Footer />
    </main>
  );
}
