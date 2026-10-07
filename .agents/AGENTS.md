# AGENTS.md — Instruções de Operação e Arquitetura do Projeto

## 1. Visão Geral do Projeto

O **Paradôlia** é uma aplicação web estática voltada ao estímulo da criatividade e combate ao burnout criativo por meio de entropia visual e formas abstratas.
O projeto é desenvolvido em **HTML5 Semântico (Living Standard)** e **CSS3 Moderno puro**, sem dependência de frameworks JavaScript para layout, animações ou interações de UI.

---

## 2. Métricas Oficiais do Projeto (Design System / Figma)

Todas as novas páginas, componentes e refatorações devem respeitar rigorosamente as métricas oficiais extraídas do Figma e parametrizadas no projeto:

### 2.1 Viewports e Breakpoints Responsivos

| Parâmetro | Valor | Descrição |
| :--- | :--- | :--- |
| **Breakpoint Principal** | `820px` | Separação entre Desktop (`> 820px`) e Mobile/Tablet (`≤ 820px`). |
| **Breakpoint Secundário** | `480px` | Ajustes finos para smartphones pequenos e cards compactos. |
| **Largura Máxima do Contêiner** | `1280px` | Limite de largura de `.section__container` com alinhamento centralizado estilo GitHub. |
| **Padding Lateral Desktop** | `40px` | `padding-inline: 40px` no contêiner e no cabeçalho em telas grandes. |
| **Padding Lateral Mobile** | `20px` | `padding-inline: 20px` em telas `≤ 820px`. |
| **Altura do Header Fixo** | `90px` | `min-height: 90px` no `.header`; compensado por `padding-top: 90px` no `.main`. |
| **Espaçamento de Seções** | `80px` a `100px` | `padding-block: 80px` a `100px` no Desktop; reduzido para `40px` no Mobile. |

### 2.2 Escala Tipográfica (`styles/styles.css`)

Fontes oficiais importadas localmente em `assets/fonts/`:
- **Títulos (`--font-titles`)**: `"Montserrat", sans-serif`
- **Corpo e Textos (`--font-body`)**: `"Inter", sans-serif`

| Token CSS | Tamanho (rem / px) | Peso Padrão | Uso Principal |
| :--- | :--- | :--- | :--- |
| `--fs-h1` | `2.625rem` (42px) | `900` | Título principal de seções e hero. |
| `--fs-h2` | `2rem` (32px) | `800` | Subtítulos principais e títulos de blocos. |
| `--fs-h3` | `1.5rem` (24px) | `700` | Títulos de cards e itens em destaque. |
| `--fs-h4` | `1.25rem` (20px) | `600` | Títulos de grupos secundários e botões. |
| `--fs-body` | `1rem` (16px) | `400` | Parágrafos de leitura, links e descrições. |
| `--fs-h6` | `0.875rem` (14px) | `300` | Notas de rodapé, metadados e legendas. |

### 2.3 Paleta de Cores Oficial (`:root` em `styles/styles.css`)

```css
:root {
  /* Cores Primárias de Destaque */
  --laranja-avermelhado-primario: #e45a35;
  --laranja-primario: #f76205;
  --amarelo-primario: #f6e676;
  --amarelo-secundario: #f2e291;

  /* Tons Quentes / Bege */
  --bege-primario: #f9c37b;
  --bege-secundario: #fbc782;
  --bege-escuro-primario: #e2b87f;
  --bege-claro-primario: #fceeca;
  --bege-claro-secundario: #fce7b8;

  /* Cores Neutras e Estruturais */
  --cinza-primario: #d9d9d9;
  --cinza-secundario: #8e8e8e;
  --color-text: #222222;
  --branco-primario: #ffffff;
  --preto-primario: #000000;

  /* Variações com Opacidade */
  --branco-primario--opacity-50: #ffffff80;
  --preto-primario--opacity-25: #00000040;
  --preto-primario--opacity-50: #00000080;
}
```

---

## 3. Estrutura e Organização de Arquivos

