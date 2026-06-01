import { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const profile = {
  name: "Frank Novitch",
  initials: "FN",
  role: "Desenvolvedor Backend",
  location: "Goiana, PE - Brasil",
  email: "franknovitch@gmail.com",
  phone: "81 99401-2469",
  github: "https://github.com/FNovitch",
  linkedin: "https://www.linkedin.com/in/franknovitch/",
  headline: "Backend com foco em APIs",
  availability: "Projetos com Node.js, APIs REST e interfaces responsivas",
};

const navItems = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projects" },
  { label: "Formação", href: "#journey" },
  { label: "Contato", href: "#contact" },
];

const stack = [
  "Node.js",
  "Express",
  "APIs REST",
  "SQLite",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Git",
  "Consumo de APIs",
];

const stackGroups = [
  {
    title: "Backend",
    icon: "server",
    items: ["Node.js", "Express", "APIs REST", "SQLite", "HTTP nativo", "CORS"],
  },
  {
    title: "Frontend",
    icon: "code",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    title: "Boas práticas",
    icon: "spark",
    items: [
      "Arquitetura em camadas",
      "Validação de dados",
      "Tratamento de erros",
      "Cache",
      "Rate limiting",
      "Documentação",
    ],
  },
];

const strengths = [
  {
    icon: "server",
    title: "Base backend real",
    text: "Projetos com Node.js, Express, rotas REST, persistência em SQLite e separação entre rotas, models e banco.",
  },
  {
    icon: "database",
    title: "Dados e APIs",
    text: "Experiência prática criando endpoints, consumindo API externa, tratando erros e estruturando respostas JSON.",
  },
  {
    icon: "quality",
    title: "Mentalidade de qualidade",
    text: "Vivência anterior com inspeção, relatórios e melhoria contínua, aplicada hoje na organização do código.",
  },
  {
    icon: "learn",
    title: "Aprendizado constante",
    text: "Engenharia de Software, técnico em Desenvolvimento de Sistemas e prática constante em backend, APIs e organização de projetos.",
  },
];

const projects = [
  {
    title: "DoeJa",
    eyebrow: "Full stack com API e banco",
    description:
      "Plataforma para conectar doadores e beneficiários, com API em Node.js/Express, cadastro, listagem, filtros e persistência em SQLite.",
    highlights: [
      "Rotas REST para doadores e beneficiários",
      "Models separados para acesso ao banco",
      "Seed e migração inicial do SQLite",
    ],
    tags: ["Node.js", "Express", "SQLite", "JavaScript", "HTML", "CSS"],
    link: "https://doeja.onrender.com/",
    repo: "https://github.com/FNovitch/DoeJa",
    tone: "from-zinc-700 via-slate-800 to-zinc-950",
    image: "/projects/doe.png",
    imageWebp: "/projects/doe.webp",
    imageWidth: 1324,
    imageHeight: 857,
    imagePosition: "50% 24%",
    imageScale: "scale-100",
  },
  {
    title: "Tempus",
    eyebrow: "Backend Node sem framework",
    description:
      "Aplicação de clima com servidor HTTP próprio, endpoint para consulta da OpenWeather, cache em memória e rate limiting simples por IP.",
    highlights: [
      "Endpoint GET /api/weather com validação",
      "Proteção de chave por variável de ambiente",
      "Cache e controle de requisições no servidor",
    ],
    tags: [
      "Node.js",
      "HTTP",
      "TypeScript",
      "OpenWeather API",
      "Cache",
      "Rate limit",
    ],
    link: "https://tempus-fnovitchs-projects.vercel.app",
    repo: "https://github.com/FNovitch/Tempus",
    tone: "from-slate-600 via-zinc-800 to-neutral-950",
    image: "/projects/tempus.png",
    imageWebp: "/projects/tempus.webp",
    imageWidth: 1139,
    imageHeight: 800,
    imagePosition: "50% 44%",
    imageScale: "scale-100",
  },
  {
    title: "Fokus",
    eyebrow: "Interface com TypeScript",
    description:
      "Timer Pomodoro responsivo com controle de estado, alternância de sessões, áudio opcional e atualização dinâmica da interface.",
    highlights: [
      "Manipulação do DOM com TypeScript",
      "Controle de estado do temporizador",
      "Build e verificação de tipos",
    ],
    tags: ["TypeScript", "JavaScript", "HTML", "CSS", "UX"],
    link: "https://fokus-a4u1ev5sm-fnovitchs-projects.vercel.app/",
    repo: "https://github.com/FNovitch/Fokus",
    tone: "from-neutral-700 via-zinc-800 to-slate-950",
    image: "/projects/fokus.png",
    imageWebp: "/projects/fokus.webp",
    imageWidth: 1319,
    imageHeight: 806,
    imagePosition: "50% 36%",
    imageScale: "scale-100",
  },
  {
    title: "DogDev",
    eyebrow: "Landing page responsiva",
    description:
      "Landing page comercial fictícia com estrutura semântica, menu responsivo e seções pensadas para leitura rápida e conversão.",
    highlights: [
      "HTML semântico e CSS responsivo",
      "Menu mobile com TypeScript",
      "Organização de assets e build simples",
    ],
    tags: ["HTML", "CSS", "TypeScript", "Responsividade"],
    link: "https://dogdev-fnovitchs-projects.vercel.app/",
    repo: "https://github.com/FNovitch/DogDev",
    tone: "from-zinc-800 via-neutral-800 to-slate-900",
    image: "/projects/dog.png",
    imageWebp: "/projects/dog.webp",
    imageWidth: 1406,
    imageHeight: 852,
    imagePosition: "50% 34%",
    imageScale: "scale-100",
  },
];

