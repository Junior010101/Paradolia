---
trigger: model_decision
description: "Aplique essas diretrizes sempre que escrever, editar ou revisar arquivos HTML ou folhas de estilo CSS."
---

# Diretrizes de Código Frontend (HTML5 & CSS3)

## 1. Padrões de HTML5 Living Standard

1. **Semântica Rigorosa:** Utilize elementos estruturais nativos (`<header>`, `<main>`, `<section>`, `<nav>`, `<aside>`, `<footer>`, `<article>`, `<address>`) antes de recorrer a elementos genéricos como `<div>` ou `<span>`.
2. **Hierarquia de Títulos:** Cada página deve possuir exatamente um `<h1>`, com subseções seguindo estritamente a ordem decrescente (`<h2>` -> `<h3>` -> `<h4>`) sem pular níveis hierárquicos.
3. **Limpeza e Comentários:** Mantenha a marcação limpa. Insira comentários apenas quando houver justificativa técnica real (ex.: justificar agrupamentos aninhados para efeitos visuais ou explicar polyfills nativos). Evite comentários óbvios.
4. **Sem JavaScript para UI Básica:** Não adicione scripts inline (`onclick`, `onmouseover`) ou dependências JS para menus, modais, tooltips ou acordions que possam ser resolvidos com CSS3 nativo (`:hover`, `:focus-within`, `:target`, `:has()`).

## 2. Padrões de CSS3 Moderno e Metodologia BEM

1. **Estilização Exclusiva por Classes:** Todo elemento HTML a ser estilizado deve conter uma classe CSS expressa. Evite estilizar tags diretamente fora do `styles/styles.css` (reset/base).
2. **Nomenclatura BEM Estrita:**
   - **Block:** `.bloco` (representa o componente ou seção autônoma, ex.: `.header`, `.about-intro`, `.contact`).
   - **Element:** `.bloco__elemento` (filho contextual dependente do bloco, ex.: `.about-intro__title`, `.contact__link`).
   - **Modifier:** `.bloco--modificador` ou `.bloco__elemento--modificador` (variação de estado ou tema, ex.: `.header--start`, `.about-intro__item--offset`).
3. **Estrutura Obrigatória em 4 Seções:** Todo arquivo CSS em `styles/components/` ou `styles/pages/` deve conter impreterivelmente as quatro seções na ordem exata:

   ```css
   /* Block */
   .bloco { ... }

   /* Element */
   .bloco__elemento { ... }

   /* Modifiers */
   .bloco--modificador { ... }

   /* Media Queries */
   @media (max-width: 820px) { ... }
   ```

4. **Um Único Bloco por Arquivo:** Cada arquivo CSS deve ser restrito a uma única classe `Block`. Seções de página (`styles/pages/<pagina>/`) e componentes globais (`styles/components/`) devem possuir seus próprios arquivos isolados.
5. **Zero Redundância:** Nunca redeclare propriedades existentes no elemento base quando estiver definindo estados (`:hover`, `:active`, `:focus`) ou modificadores, alterando unicamente as propriedades que sofrem mutação.
6. **Variáveis CSS:** Utilize as variáveis globais definidas em `:root` (`styles/styles.css`) para cores, fontes e tamanhos.
