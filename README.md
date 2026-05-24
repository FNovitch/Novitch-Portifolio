<p align="center">
  <img
    loading="lazy"
    src="https://img.shields.io/static/v1?label=STATUS&message=CONCLU%C3%8DDO&color=GREEN&style=for-the-badge"
    alt="Status do projeto: concluído"
  />
</p>

<h1 align="center">Portfólio Frank Novitch</h1>

<p align="center">
  Portfólio profissional desenvolvido com React, Vite e Tailwind CSS para
  apresentar perfil, stack técnica, formação, experiência, projetos práticos e
  canais de contato.
</p>

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Como rodar localmente](#como-rodar-localmente)
- [Scripts disponíveis](#scripts-disponíveis)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Arquitetura](#arquitetura)
- [Como alterar conteúdos](#como-alterar-conteúdos)
- [Padrões de desenvolvimento](#padrões-de-desenvolvimento)
- [Checklist para alterações](#checklist-para-alterações)
- [Deploy](#deploy)
- [MCP](#mcp)
- [Documentos complementares](#documentos-complementares)

## Sobre o projeto

Este projeto é uma landing page de portfólio para apresentar Frank Novitch como
desenvolvedor backend em formação. A página reúne informações profissionais,
tecnologias estudadas, projetos publicados, formação, experiência profissional e
formas de contato.

O foco do projeto é ser simples de manter, rápido para carregar e claro para
recrutadores, visitantes e outros desenvolvedores. Por isso, a aplicação foi
construída como uma Single Page Application com Vite, React e Tailwind CSS.

## Funcionalidades

- Hero section com apresentação profissional e links principais.
- Navegação por seções internas da página.
- Menu responsivo para telas menores.
- Seção sobre perfil, objetivos e pontos fortes.
- Stack técnica organizada por grupos.
- Cards de projetos com imagem, resumo técnico, tags, link do GitHub e deploy.
- Linha do tempo com formação, cursos e experiência profissional.
- Formulário de contato que monta um e-mail usando `mailto`.
- Layout responsivo para desktop, tablet e mobile.
- Assets otimizados em `public/`, incluindo imagens `.webp`.

## Tecnologias

| Tecnologia | Uso no projeto |
| --- | --- |
| React | Criação da interface e componentes |
| Vite | Servidor de desenvolvimento e build |
| Tailwind CSS | Estilização utilitária e responsividade |
| JavaScript | Lógica da aplicação |
| HTML5 | Estrutura base em `index.html` |
| CSS3 | Estilos globais e animações complementares |

## Como rodar localmente

### Pré-requisitos

Antes de começar, instale:

- Node.js `>=20.19.0`
- npm, instalado junto com o Node.js
- Git, se quiser versionar ou clonar o projeto

Para conferir as versões:

```bash
node -v
npm -v
```

### Instalação

1. Acesse a pasta do projeto:

```bash
cd Portifolio
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra no navegador:

```text
http://localhost:5173
```

## Scripts disponíveis

| Script | Para que serve |
| --- | --- |
| `npm run dev` | Inicia o servidor local do Vite |
| `npm run build` | Gera a versão final em `dist/` |
| `npm run preview` | Abre uma prévia local do build gerado |

Fluxo recomendado antes de publicar:

```bash
npm install
npm run build
npm run preview
```

## Estrutura de pastas

```text
Portifolio/
|- public/
|  |- projects/
|  |  |- doe.png
|  |  |- doe.webp
|  |  |- tempus.png
|  |  |- tempus.webp
|  |  |- fokus.png
|  |  |- fokus.webp
|  |  |- dog.png
|  |  |- dog.webp
|  |- apple-touch-icon.png
|  |- favicon.ico
|  |- favicon.png
|  |- hero-laptop.avif
|  |- logo-fn.png
|- src/
|  |- App.jsx
|  |- index.css
|  |- main.jsx
|- design-system.md
|- MCP.md
|- index.html
|- package.json
|- postcss.config.js
|- tailwind.config.js
|- vite.config.js
|- README.md
```

### Pastas principais

- `public/`: imagens, favicons, logo e screenshots dos projetos.
- `public/projects/`: imagens usadas nos cards de projetos.
- `src/`: código React e estilos globais.
- `dist/`: pasta criada pelo build. Não deve ser editada manualmente.
- `node_modules/`: dependências instaladas. Não deve ser editada manualmente.

## Arquitetura

O projeto tem uma arquitetura simples e direta. A maior parte do conteúdo e dos
componentes está em `src/App.jsx`.

### Entrada da aplicação

`src/main.jsx` inicializa o React e renderiza o componente principal:

```jsx
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

### Componente principal

`src/App.jsx` organiza:

- dados do perfil;
- itens de navegação;
- stack técnica;
- projetos;
- formação;
- experiências;
- cards de contato;
- componentes reutilizáveis.

O componente `App` monta a página nesta ordem:

```text
BackgroundGlow
Header
Hero
About
Stack
Projects
Journey
Contact
Footer
```

### Estilos

- `tailwind.config.js` define cores, fontes, sombras e background customizado.
- `src/index.css` importa fontes, ativa Tailwind e guarda estilos globais.
- As classes Tailwind ficam diretamente nos componentes React.

### Assets

Imagens usadas pela aplicação ficam em `public/`. No Vite, tudo dentro de
`public/` pode ser referenciado a partir da raiz da URL:

```jsx
<img src="/logo-fn.png" alt="Frank Novitch" />
```

## Como alterar conteúdos

Esta seção é a mais importante para quem está começando.

### Alterar dados pessoais

Edite o objeto `profile` em `src/App.jsx`:

```jsx
const profile = {
  name: "Frank Novitch",
  role: "Desenvolvedor Backend",
  email: "franknovitch@gmail.com",
  github: "https://github.com/FNovitch",
};
```

Use esse objeto sempre que a informação aparecer em mais de um lugar. Isso evita
duplicação e reduz a chance de erro.

### Alterar menu

Edite o array `navItems` em `src/App.jsx`:

```jsx
const navItems = [
  { label: "Início", href: "#home" },
  { label: "Projetos", href: "#projects" },
];
```

O `href` precisa apontar para o `id` de alguma seção da página.

### Adicionar um projeto

Adicione um novo objeto no array `projects` em `src/App.jsx`:

```jsx
{
  title: "Nome do projeto",
  eyebrow: "Resumo curto",
  description: "Descrição objetiva do projeto.",
  highlights: ["Ponto técnico 1", "Ponto técnico 2"],
  tags: ["Node.js", "React"],
  link: "https://link-do-deploy.com",
  repo: "https://github.com/usuario/repositorio",
  tone: "from-zinc-700 via-slate-800 to-zinc-950",
  image: "/projects/projeto.png",
  imageWebp: "/projects/projeto.webp",
  imageWidth: 1200,
  imageHeight: 800,
  imagePosition: "50% 35%",
  imageScale: "scale-100",
}
```

Depois coloque as imagens em `public/projects/`.

Boas práticas para imagens:

- use `.webp` para melhor performance;
- mantenha `.png` como fallback;
- use nomes simples, sem espaços;
- preencha `imageWidth` e `imageHeight` com as dimensões reais;
- ajuste `imagePosition` se o print ficar cortado.

### Alterar stack técnica

Existem dois pontos:

- `stack`: lista usada na faixa animada do hero;
- `stackGroups`: cards da seção de stack.

Se adicionar uma tecnologia importante, avalie atualizar os dois.

### Alterar formação ou experiência

Edite:

- `education`, para formação;
- `courses`, para cursos e idiomas;
- `professionalExperience`, para experiências profissionais.

Cada item da linha do tempo usa:

```jsx
{
  period: "2026",
  role: "Cargo ou curso",
  place: "Empresa ou instituição",
  text: "Descrição curta.",
  tags: ["Tag 1", "Tag 2"],
}
```

### Alterar formulário de contato

O formulário não envia dados para servidor. Ele monta um link `mailto` com os
campos preenchidos.

Se precisar de envio real no futuro, será necessário adicionar um backend, um
serviço externo de formulário ou uma função serverless.

## Padrões de desenvolvimento

### Nomeação

- Componentes React usam `PascalCase`: `ProjectCard`, `SectionShell`.
- Variáveis e arrays usam `camelCase`: `navItems`, `contactCards`.
- Arquivos de imagem usam letras minúsculas e hífen quando necessário.

### Componentização

Crie um componente novo quando:

- o mesmo bloco visual se repete;
- o JSX fica difícil de ler;
- a seção tem responsabilidade clara.

Evite criar componente quando:

- o trecho será usado apenas uma vez;
- a abstração deixa o código mais difícil para um júnior entender.

### Estilização

- Prefira classes Tailwind nos componentes.
- Use tokens definidos em `tailwind.config.js` em vez de cores soltas.
- Consulte `design-system.md` antes de alterar cores, fontes, espaçamentos ou
  comportamento visual.

### Acessibilidade

Ao alterar a interface, confira:

- imagens decorativas usam `alt=""` e `aria-hidden="true"`;
- imagens informativas têm `alt` descritivo;
- botões possuem `aria-label` quando mostram apenas ícone;
- links externos usam `target="_blank"` com `rel="noreferrer"`;
- contraste entre texto e fundo continua legível;
- menu mobile informa `aria-expanded`.

## Checklist para alterações

Antes de considerar uma alteração pronta:

- [ ] A página roda com `npm run dev`.
- [ ] O build passa com `npm run build`.
- [ ] O layout foi testado em mobile e desktop.
- [ ] Links de GitHub, deploy, e-mail e telefone funcionam.
- [ ] Imagens novas existem em `public/` e carregam corretamente.
- [ ] Textos não estouram cards ou botões em telas pequenas.
- [ ] A documentação foi atualizada se a mudança afetou uso, estrutura ou design.

## Problemas comuns

### `npm install` falhou

Verifique a versão do Node:

```bash
node -v
```

O projeto pede Node `>=20.19.0`.

### Porta 5173 ocupada

O Vite pode sugerir outra porta automaticamente. Se quiser escolher uma porta:

```bash
npm run dev -- --port 5174
```

### Imagem não aparece

Confira:

- se o arquivo está dentro de `public/`;
- se o caminho começa com `/`;
- se letras maiúsculas e minúsculas batem com o nome do arquivo.

### Alterei o código, mas não mudou no navegador

Tente:

- salvar o arquivo novamente;
- recarregar a página;
- parar e reiniciar `npm run dev`;
- limpar cache do navegador se for imagem ou favicon.

## Deploy

Configuração recomendada para Vercel, Netlify ou Render Static Site:

- Build command: `npm run build`
- Publish directory: `dist`
- Node.js: `>=20.19.0`

O build final é gerado em `dist/`.

## MCP

Este projeto foi analisado para uso de MCP. A conclusão atual é: **não precisa
criar MCP agora**.

Motivo:

- o projeto é uma página estática de portfólio;
- não existe backend próprio;
- não existe banco de dados;
- não existe integração dinâmica com GitHub, CMS, CRM ou API privada;
- os dados estão em arrays locais dentro de `src/App.jsx`;
- o fluxo de manutenção é simples o bastante para documentação tradicional.

Foi criado o arquivo [MCP.md](./MCP.md) com a análise completa, critérios para
decidir no futuro e exemplos de quando MCP faria sentido.

## Documentos complementares

- [design-system.md](./design-system.md): tokens visuais, componentes, layout,
  acessibilidade e regras para manter consistência.
- [MCP.md](./MCP.md): análise sobre necessidade de MCP neste projeto.
