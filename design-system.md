# Design System

Este documento descreve as decisoes visuais do portfolio e serve como guia para
manter a interface consistente. Ele foi escrito para ajudar uma pessoa
entender o que pode mudar, onde mudar e quais cuidados tomar.

## Objetivo visual

O portfolio deve transmitir:

- foco tecnico;
- maturidade profissional;
- clareza de leitura;
- contraste forte;
- visual moderno sem excesso decorativo.

A interface usa tema escuro, tipografia editorial nos titulos, textos objetivos
e cards com bordas discretas.

## Onde o design system vive

Os principais tokens estao em `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {},
    fontFamily: {},
    boxShadow: {},
    backgroundImage: {},
  },
}
```

Os estilos globais estao em `src/index.css`.

Os componentes visuais estao em `src/App.jsx`.

## Cores

### Tokens principais

| Token | Valor | Uso |
| --- | --- | --- |
| `ink` | `#09090b` | Fundo principal |
| `panel` | `#121214` | Fundo de cards e blocos |
| `panelSoft` | `#18181b` | Hover ou variacao de card |
| `line` | `rgba(244,244,245,0.1)` | Bordas discretas |
| `cream` | `#f4f4f5` | Texto principal e botoes claros |
| `muted` | `#a1a1aa` | Texto secundario |
| `accent` | `#94a3b8` | Detalhes, pontos e selecao |
| `accentSoft` | `#cbd5e1` | Destaques de texto e icones |

### Como usar

Use as classes Tailwind com tokens:

```jsx
className="bg-ink text-cream border-line"
```

Evite cores soltas como:

```jsx
className="bg-[#111111]"
```

Use cor solta apenas quando for uma excecao pequena e justificada, como o ponto
verde de item atual na linha do tempo.

## Tipografia

### Fontes

| Token | Fonte | Uso |
| --- | --- | --- |
| `font-display` | Fraunces | Titulos grandes e chamadas principais |
| `font-body` | Plus Jakarta Sans | Textos, botoes, menus e cards |

As fontes sao importadas em `src/index.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=Fraunces...&family=Plus+Jakarta+Sans...");
```

### Regras

- Use `font-display` para titulos grandes.
- Use a fonte padrao do body para textos e componentes.
- Evite reduzir demais o contraste de textos longos.
- Evite textos longos em caixa alta. Caixa alta deve ficar em labels curtas.

## Escala de titulos

O projeto usa `clamp()` nos titulos principais:

```jsx
text-[clamp(2.6rem,12vw,6.5rem)]
```

Isso permite que o titulo cresca em telas grandes e continue legivel em mobile.

Padroes atuais:

- Hero: titulo maior, com impacto visual.
- Secoes: titulo grande, mas menor que o hero.
- Cards: titulo compacto, entre `text-lg` e `text-2xl`.

## Layout

### Container

Use `SectionShell` para manter largura e espacamento consistentes:

```jsx
function SectionShell({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
```

Regras:

- largura maxima: `max-w-7xl`;
- padding horizontal mobile: `px-4`;
- padding horizontal tablet: `sm:px-6`;
- padding horizontal desktop: `lg:px-10`.

### Secoes

Cada secao principal usa:

- `border-b border-line`;
- espacamento vertical amplo;
- `id` para navegacao por ancora.

Exemplo:

```jsx
<section id="projects" className="border-b border-line">
  <SectionShell className="py-16 sm:py-20 lg:py-32">
    ...
  </SectionShell>
</section>
```

## Componentes

### Header

Responsabilidades:

- manter navegacao fixa no topo;
- exibir logo;
- exibir menu desktop;
- exibir menu mobile com estado aberto/fechado.

Cuidados:

- manter `aria-label` no botao mobile;
- manter `aria-expanded`;
- fechar menu ao clicar em um link.

### Button

Variantes atuais:

- `solid`: fundo claro e texto escuro;
- `ghost`: transparente com borda.

Uso:

```jsx
<Button href="#projects">Ver projetos</Button>
<Button href={`mailto:${profile.email}`} variant="ghost">Enviar email</Button>
```

