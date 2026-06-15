# Portfólio Frank Novitch

![Status](https://img.shields.io/badge/status-concluido-16a34a?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=111827)
![Vite](https://img.shields.io/badge/Vite-7-646cff?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)

Portfólio profissional desenvolvido com React, Vite e Tailwind CSS para apresentar perfil, stack técnica, formação, experiência, projetos práticos e canais de contato.

O projeto funciona como uma Single Page Application focada em performance, responsividade e manutenção simples dos conteúdos.

## Visão Geral

- Página única de apresentação profissional.
- Hero com links principais.
- Seção sobre perfil e objetivos.
- Stack técnica organizada por grupos.
- Cards de projetos com links para GitHub e deploy.
- Linha do tempo de formação, cursos e experiência.
- Formulário de contato via `mailto`.
- Layout responsivo para desktop, tablet e mobile.

## Tecnologias

- React
- Vite
- Tailwind CSS
- JavaScript
- HTML5
- CSS3
- Vercel Speed Insights

## Funcionalidades

- Navegação por seções internas.
- Menu responsivo.
- Cards de projetos com imagens otimizadas.
- Conteúdo centralizado em arrays no React.
- Assets em `public/`.
- Build estático para deploy.
- Preview local do build.

## Estrutura

```bash
.
├── public
│   └── projects
├── src
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── design-system.md
├── MCP.md
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Como Rodar

### Pré-requisitos

- Node.js 20.19+
- npm

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse:

```txt
http://localhost:5173
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Conteúdo

Os principais dados da página ficam em `src/App.jsx`:

- perfil;
- links de navegação;
- stack técnica;
- projetos;
- formação;
- experiência;
- contatos.

Imagens usadas nos cards ficam em `public/projects/`.

## Deploy

Configuração recomendada:

- Build command: `npm run build`
- Publish directory: `dist`
- Node.js: `>=20.19.0`

## Documentação Complementar

- [design-system.md](./design-system.md)
- [MCP.md](./MCP.md)

## Status

Projeto concluído para portfólio, com foco em apresentação profissional, responsividade e organização de conteúdo em React.
