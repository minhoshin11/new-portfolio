import AboutSection from "./_components/AboutSection/AboutSection";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection/HeroSection";
import Navbar from "./_components/Navbar";
import ProjectSection from "./_components/ProjectSection/ProjectSection";

export default function Home() {
  return (
    <div className="relative">
      {/* 네브바 */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}
