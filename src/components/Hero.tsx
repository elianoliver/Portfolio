import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Code2,
  Layers3,
  Command,
} from "lucide-react";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-copy">
        <Reveal>
          <div className="eyebrow">
            <span className="status-dot" /> DESENVOLVEDOR FULL STACK
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1>
            Boas ideias.
            <br />
            Código preciso.
            <br />
            <span className="gradient-text">Experiências reais.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="hero-intro">
            Sou <strong>Elian Oliveira.</strong> Conecto design e
            desenvolvimento para transformar ideias em experiências digitais
            simples, bonitas e funcionais.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explorar projetos <ArrowDown size={17} />
            </a>
            <a className="button button-secondary" href="#contact">
              Vamos conversar <ArrowUpRight size={17} />
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.32}>
          <div className="hero-social">
            <a
              href="https://github.com/elianoliver"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub de Elian Oliveira"
            >
              <Github size={19} />
            </a>
            <a
              href="https://www.linkedin.com/in/elian-oliveira/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn de Elian Oliveira"
            >
              <Linkedin size={19} />
            </a>
            <span className="social-divider" />
            <span>Blumenau, SC · Brasil</span>
          </div>
        </Reveal>
      </div>
      <Reveal className="hero-art" delay={0.22}>
        <div className="orbital-scene" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="glass-sheet sheet-back" />
          <div className="glass-sheet sheet-middle" />
          <div className="code-window glass">
            <div className="window-toolbar">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>ideas.tsx</span>
              <Code2 size={14} />
            </div>
            <div className="code-content">
              <span className="code-comment">// Da ideia à experiência.</span>
              <p>
                <span className="code-purple">const</span> developer = {"{"}
              </p>
              <div className="code-indent">
                <p>
                  name: <span className="code-green">'Elian Oliveira'</span>,
                </p>
                <p>
                  focus: <span className="code-green">'Full Stack'</span>,
                </p>
                <p>
                  craft: [<span className="code-blue">'design'</span>,{" "}
                  <span className="code-blue">'code'</span>],
                </p>
                <p>
                  details: <span className="code-purple">true</span>
                </p>
              </div>
              <p>{"}"};</p>
              <p className="code-last">
                build<span className="code-blue">(</span>ideas
                <span className="code-blue">)</span>
                <span className="cursor">▎</span>
              </p>
            </div>
            <div className="window-status">
              <span>
                <span className="status-dot" /> Feito para funcionar.
              </span>
              <span>UTF-8</span>
            </div>
          </div>
          <div className="floating-tag tag-react glass">
            <Layers3 size={20} />
            <div>
              Interfaces com intenção<span>React + TypeScript</span>
            </div>
          </div>
          <div className="floating-tag tag-craft glass">
            <Command size={18} />
            <span>Cuidado em cada detalhe</span>
            <span className="tiny-spark">✦</span>
          </div>
        </div>
      </Reveal>
      <div className="hero-bottom">
        <span>DESIGN COM PROPÓSITO. CÓDIGO COM CUIDADO.</span>
        <a href="#projects">
          Conheça meu trabalho <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
