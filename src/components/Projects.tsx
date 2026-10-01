import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="projects section container"
      aria-labelledby="projects-title"
    >
      <Reveal>
        <div className="section-heading">
          <div>
            <div className="eyebrow section-kicker">
              01 / TRABALHOS SELECIONADOS
            </div>
            <h2 id="projects-title">
              Ideias que ganharam forma<span>.</span>
            </h2>
          </div>
          <p>
            Do primeiro conceito ao último detalhe.
            <br />
            Uma seleção do que venho construindo.
          </p>
        </div>
      </Reveal>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            className={index === 0 ? "featured-wrap" : ""}
            delay={index === 0 ? 0 : (index - 1) * 0.08}
          >
            <article
              className={`project-card glass ${index === 0 ? "featured" : ""}`}
            >
              <a
                className={`project-visual ${project.theme}`}
                href={project.demo ?? project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.demo ? "Visitar" : "Ver repositório de"} ${project.title} (nova aba)`}
              >
                {index === 0 && (
                  <span className="feature-label">
                    <span className="status-dot" /> EM DESTAQUE
                  </span>
                )}
                <div className="browser-frame">
                  <div className="browser-bar">
                    <div className="window-dots">
                      <i />
                      <i />
                      <i />
                    </div>
                    <span>
                      {project.demo
                        ? new URL(project.demo).hostname
                        : "Biblioteca IFC · Desktop"}
                    </span>
                  </div>
                  <img
                    src={project.image}
                    alt={project.alt}
                    width="1440"
                    height="1000"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="image-link">
                  <ArrowUpRight size={19} />
                </span>
              </a>
              <div className="project-body">
                <div className="project-category">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Visitar projeto <ArrowUpRight size={16} />
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github size={16} />
                    {project.demo ? "Código" : "Ver no GitHub"}
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <a
          className="all-projects"
          href="https://github.com/elianoliver?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          Mais ideias e código no GitHub <ArrowUpRight size={16} />
        </a>
      </Reveal>
    </section>
  );
}