const education = [
  {
    period: "Fev/2023 - Fev/2026",
    role: "Bacharelado em Engenharia de Software",
    place: "Ampli",
    text: "Formação voltada a fundamentos de software, desenvolvimento de sistemas, lógica, projeto de aplicações e boas práticas de engenharia.",
    tags: ["Engenharia de Software", "Backend", "Sistemas"],
  },
  {
    period: "Fev/2023 - Out/2024",
    role: "Técnico em Desenvolvimento de Sistemas",
    place: "ETE Aderico Alves de Vasconcelos",
    text: "Base técnica para desenvolvimento web, programação, estruturação de projetos e construção de aplicações.",
    tags: ["Desenvolvimento Web", "Programação", "Projetos"],
  },
  {
    period: "Fev/2018 - Dez/2019",
    role: "Técnico em Qualidade",
    place: "Escola Técnica Pernambucana",
    text: "Formação complementar que fortalece visão de processos, melhoria contínua, padronização e análise de qualidade.",
    tags: ["Qualidade", "Processos", "Melhoria contínua"],
  },
];

const courses = [
  "Lean Six Sigma - White Belt",
  "Excel avançado",
  "Inglês intermediário",
  "Espanhol intermediário",
];

const professionalExperience = [
  {
    period: "Ago/2025 - Atual",
    role: "Costureiro",
    place: "Lear Corporation | Goiana, PE",
    text: "Atuação em ambiente industrial com foco em processos, qualidade e produtividade. Costura e acabamento de peças automotivas conforme padrões técnicos, operação de máquinas industriais, conferência visual e colaboração com a equipe para manter o fluxo de produção organizado e eficiente.",
    tags: ["Processos", "Qualidade", "Produtividade"],
    current: true,
  },
  {
    period: "2021 - 2022",
    role: "Inspetor de Qualidade",
    place: "Formel D do Brasil LTDA",
    text: "Atuação com testes de produtos, acompanhamento de padrões, relatórios de ocorrências e planejamento de melhorias. Experiência transferível para QA, análise e confiabilidade de software.",
    tags: ["Qualidade", "Relatórios", "Melhoria contínua"],
  },
  {
    period: "2017 - 2019",
    role: "Assistente Administrativo",
    place: "Lear Corporation",
    text: "Rotinas administrativas, elaboração de relatórios e apoio a projetos de melhoria contínua, fortalecendo organização, comunicação e visão de processo.",
    tags: ["Processos", "Excel", "Organização"],
  },
];

