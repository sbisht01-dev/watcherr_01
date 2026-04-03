import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/Hero";
import WorkGrid from "@/components/workgrid";
import Services from "@/components/services";
import About from "@/components/about";
import Footer from "@/components/navigation/Footer";
export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <WorkGrid />
      <Services />
      <About />
      <Footer />
    </main>
  );
}