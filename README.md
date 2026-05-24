<p align="center">
  <img
    loading="lazy"
    src="https://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"
    alt="Status do projeto: concluido"
  />
</p>

<h1 align="center">Portfolio Frank Novitch</h1>

<p align="center">
  Portfolio profissional desenvolvido com React, Vite e Tailwind CSS para
  apresentar perfil, stack tecnica, formacao, experiencia, projetos praticos e
  canais de contato.
</p>

## Sumario

- [Sobre o projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Como rodar localmente](#como-rodar-localmente)
- [Scripts disponiveis](#scripts-disponiveis)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Arquitetura](#arquitetura)
- [Como alterar conteudos](#como-alterar-conteudos)
- [Padroes de desenvolvimento](#padroes-de-desenvolvimento)
- [Checklist para alteracoes](#checklist-para-alteracoes)
- [Deploy](#deploy)
- [MCP](#mcp)
- [Documentos complementares](#documentos-complementares)

## Sobre o projeto

Este projeto e uma landing page de portfolio para apresentar Frank Novitch como
desenvolvedor backend em formacao. A pagina reune informacoes profissionais,
tecnologias estudadas, projetos publicados, formacao, experiencia profissional e
formas de contato.

O foco do projeto e ser simples de manter, rapido para carregar e claro para
recrutadores, visitantes e outros desenvolvedores. Por isso a aplicacao foi
construida como uma Single Page Application com Vite, React e Tailwind CSS.

## Funcionalidades

- Hero section com apresentacao profissional e links principais.
- Navegacao por secoes internas da pagina.
- Menu responsivo para telas menores.
- Secao sobre perfil, objetivos e pontos fortes.
- Stack tecnica organizada por grupos.
- Cards de projetos com imagem, resumo tecnico, tags, link do GitHub e deploy.
- Linha do tempo com formacao, cursos e experiencia profissional.
- Formulario de contato que monta um email usando `mailto`.
- Layout responsivo para desktop, tablet e mobile.
- Assets otimizados em `public/`, incluindo imagens `.webp`.

## Tecnologias

| Tecnologia | Uso no projeto |
| --- | --- |
| React | Criacao da interface e componentes |
| Vite | Servidor de desenvolvimento e build |
| Tailwind CSS | Estilizacao utilitaria e responsividade |
| JavaScript | Logica da aplicacao |
| HTML5 | Estrutura base em `index.html` |
| CSS3 | Estilos globais e animacoes complementares |

## Como rodar localmente

### Pre-requisitos

Antes de comecar, instale:

- Node.js `>=20.19.0`
- npm, instalado junto com o Node.js
- Git, se quiser versionar ou clonar o projeto

Para conferir as versoes:

```bash
node -v
npm -v
```

### Instalacao

1. Acesse a pasta do projeto:

```bash
cd Portifolio
```

2. Instale as dependencias:

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

## Scripts disponiveis

| Script | Para que serve |
| --- | --- |
| `npm run dev` | Inicia o servidor local do Vite |
| `npm run build` | Gera a versao final em `dist/` |
| `npm run preview` | Abre uma previa local do build gerado |

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
- `src/`: codigo React e estilos globais.
- `dist/`: pasta criada pelo build. Nao deve ser editada manualmente.
- `node_modules/`: dependencias instaladas. Nao deve ser editada manualmente.

## Arquitetura

O projeto tem uma arquitetura simples e direta. A maior parte do conteudo e dos
componentes esta em `src/App.jsx`.

### Entrada da aplicacao

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
- itens de navegacao;
- stack tecnica;
- projetos;
- formacao;
- experiencias;
- cards de contato;
- componentes reutilizaveis.

O componente `App` monta a pagina nesta ordem:

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

Imagens usadas pela aplicacao ficam em `public/`. No Vite, tudo dentro de
`public/` pode ser referenciado a partir da raiz da URL:

```jsx
<img src="/logo-fn.png" alt="Frank Novitch" />
```

## Como alterar conteudos

Esta secao e a mais importante para quem esta comecando.

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

Use esse objeto sempre que a informacao aparecer em mais de um lugar. Isso evita
duplicacao e reduz chance de erro.

### Alterar menu

Edite o array `navItems` em `src/App.jsx`:

```jsx
const navItems = [
  { label: "Inicio", href: "#home" },
  { label: "Projetos", href: "#projects" },
];
```

O `href` precisa apontar para o `id` de alguma secao da pagina.

### Adicionar um projeto

Adicione um novo objeto no array `projects` em `src/App.jsx`:

```jsx
{
  title: "Nome do projeto",
  eyebrow: "Resumo curto",
  description: "Descricao objetiva do projeto.",
  highlights: ["Ponto tecnico 1", "Ponto tecnico 2"],
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

Boas praticas para imagens:

- use `.webp` para melhor performance;
- mantenha `.png` como fallback;
- use nomes simples, sem espacos;
- preencha `imageWidth` e `imageHeight` com as dimensoes reais;
- ajuste `imagePosition` se o print ficar cortado.

### Alterar stack tecnica

Existem dois pontos:

- `stack`: lista usada na faixa animada do hero;
- `stackGroups`: cards da secao de stack.

Se adicionar uma tecnologia importante, avalie atualizar os dois.

### Alterar formacao ou experiencia

Edite:

- `education`, para formacao;
- `courses`, para cursos e idiomas;
- `professionalExperience`, para experiencias profissionais.

Cada item da linha do tempo usa:

```jsx
{
  period: "2026",
  role: "Cargo ou curso",
  place: "Empresa ou instituicao",
  text: "Descricao curta.",
  tags: ["Tag 1", "Tag 2"],
}
```

### Alterar formulario de contato

O formulario nao envia dados para servidor. Ele monta um link `mailto` com os
campos preenchidos.

Se precisar de envio real no futuro, sera necessario adicionar um backend, um
servico externo de formulario ou uma funcao serverless.

## Padroes de desenvolvimento

### Nomeacao

- Componentes React usam `PascalCase`: `ProjectCard`, `SectionShell`.
- Variaveis e arrays usam `camelCase`: `navItems`, `contactCards`.
- Arquivos de imagem usam letras minusculas e hifen quando necessario.

### Componentizacao

Crie um componente novo quando:

- o mesmo bloco visual se repete;
- o JSX fica dificil de ler;
- a secao tem responsabilidade clara.

Evite criar componente quando:

- o trecho sera usado apenas uma vez;
- a abstracao deixa o codigo mais dificil para um junior entender.

### Estilizacao

- Prefira classes Tailwind nos componentes.
- Use tokens definidos em `tailwind.config.js` em vez de cores soltas.
- Consulte `design-system.md` antes de alterar cores, fontes, espacamentos ou
  comportamento visual.

### Acessibilidade

Ao alterar a interface, confira:

- imagens decorativas usam `alt=""` e `aria-hidden="true"`;
- imagens informativas tem `alt` descritivo;
- botoes possuem `aria-label` quando mostram apenas icone;
- links externos usam `target="_blank"` com `rel="noreferrer"`;
- contraste entre texto e fundo continua legivel;
- menu mobile informa `aria-expanded`.

## Checklist para alteracoes

Antes de considerar uma alteracao pronta:

- [ ] A pagina roda com `npm run dev`.
- [ ] O build passa com `npm run build`.
- [ ] O layout foi testado em mobile e desktop.
- [ ] Links de GitHub, deploy, email e telefone funcionam.
- [ ] Imagens novas existem em `public/` e carregam corretamente.
- [ ] Textos nao estouram cards ou botoes em telas pequenas.
- [ ] A documentacao foi atualizada se a mudanca afetou uso, estrutura ou design.

## Problemas comuns

### `npm install` falhou

Verifique a versao do Node:

```bash
node -v
```

O projeto pede Node `>=20.19.0`.

### Porta 5173 ocupada

O Vite pode sugerir outra porta automaticamente. Se quiser escolher uma porta:

```bash
npm run dev -- --port 5174
```

### Imagem nao aparece

Confira:

- se o arquivo esta dentro de `public/`;
- se o caminho comeca com `/`;
- se letras maiusculas e minusculas batem com o nome do arquivo.

### Alterei o codigo, mas nao mudou no navegador

Tente:

- salvar o arquivo novamente;
- recarregar a pagina;
- parar e reiniciar `npm run dev`;
- limpar cache do navegador se for imagem ou favicon.

## Deploy

Configuracao recomendada para Vercel, Netlify ou Render Static Site:

- Build command: `npm run build`
- Publish directory: `dist`
- Node.js: `>=20.19.0`

O build final e gerado em `dist/`.

## MCP

Este projeto foi analisado para uso de MCP. A conclusao atual e: **nao precisa
criar MCP agora**.

Motivo:

- o projeto e uma pagina estatica de portfolio;
- nao existe backend proprio;
- nao existe banco de dados;
- nao existe integracao dinamica com GitHub, CMS, CRM ou API privada;
- os dados estao em arrays locais dentro de `src/App.jsx`;
- o fluxo de manutencao e simples o bastante para documentacao tradicional.

Foi criado o arquivo [MCP.md](./MCP.md) com a analise completa, criterios para
decidir no futuro e exemplos de quando MCP faria sentido.

## Documentos complementares

- [design-system.md](./design-system.md): tokens visuais, componentes, layout,
  acessibilidade e regras para manter consistencia.
- [MCP.md](./MCP.md): analise sobre necessidade de MCP neste projeto.

