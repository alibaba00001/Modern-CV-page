import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import InteractiveGlobe from "@/components/InteractiveGlobe";
import AchievementsGrid from "@/components/AchievementsGrid";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="bg-background text-white min-h-screen selection:bg-white/20">
      <NavBar />
      <section id="hero" className="relative">
        <ScrollyCanvas />
        <Overlay />
      </section>
      <section id="experience"><ExperienceTimeline /></section>
      <section id="projects"><Projects /></section>
      <section id="education"><Education /></section>
      <section id="globe"><InteractiveGlobe /></section>
      <section id="impact"><AchievementsGrid /></section>
      <section id="contact"><Footer /></section>
    </main>
  );
}