const contactCards = [
  {
    label: "Email",
    value: profile.email,
    icon: "mail",
    href: `mailto:${profile.email}`,
  },
  {
    label: "Telefone",
    value: profile.phone,
    icon: "phone",
    href: `tel:+5581994012469`,
  },
  { label: "Localização", value: profile.location, icon: "pin", href: null },
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-cream selection:bg-accent selection:text-ink">
      <SpeedInsights />
      <BackgroundGlow />
      <Header />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-8 lg:px-10">
        <a
          href="#home"
          className="inline-flex items-center shrink-0"
          aria-label="Frank Novitch - início"
          onClick={closeMenu}
        >
          <LogoMark className="h-6 w-auto sm:h-8" />
        </a>

        <nav className="hidden rounded-full border border-line bg-white/[0.03] p-1 xl:flex">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm transition-colors duration-200 ease-out ${
                index === 0
                  ? "bg-white/12 text-cream"
                  : "text-muted hover:bg-white/[0.06] hover:text-cream"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-cream transition-colors duration-200 ease-out hover:border-accent/60 hover:bg-white/[0.04] hover:text-accentSoft sm:inline-flex"
        >
          Fale comigo
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-cream transition-colors duration-200 ease-out hover:border-accent/60 hover:bg-white/[0.04] xl:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="relative h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-200 ease-out ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-2 h-px w-5 bg-current transition-opacity duration-200 ease-out ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-4 h-px w-5 bg-current transition-transform duration-200 ease-out ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        className={`absolute inset-x-0 top-full origin-top border-t border-line bg-ink/95 px-4 py-4 shadow-glow backdrop-blur-md transition-[opacity,transform] duration-200 ease-out xl:hidden ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 scale-y-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-y-95 opacity-0"
        }`}
      >
        <nav className="mx-auto grid max-w-7xl gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-2xl border border-transparent px-4 py-3 text-sm font-semibold text-muted transition-colors duration-200 ease-out hover:border-line hover:bg-white/[0.04] hover:text-cream"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            onClick={closeMenu}
            className="mt-2 inline-flex items-center justify-center rounded-2xl bg-cream px-4 py-3 text-sm font-bold text-ink transition-colors duration-200 ease-out hover:bg-accentSoft sm:hidden"
          >
            Fale comigo
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative border-b border-line pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-grid bg-[length:80px_80px] opacity-70" />
      <SectionShell className="relative grid items-center gap-10 py-12 sm:gap-14 sm:py-16 lg:min-h-[760px] lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <Eyebrow>{profile.availability}</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(3.25rem,17vw,9.5rem)] font-semibold leading-[0.86] tracking-[-0.05em] sm:mt-8 sm:leading-[0.82] sm:tracking-[-0.07em]">
            Backend
            <span className="block italic text-accentSoft">Developer</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:mt-8 sm:text-lg sm:leading-8 lg:text-xl">
            Sou {profile.name}, desenvolvedor backend com projetos em Node.js,
            APIs REST, SQLite, TypeScript e interfaces web responsivas. Construo
            soluções organizadas, com foco em dados, integração e clareza de
            código.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Button href="#projects">Ver projetos</Button>
            <Button href={`mailto:${profile.email}`} variant="ghost">
              Enviar email
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
            <SocialButton label="GitHub" icon="github" href={profile.github} />
            <SocialButton
              label="LinkedIn"
              icon="linkedin"
              href={profile.linkedin}
            />
            <SocialButton
              label="Email"
              icon="mail"
              href={`mailto:${profile.email}`}
            />
            <span className="rounded-full border border-line px-4 py-3 text-sm font-semibold text-muted">
              {profile.location}
            </span>
          </div>
        </div>

        <HeroVisual />
      </SectionShell>

      <div className="relative border-t border-line py-8">
        <p className="mb-6 px-4 text-center text-[0.62rem] font-bold uppercase tracking-[0.32em] text-muted sm:text-[0.68rem] sm:tracking-[0.4em]">
          Stack comprovada em projetos
        </p>
        <div className="marquee text-sm font-semibold text-muted/45">
          <div className="marquee-track">
            {[...stack, ...stack].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="group relative mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:mr-0 lg:max-w-[440px]">
      <div className="absolute -inset-8 rounded-full bg-accent/10 blur-2xl sm:-inset-10 sm:blur-3xl" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-accent/20 bg-panel shadow-glow">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(148,163,184,0.46),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(244,244,245,0.18),transparent_24%),linear-gradient(145deg,#18181b,#09090b_64%)]" />
        <img
          src="/hero-laptop.avif"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.18] grayscale mix-blend-luminosity transition-[opacity,transform] duration-500 ease-out will-change-transform group-hover:scale-[1.02] group-hover:opacity-[0.24]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_24%,rgba(148,163,184,0.12),transparent_34%),linear-gradient(180deg,rgba(9,9,11,0.46),rgba(9,9,11,0.62)_44%,rgba(9,9,11,0.94)),linear-gradient(90deg,rgba(9,9,11,0.42),rgba(9,9,11,0.84)_72%)]" />
        <div className="absolute inset-5 rounded-[1.25rem] border border-white/10 bg-black/24 sm:inset-8 sm:rounded-[1.5rem] sm:backdrop-blur-[1px]" />
        <div className="absolute left-6 right-6 top-8 space-y-3 font-mono text-xs text-cream/55 sm:left-8 sm:right-8 sm:top-10 sm:space-y-4">
          <CodeLine width="w-2/3" />
          <CodeLine width="w-5/6" />
          <CodeLine width="w-1/2" accent />
        </div>
        <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-ink/85 p-4 shadow-glow backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8 sm:p-5">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.35em] text-accentSoft">
            API first mindset
          </p>
          <p className="mt-3 text-xl font-semibold leading-tight sm:text-2xl">
            Rotas claras. Dados organizados. Aprendizado constante.
          </p>
        </div>
      </div>
      <div className="absolute -bottom-5 right-2 rounded-2xl border border-line bg-panel px-4 py-3 text-xs font-bold text-accentSoft shadow-glow sm:right-5 sm:px-5 sm:py-4 sm:text-sm">
        APIs, dados e produto
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-line">
      <SectionShell className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.95fr_1fr] lg:gap-14 lg:py-32">
        <div>
          <Eyebrow>Sobre mim</Eyebrow>
          <SectionTitle>
            Backend com prática
            <span> em projetos reais</span>
          </SectionTitle>
          <div className="mt-6 max-w-2xl space-y-5 text-base leading-7 text-muted sm:mt-8 sm:space-y-6 sm:leading-8 lg:text-lg">
            <p>
              Desenvolvo aplicações web com foco em backend, APIs REST,
              integração de dados e persistência. Minha base combina Engenharia
              de Software, formação técnica em Desenvolvimento de Sistemas e
              projetos práticos publicados.
            </p>
            <p>
              Tenho familiaridade com Node.js, Express, SQLite, consumo de APIs,
              organização por camadas, tratamento de erros e interfaces
              responsivas. Trago também experiência profissional anterior com
              qualidade, processos e documentação.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {strengths.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </SectionShell>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="border-b border-line">
      <SectionShell className="py-16 sm:py-20 lg:py-32">
        <Eyebrow>Stack técnica</Eyebrow>
        <SectionTitle>
          Tecnologias que usei
          <span> na prática</span>
        </SectionTitle>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {stackGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-[1.5rem] border border-line bg-panel/75 p-5 sm:p-7"
            >
              <Icon name={group.icon} className="h-5 w-5 text-accentSoft" />
              <h3 className="mt-6 text-xl font-bold">{group.title}</h3>
              <TagList items={group.items} className="mt-6" />
            </article>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-b border-line">
      <SectionShell className="py-16 sm:py-20 lg:py-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Projetos de portfólio</Eyebrow>
            <SectionTitle>
              Evidências
              <span> técnicas</span>
            </SectionTitle>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group text-sm font-semibold text-muted transition-colors duration-200 ease-out hover:text-cream"
          >
            Ver GitHub
            <ArrowIcon className="inline-block h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:mt-14 lg:mt-16 lg:grid-cols-2 lg:gap-7">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </SectionShell>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="border-b border-line">
      <SectionShell className="py-16 sm:py-20 lg:py-32">
        <Eyebrow>Formação e experiência</Eyebrow>
        <SectionTitle>
          Base técnica
          <span> e profissional</span>
        </SectionTitle>

        <div className="mt-10 grid gap-10 lg:mt-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h3 className="mb-6 text-xl font-bold">Formação e cursos</h3>
            <div className="relative space-y-6 pl-8 before:absolute before:bottom-0 before:left-2 before:top-0 before:w-px before:bg-line">
              {education.map((item) => (
                <TimelineItem key={`${item.period}-${item.role}`} {...item} />
              ))}
            </div>
            <article className="mt-6 rounded-[1.5rem] border border-line bg-panel/75 p-5 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-accentSoft">
                Cursos e idiomas
              </p>
              <TagList items={courses} className="mt-5" />
            </article>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold">Experiência profissional</h3>
            <div className="relative space-y-6 pl-8 before:absolute before:bottom-0 before:left-2 before:top-0 before:w-px before:bg-line">
              {professionalExperience.map((item) => (
                <TimelineItem key={`${item.period}-${item.role}`} {...item} />
              ))}
            </div>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}

function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const updateContactForm = (field) => (event) => {
    setContactForm((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const emailBody = [
    contactForm.name ? `Nome: ${contactForm.name}` : null,
    contactForm.email ? `Email: ${contactForm.email}` : null,
    contactForm.message ? `Mensagem: ${contactForm.message}` : null,
  ]
    .filter(Boolean)
    .join("\n\n");

  const contactHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Contato pelo portfólio",
  )}&body=${encodeURIComponent(emailBody || "Olá, Frank. Vamos conversar?")}`;

  return (
    <section id="contact" className="border-b border-line">
      <SectionShell className="py-16 sm:py-20 lg:py-32">
        <div className="text-center">
          <Eyebrow>Contato</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-5xl font-display text-[clamp(2.65rem,12vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.05em] sm:leading-[0.9] sm:tracking-[-0.06em]">
            Vamos conversar
            <span className="italic text-accentSoft"> sobre tecnologia</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Se o seu time precisa de alguém com base sólida em backend,
            organização de código e disposição para construir soluções úteis,
            posso contribuir com projetos em Node.js, APIs e interfaces web.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 lg:mt-16 lg:grid-cols-[1fr_0.95fr] lg:gap-8">
          <form
            className="rounded-[1.75rem] border border-line bg-panel/75 p-5 sm:p-8"
            onSubmit={(event) => event.preventDefault()}
          >
            <FormField
              label="Nome"
              placeholder="Seu nome"
              value={contactForm.name}
              onChange={updateContactForm("name")}
            />
            <FormField
              label="Email"
              placeholder="seu@email.com"
              type="email"
              value={contactForm.email}
              onChange={updateContactForm("email")}
            />
            <FormField
              label="Mensagem"
              placeholder="Conte sobre o projeto ou desafio..."
              value={contactForm.message}
              onChange={updateContactForm("message")}
              textarea
            />
            <Button className="mt-4 w-full justify-center" href={contactHref}>
              Enviar email
            </Button>
          </form>

          <div className="space-y-5">
            {contactCards.map((card) => (
              <ContactCard key={card.label} {...card} />
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 sm:py-12">
      <SectionShell className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <LogoMark className="h-8 w-auto" />
          <p className="mt-2 text-sm text-muted">
            © 2026 {profile.name}. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <SocialButton label="GitHub" icon="github" href={profile.github} />
          <SocialButton
            label="LinkedIn"
            icon="linkedin"
            href={profile.linkedin}
          />
          <SocialButton
            label="Email"
            icon="mail"
            href={`mailto:${profile.email}`}
          />
        </div>
      </SectionShell>
    </footer>
  );
}

function SectionShell({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
}

function LogoMark({ className = "" }) {
  return (
    <img
      src="/logo-fn.png"
      alt="Frank Novitch"
      className={`block object-contain ${className}`}
      width="392"
      height="194"
      decoding="async"
    />
  );
}

function Eyebrow({ children }) {
  return (
    <p className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-muted sm:text-[0.68rem] sm:tracking-[0.42em]">
      {children}
    </p>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.6rem,12vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.05em] sm:leading-[0.9] sm:tracking-[-0.06em]">
      {children}
    </h2>
  );
}

function Button({ href, children, variant = "solid", className = "" }) {
  const styles =
    variant === "ghost"
      ? "border border-line bg-transparent text-cream hover:border-cream/30 hover:bg-white/[0.04]"
      : "bg-cream text-ink hover:bg-accentSoft";

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-colors duration-200 ease-out sm:px-7 sm:py-4 ${styles} ${className}`}
    >
      {children}
      <ArrowIcon className="h-4 w-4" />
    </a>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <article className="group rounded-[1.5rem] border border-line bg-panel/75 p-5 transition-[border-color,background-color,transform] duration-200 ease-out will-change-transform hover:-translate-y-0.5 hover:border-accent/35 hover:bg-panelSoft sm:p-7">
      <Icon name={icon} className="h-5 w-5 text-accentSoft" />
      <h3 className="mt-7 text-lg font-bold">{title}</h3>
      <p className="mt-3 leading-7 text-muted">{text}</p>
    </article>
  );
}

function ProjectCard({
  title,
  eyebrow,
  description,
  highlights,
  tags,
  tone,
  image,
  imageWebp,
  imageWidth,
  imageHeight,
  imagePosition,
  imageScale,
  link,
  repo,
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-panel/75 transition-[border-color,background-color,transform] duration-200 ease-out will-change-transform hover:-translate-y-0.5 hover:border-accent/35 hover:bg-panelSoft/70">
      <div
        className={`relative h-56 overflow-hidden bg-gradient-to-br sm:h-64 lg:h-72 ${tone}`}
      >
        <picture>
          <source srcSet={imageWebp} type="image/webp" />
          <img
            src={image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            width={imageWidth}
            height={imageHeight}
            className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.04] ${imageScale}`}
            style={{ objectPosition: imagePosition }}
          />
        </picture>
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,11,0.16),rgba(9,9,11,0.48)_42%,rgba(9,9,11,0.88)),linear-gradient(90deg,rgba(9,9,11,0.58),rgba(9,9,11,0.16)_55%,rgba(9,9,11,0.44))]" />
        <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-black/55 p-4 shadow-glow backdrop-blur-sm sm:inset-x-6 sm:bottom-6 sm:rounded-3xl sm:p-5 sm:backdrop-blur-md lg:inset-x-8">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/65 sm:text-xs sm:tracking-[0.28em]">
            {eyebrow}
          </p>
          <h3 className="mt-2 text-xl font-bold text-white drop-shadow-sm sm:mt-3 sm:text-2xl">
            {title}
          </h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-accentSoft">
            Resumo técnico
          </p>
        </div>
        <p className="mt-5 leading-8 text-muted">{description}</p>
        <ul className="mt-5 space-y-2 text-sm leading-6 text-muted">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <TagList items={tags} className="mt-6" />
        <div className="mt-auto grid gap-3 pt-7 sm:grid-cols-2">
          <ProjectActionLink href={repo} label="GitHub" icon="github" />
          <ProjectActionLink href={link} label="Ver projeto" />
        </div>
      </div>
    </article>
  );
}