```
Paradôlia/
├── .agents/
│   ├── AGENTS.md               # Este manual operacional
│   ├── rules/                  # Regras contextuais do projeto
│   │   ├── style.md            # Padrões BEM, CSS3 e HTML5
│   │   ├── a11y.md             # Diretrizes de acessibilidade WCAG AA
│   │   ├── assets.md           # Gestão de ícones, imagens e vetores
│   │   └── layout-metrics.md   # Métricas do design system e breakpoints
│   ├── skills/                 # Skills especializadas do agente
│   │   ├── auditar-a11y/       # Auditoria de acessibilidade para screen readers
│   │   └── refatorar-bem/      # Refatoração e garantia de qualidade BEM
│   └── prototype_images/       # Imagens do Figma para contexto visual do agente
├── assets/
│   ├── fonts/                  # Fontes variáveis locais (Inter e Montserrat)
│   ├── icons/                  # Ícones funcionais em formato SVG
│   └── images/                 # Imagens e ilustrações de produção (SVG / PNG / WebP)
├── styles/
│   ├── reset.css               # Reset de margens e box-sizing
│   ├── fonts.css               # Declaração das @font-face locais
│   ├── styles.css              # Variáveis :root globais e estilos base
│   ├── components/             # Componentes modulares reutilizáveis (1 bloco por arquivo)
│   │   ├── header.css
│   │   ├── footer.css
│   │   ├── button.css
│   │   ├── divider.css
│   │   ├── layout.css
│   │   └── pagemap.css
│   └── pages/                  # Estilos específicos de seções por página
│       ├── start/              # Seções da Home (hero, about, feed, layout)
│       └── sobre/              # Seções da página Sobre (about-intro, contact)
├── index.html                  # Página inicial
└── sobre-retorno-index.html    # Página Sobre / Contato
```

---

## 4. Diretrizes de Raciocínio para o Agente

Ao receber qualquer solicitação (`agy` / Antigravity CLI):

1. **Consulta Prévia de Regras:**
   - Valide todo o código em relação às diretrizes de `.agents/rules/` (BEM estrito, HTML5 Living Standard e comentários pontuais).
   - Nunca use bibliotecas ou frameworks externos (ex: Bootstrap, Tailwind, React). Mantenha tudo em CSS3 nativo e HTML5 puro.

2. **Acessibilidade e Usabilidade Primeiro:**
   - Priorize recursos nativos do CSS3 (`:hover`, `:focus-visible`, `:focus-within`, `:target`, `:has()`) para reatividade e estados de interface antes de sugerir scripts em JavaScript.
   - Garanta compatibilidade com leitores de tela e contraste WCAG 2.1 AA.
   - Ative a skill `.agents/skills/auditar-a11y` para revisões de acessibilidade.

3. **Uso de Skills do Projeto:**
   - Para refatorações e revisões de CSS, consulte o fluxo definido na skill `.agents/skills/refatorar-bem`.
   - Cada componente com comportamento complexo, seção principal ou elemento de template global deve possuir seu próprio arquivo CSS isolado, restrito a uma única classe `Block`.

---

## 5. Padrão Rígido de Arquivos CSS

Todo arquivo CSS em `styles/components/` ou `styles/pages/` deve obrigatoriamente seguir a estrutura em 4 seções ordenadas:

```css
/* Block */
.meu-bloco {
  /* Propriedades do bloco pai */
}

/* Element */
.meu-bloco__elemento {
  /* Propriedades do elemento filho */
}

/* Modifiers */
.meu-bloco--variacao {
  /* Apenas modificações pontuais */
}

.meu-bloco__elemento--ativo {
  /* Variação do elemento */
}

/* Media Queries */
@media (max-width: 820px) {
  .meu-bloco {
    /* Adaptações responsivas para mobile/tablet */
  }
}
```

### Regras de Qualidade CSS:
- **Sem propriedades redundantes:** Nunca repita propriedades que já estão definidas no bloco pai ou em estados base (ex.: não redeclarar `display`, `padding` ou `font-size` em `:hover` a menos que seu valor mude).
- **Comentários mínimos e úteis:** Insira comentários apenas quando houver um comportamento não trivial (ex.: explicar uma transição complexa ou uso de seletores `:has()`). Não encha o código de comentários óbvios.

---

## 6. Gestão de Assets e Referências Visuais

- **Imagens e ícones de produção:** Devem ser obrigatoriamente salvos nas pastas `assets/images/` e `assets/icons/`, priorizando o formato vetorial `.svg`.
- **Imagens de protótipo (`.agents/prototype_images/`):**
  > [!CAUTION]
  > As imagens presentes em `.agents/prototype_images/` servem exclusivamente como contexto multimodal e especificação de design para o agente de IA.
  > **Elas NUNCA devem ser chamadas em tags `<img>` ou referenciadas no CSS de produção.**
- **Carregamento otimizado:**
  - Elementos acima da dobra (logo, arte principal do hero): `loading="eager" fetchpriority="high"`.
  - Elementos abaixo da dobra (ilustrações secundárias, cards): `loading="lazy"`.
