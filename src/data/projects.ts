export const projects = [
  {
    title: "Do Tabuleiro ao Mercado",
    category: "LANDING PAGE · PRODUTO DIGITAL",
    description:
      "Estratégia que sai do jogo e ganha a web. Uma experiência para apresentar um e-book de empreendedorismo, com prévia interativa, conteúdo organizado e navegação fluida.",
    image: "/projects/tabuleiro.webp",
    alt: "Página do e-book Do Tabuleiro ao Mercado, com fundo azul e apresentação do livro",
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    github: "https://github.com/elianoliver/do_tabuleiro_ao_mercado",
    demo: "https://do-tabuleiro-ao-mercado.vercel.app",
    theme: "tabuleiro",
  },
  {
    title: "Biblioteca IFC",
    category: "APLICAÇÃO DESKTOP · AUTOMAÇÃO",
    description:
      "Menos trabalho manual, mais eficiência. Gestão de multas, unificação de relatórios e notificações por e-mail para a biblioteca do IFC Camboriú.",
    image: "/projects/biblioteca.svg",
    alt: "Ilustração do fluxo da biblioteca IFC: relatórios Excel, gestão unificada e notificações",
    technologies: ["Python", "PyQt6", "Pandas"],
    github:
      "https://github.com/elianoliver/Sistema-de-Cobranca-da-Biblioteca-IFC",
    demo: null,
    theme: "biblioteca",
  },
  {
    title: "Cezar Funilaria & Pintura",
    category: "WEBSITE · SERVIÇOS AUTOMOTIVOS",
    description:
      "Uma presença digital à altura do serviço. Identidade escura, fotografia automotiva e caminhos diretos para solicitar um orçamento.",
    image: "/projects/cezar.webp",
    alt: "Site da Cezar Funilaria e Pintura com fotografia de automóvel e interface escura",
    technologies: ["React", "TypeScript", "Vite"],
    github: "https://github.com/elianoliver/Cezar_Funilaria_e_Pintura",
    demo: "https://cezar-funilaria-e-pintura.vercel.app/",
    theme: "cezar",
  },
  {
    title: "MEG Soluções Elétricas",
    category: "WEBSITE · SERVIÇOS ELÉTRICOS",
    description:
      "Serviços, projetos e contato em uma experiência contínua. Galeria de trabalhos e solicitação de orçamento integrada ao EmailJS.",
    image: "/projects/meg.webp",
    alt: "Página da MEG Soluções Elétricas com apresentação do profissional e chamada para orçamento",
    technologies: ["React", "TypeScript", "EmailJS"],
    github: "https://github.com/elianoliver/Meg-Solucoes-Eletricas",
    demo: "https://megsolucoeseletricas.com.br/",
    theme: "meg",
  },
] as const;
