import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("elian.dev@proton.me");
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopyState("idle"), 3500);
  }
  return (
    <section
      id="contact"
      className="section container contact-section"
      aria-labelledby="contact-title"
    >
      <Reveal>
        <div className="contact-card glass">
          <div className="eyebrow section-kicker">03 / VAMOS CONVERSAR</div>
          <h2 id="contact-title">
            Seu próximo projeto
            <br />
            começa com um <span className="gradient-text">olá.</span>
          </h2>
          <p>
            Tem uma ideia, um desafio ou uma oportunidade?
            <br />
            Vamos construir algo que faça a diferença.
          </p>
          <div className="contact-actions">
            <a
              className="button button-primary"
              href="mailto:elian.dev@proton.me"
            >
              <Mail size={17} /> Enviar um e-mail <ArrowUpRight size={17} />
            </a>
            <a
              className="button button-secondary"
              href="https://wa.me/5547999217767"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} /> WhatsApp <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="email-copy">
            <span>elian.dev@proton.me</span>
            <button onClick={copyEmail} aria-label="Copiar endereço de e-mail">
              {copyState === "copied" ? (
                <Check size={15} />
              ) : (
                <Copy size={15} />
              )}
            </button>
          </div>
          <span className="copy-feedback" role="status">
            {copyState === "copied"
              ? "E-mail copiado!"
              : copyState === "error"
                ? "Não foi possível copiar. Selecione o endereço acima."
                : ""}
          </span>
          <div className="contact-social">
            <a
              href="https://github.com/elianoliver"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> GitHub <ArrowUpRight size={13} />
            </a>
            <a
              href="https://www.linkedin.com/in/elian-oliveira/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
