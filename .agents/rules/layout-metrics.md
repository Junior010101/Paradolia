---
trigger: model_decision
description: "Aplique essas diretrizes ao criar novas seções, estruturar contêineres, ajustar breakpoints ou consultar o sistema de design."
---

# Diretrizes de Métricas de Layout & Design System

## 1. Métricas de Grid e Contêiner

1. **Largura Máxima (Container):** `max-width: 1280px` em `.section__container`. Telas de desktop maiores devem manter o conteúdo centralizado com margens automáticas ou `justify-content: center` na `.section`.
2. **Padding Lateral (Inline):**
   - Desktop (`> 820px`): `padding-inline: 40px`.
   - Mobile/Tablet (`≤ 820px`): `padding-inline: 20px`.
3. **Paddings Verticais (Block):**
   - Seções Desktop: `padding-block: 80px` a `100px`.
   - Seções Mobile: `padding-block: 40px`.
4. **Header Fixo e Compensação:**
   - O cabeçalho possui altura mínima de `90px` e é posicionado de forma fixa (`position: fixed`).
   - O `<main class="main">` deve sempre conter `padding-top: 90px` para evitar sobreposição de conteúdo.

## 2. Breakpoints Responsivos

- **Principal (`820px`):** Ponto de corte que define a transição entre a experiência em colunas de desktop e o empilhamento vertical para tablets e dispositivos móveis.
- **Secundário (`480px`):** Ajustes pontuais para larguras de cartões, formulários e fontes em smartphones compactos.

## 3. Tokens do Sistema de Design (`styles/styles.css`)

Consulte sempre as variáveis CSS padronizadas:

- **Tipografia:** `--font-titles` (Montserrat), `--font-body` (Inter), e a escala `--fs-h1` (42px), `--fs-h2` (32px), `--fs-h3` (24px), `--fs-h4` (20px), `--fs-body` (16px), `--fs-h6` (14px).
- **Cores Oficiais:**
  - Laranja de destaque: `--laranja-avermelhado-primario` (`#e45a35`), `--laranja-primario` (`#f76205`).
  - Tons suaves: `--bege-primario` (`#f9c37b`), `--bege-secundario` (`#fbc782`), `--amarelo-primario` (`#f6e676`).
  - Tons neutros: `--cinza-primario` (`#d9d9d9`), `--cinza-secundario` (`#8e8e8e`), `--color-text` (`#222222`), `--branco-primario` (`#ffffff`), `--preto-primario` (`#000000`).
