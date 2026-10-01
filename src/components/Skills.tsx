import {
  Code2,
  Database,
  GitBranch,
  Layers3,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { Reveal } from "./Reveal";

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    detail: "Interfaces que fazem sentido.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML & CSS",
      "Next.js",
      "Tailwind",
    ],
  },
  {
    title: "Backend & dados",
    icon: Database,
    detail: "Estrutura por trás da experiência.",
    skills: ["Node.js", "Express", "PostgreSQL", "APIs REST", "Python"],
  },
  {
    title: "Ferramentas",
    icon: GitBranch,
    detail: "Do desenvolvimento à entrega.",
    skills: ["Git", "GitHub", "Vite", "pnpm"],
  },
  {
    title: "Forma de trabalhar",
    icon: Layers3,
    detail: "Clareza em cada etapa.",
    skills: ["Scrum", "Kanban", "Colaboração", "Gestão de projetos"],
  },
];
export function Skills() {
  return (
    <section
      id="skills"
      className="section container about-section"
      aria-labelledby="about-title"
    >
      <Reveal className="about-copy">
        <div className="eyebrow section-kicker">02 / SOBRE & STACK</div>
        <h2 id="about-title">
          Curiosidade para criar.
          <br />
          <span className="muted-heading">Critério para construir.</span>
        </h2>
        <p>
          Sou Elian, desenvolvedor Full Stack com formação em Sistemas de
          Informação pelo IFC Camboriú.
        </p>
        <p>
          Gosto de entender o problema, simplificar o caminho e construir
          soluções que sejam tão boas de usar quanto de manter. Do visual à
          lógica, cada detalhe faz parte da experiência.
        </p>
        <div className="about-meta">
          <span>
            <MapPin size={16} /> Blumenau, Santa Catarina
          </span>
          <span>
            <GraduationCap size={17} /> Sistemas de Informação · IFC
          </span>
        </div>
      </Reveal>
      <div className="skills-grid">
        {categories.map((category, index) => (
          <Reveal key={category.title} delay={index * 0.06}>
            <div className="skill-card glass">
              <category.icon size={22} />
              <h3>{category.title}</h3>
              <p>{category.detail}</p>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
