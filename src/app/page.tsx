import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About/About";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ef]">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}