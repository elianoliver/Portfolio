import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { ScrollProgress } from "./components/ScrollProgress";

export default function App() {
    return (
        <div className="size-full relative">
            <ScrollProgress />
            <AnimatedBackground />
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}
