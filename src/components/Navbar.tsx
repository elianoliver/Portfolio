import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const items = [
  { name: "Início", id: "home" },
  { name: "Projetos", id: "projects" },
  { name: "Sobre & stack", id: "skills" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    ["home", "projects", "skills", "contact"].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 700) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);
  return (
    <header className="nav-shell">
      <nav className="navigation glass" aria-label="Navegação principal">
        <a href="#home" className="wordmark" onClick={() => setOpen(false)}>
          elian<span>.dev</span>
          <span className="brand-dot" />
        </a>
        <div className="desktop-nav">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "active" : ""}
              aria-current={active === item.id ? "location" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
        <a className="nav-contact" href="#contact">
          Vamos conversar <ArrowUpRight size={15} />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <div id="mobile-nav" className="mobile-nav" hidden={!open}>
          {[...items, { name: "Contato", id: "contact" }].map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
              onClick={() => setOpen(false)}
            >
              {item.name}
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
