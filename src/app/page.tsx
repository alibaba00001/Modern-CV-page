import Overlay from "@/components/Overlay";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import InteractiveGlobe from "@/components/InteractiveGlobe";
import AchievementsGrid from "@/components/AchievementsGrid";
import SkillsAndCertifications from "@/components/SkillsAndCertifications";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="text-white min-h-screen selection:bg-white/20">
      <NavBar />
      <section id="hero" className="relative">
        <Overlay />
      </section>
      <section id="education" className="scroll-mt-20"><Education /></section>
      <section id="experience" className="scroll-mt-20"><ExperienceTimeline /></section>
      <section id="projects" className="scroll-mt-20"><Projects /></section>
      <section id="skills" className="scroll-mt-20"><SkillsAndCertifications /></section>
      <section id="globe" className="scroll-mt-20"><InteractiveGlobe /></section>
      <section id="impact" className="scroll-mt-20"><AchievementsGrid /></section>
      <section id="contact"><Footer /></section>
    </main>
  );
}