function ProjectActionLink({ href, label, icon }) {
  const content = (
    <>
      {icon ? <Icon name={icon} className="h-4 w-4" /> : null}
      <span>{label}</span>
      {!icon ? <ArrowIcon className="h-4 w-4" /> : null}
    </>
  );

  const className =
    "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm font-bold transition-colors duration-200 ease-out";

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${className} border-line text-cream hover:border-accent/60 hover:bg-white/[0.04] hover:text-accentSoft`}
    >
      {content}
    </a>
  ) : (
    <span
      className={`${className} cursor-not-allowed border-line/60 text-muted/45`}
      aria-disabled="true"
    >
      {content}
    </span>
  );
}

function TimelineItem({ period, role, place, text, tags, current = false }) {
  return (
    <article className="relative rounded-[1.5rem] border border-line bg-panel/75 p-5 sm:p-8">
      <span
        className="absolute -left-[2rem] top-8 grid h-3 w-3 place-items-center"
        aria-hidden="true"
      >
        {current ? (
          <span className="absolute -inset-2 rounded-full bg-[#86efac]/25 blur-[1px] motion-safe:animate-pulse" />
        ) : null}
        <span
          className={`relative h-3 w-3 rounded-full ring-4 ${
            current
              ? "bg-[#86efac] ring-[#86efac]/25 shadow-[0_0_18px_rgba(134,239,172,0.28)]"
              : "bg-accent ring-accent/20"
          }`}
        />
      </span>
      <p className="text-xs font-black uppercase tracking-[0.28em] text-accentSoft">
        {period}
      </p>
      <h3 className="mt-4 text-xl font-bold">{role}</h3>
      <p className="mt-1 text-muted">{place}</p>
      <p className="mt-5 leading-8 text-muted">{text}</p>
      <TagList items={tags} className="mt-6" />
    </article>
  );
}

function TagList({ items, className = "" }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-white/5 bg-white/[0.07] px-3 py-2 text-xs font-semibold text-muted sm:px-4"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function FormField({
  label,
  placeholder,
  type = "text",
  textarea = false,
  value,
  onChange,
}) {
  const fieldClass =
    "mt-3 w-full rounded-xl border border-line bg-ink/40 px-4 py-4 text-cream outline-none transition-colors duration-200 ease-out placeholder:text-muted/35 focus:border-accent/70 focus:bg-panel";

  return (
    <label className="mb-6 block">
      <span className="text-xs font-bold uppercase tracking-[0.28em] text-muted">
        {label}
      </span>
      {textarea ? (
        <textarea
          className={`${fieldClass} min-h-36 resize-none`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className={fieldClass}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </label>
  );
}

function ContactCard({ label, value, icon, href }) {
  const content = (
    <>
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/[0.06]">
        <Icon name={icon} className="h-5 w-5 text-accentSoft" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-muted">
          {label}
        </p>
        <p className="mt-2 font-semibold">{value}</p>
      </div>
    </>
  );

  const className =
    "flex items-center gap-4 rounded-[1.5rem] border border-line bg-panel/75 p-5 transition-colors duration-200 ease-out hover:border-accent/35 hover:bg-panelSoft sm:gap-5 sm:p-6";

  return href ? (
    <a href={href} className={className}>
      {content}
    </a>
  ) : (
    <article className={className}>{content}</article>
  );
}

function SocialButton({ label, icon, href }) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors duration-200 ease-out hover:border-accent/60 hover:bg-white/[0.04] hover:text-accentSoft"
    >
      <Icon name={icon} className="h-4 w-4" />
    </a>
  );
}

function CodeLine({ width, accent = false }) {
  return (
    <div
      className={`h-2 rounded-full ${width} ${accent ? "bg-accent/80" : "bg-white/20"}`}
    />
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-slate-700/10 blur-3xl" />
    </div>
  );
}

function Icon({ name, className = "" }) {
  const icons = {
    code: "M8 9 4 12l4 3M16 9l4 3-4 3M14 5l-4 14",
    spark: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z",
    learn: "M12 5 3 9l9 4 9-4-9-4ZM5 11v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5",
    quality: "M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4Z",
    server: "M4 5h16v6H4V5Zm0 8h16v6H4v-6Zm4-5h.01M8 16h.01",
    database:
      "M12 4c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3Zm8 3v5c0 1.7-3.6 3-8 3s-8-1.3-8-3V7m16 5v5c0 1.7-3.6 3-8 3s-8-1.3-8-3v-5",
    mail: "M4 6h16v12H4V6Zm0 0 8 7 8-7",
    phone:
      "M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z",
    pin: "M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    github:
      "M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.3-2.3-.3-4.7-1.1-4.7-5A3.9 3.9 0 0 1 6.6 9c-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1.1a9.7 9.7 0 0 1 5 0c1.9-1.4 2.8-1.1 2.8-1.1.6 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1.1 2.7c0 3.9-2.4 4.7-4.7 5 .4.3.7.9.7 1.8V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z",
    linkedin:
      "M6.5 9.8V20h-4V9.8h4ZM4.5 8.1a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM21.5 14.2V20h-4v-5.4c0-1.4-.5-2.3-1.8-2.3-1 0-1.6.7-1.9 1.3-.1.2-.1.6-.1.9V20h-4s.1-9.2 0-10.2h4v1.4c.5-.8 1.5-1.9 3.7-1.9 2.7 0 4.1 1.8 4.1 4.9Z",
  };

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d={icons[name]} />
    </svg>
  );
}

export default App;
