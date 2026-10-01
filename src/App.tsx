import { MotionConfig } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { ScrollProgress } from "./components/ScrollProgress";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Pular para o conteúdo
      </a>
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="container footer">
        <a className="wordmark" href="#home">
          elian<span>.dev</span>
        </a>
        <p>© {new Date().getFullYear()} Elian Oliveira</p>
        <a href="#home">De volta ao início ↑</a>
      </footer>
    </MotionConfig>
  );
}