Regras:

- botoes devem ter altura minima `min-h-12`;
- bordas arredondadas usam `rounded-full`;
- texto deve ser curto e direto.

### Cards

Tipos principais:

- `FeatureCard`;
- `ProjectCard`;
- `TimelineItem`;
- `ContactCard`.

Padrao visual:

- `border border-line`;
- `bg-panel/75`;
- raio entre `rounded-[1.5rem]` e `rounded-[1.75rem]`;
- hover com borda `accent/35`;
- animacao curta de `200ms`.

### Tags

Tags sao criadas pelo componente `TagList`.

Uso:

```jsx
<TagList items={["Node.js", "Express", "SQLite"]} />
```

Padrao:

- fundo `bg-white/[0.07]`;
- borda `border-white/5`;
- texto pequeno e semibold.

## Imagens

### Logo

Arquivo:

```text
public/logo-fn.png
```

Componente:

```jsx
<LogoMark className="h-8 w-auto" />
```

### Hero

Arquivo:

```text
public/hero-laptop.avif
```

A imagem e decorativa, por isso usa:

```jsx
alt=""
aria-hidden="true"
```

### Projetos

Cada projeto deve ter:

- imagem `.webp`;
- fallback `.png`;
- largura e altura reais;
- posicao ajustada com `imagePosition`.

Exemplo:

```jsx
image: "/projects/tempus.png",
imageWebp: "/projects/tempus.webp",
imageWidth: 1139,
imageHeight: 800,
imagePosition: "50% 44%",
```

## Movimento

Movimentos existentes:

- marquee da stack;
- hover em cards;
- hover em imagens de projeto;
- pulse no item atual da timeline;
- abertura do menu mobile.

Regras:

- duracoes devem ser curtas, entre `200ms` e `500ms`;
- evite animacoes que dificultem leitura;
- mantenha suporte a `prefers-reduced-motion`.

O projeto ja possui fallback em `src/index.css`:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
```

## Responsividade

Breakpoints usados com frequencia:

| Prefixo | Quando aplica | Uso comum |
| --- | --- | --- |
| sem prefixo | mobile primeiro | base da interface |
| `sm:` | telas pequenas/medias | espacamentos e fontes |
| `md:` | tablets | grids com duas colunas |
| `lg:` | desktop | layouts principais |
| `xl:` | desktop amplo | menu completo no header |

Regra principal: escreva primeiro para mobile e depois adicione melhorias para
telas maiores.

## Acessibilidade

Checklist visual e semantico:

- Use `section` com `id` para cada area navegavel.
- Use apenas um `h1` na pagina.
- Preserve hierarquia de titulos: `h1`, `h2`, `h3`.
- Links externos precisam de `target="_blank"` e `rel="noreferrer"`.
- Botoes de icone precisam de `aria-label`.
- Imagens decorativas devem usar `alt=""`.
- Textos precisam ter contraste suficiente contra o fundo.
- Inputs devem ter `label`.

## SEO e metadados

Arquivo:

```text
index.html
```

Itens atuais:

- `lang="pt-BR"`;
- `meta name="description"`;
- favicons;
- `apple-touch-icon`;
- titulo da pagina.

Ao mudar nome, cargo ou foco profissional, revise tambem o `index.html`.

## Quando criar novo estilo

Crie um novo padrao visual apenas se:

- ele sera reutilizado;
- melhora a leitura;
- resolve um problema real de layout;
- combina com o tema escuro e tecnico do projeto.

Evite:

- muitas cores novas;
- gradientes muito chamativos;
- cards dentro de cards;
- textos longos em botoes;
- sombras fortes demais;
- mudancas pontuais que quebram consistencia.

## Checklist antes de mudar o design

- [ ] A mudanca usa tokens existentes quando possivel.
- [ ] O layout funciona em mobile.
- [ ] Nao ha texto sobreposto.
- [ ] Cards continuam alinhados.
- [ ] Imagens nao ficaram cortadas de forma ruim.
- [ ] O contraste continua bom.
- [ ] `npm run build` continua passando.

