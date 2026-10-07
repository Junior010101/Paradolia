---
trigger: model_decision
description: "Aplique essas diretrizes sempre que adicionar, referenciar ou otimizar imagens, ícones, fontes ou outros assets no projeto."
---

# Diretrizes de Gestão de Assets e Referências Visuais

## 1. Organização dos Diretórios de Assets

```bash
assets/
├── fonts/     # Fontes variáveis e licenças (Inter e Montserrat em formato .ttf)
├── icons/     # Ícones de interface e redes sociais obrigatoriamente em formato .svg
└── images/    # Imagens, ilustrações e fotos de produção (.svg, .png, .webp)
```

## 2. Regras Estritas de Utilização

1. **Prioridade para Formato SVG:**
   - Todos os ícones funcionais, logotipos, logomarcas e vetores devem utilizar o formato `.svg` para garantir nitidez vetorial e peso mínimo de transferência.
   - Guarde ícones funcionais em `assets/icons/` e ilustrações/fotos em `assets/images/`.
2. **Isolamento de Imagens de Protótipo:**
   - O diretório `.agents/prototype_images/` armazena exclusivamente capturas de tela do Figma e wireframes para inspeção multimodal do agente.
   - **É estritamente proibido referenciar qualquer arquivo de `.agents/prototype_images/` em tags `<img>` ou propriedades CSS de produção (`background-image`, etc.).**
3. **Caminhos Relativos Padronizados:**
   - No HTML da raiz (`index.html`, `sobre-retorno-index.html`): use caminhos relativos limpos, ex.: `./assets/images/logotipo.svg` ou `./assets/icons/pin-icon.svg`.
   - Em folhas de estilo dentro de `styles/components/` ou `styles/pages/`: utilize o caminho relativo adequado para subir os níveis de diretório até `assets/` (ex.: `url("../../assets/images/imagem.png")`).
4. **Dimensões e Carregamento:**
   - Sempre forneça atributos `width` e `height` explícitos nas tags `<img>` para prevenir saltos de layout indesejados (Cumulative Layout Shift - CLS).
   - Use `loading="eager"` e `fetchpriority="high"` apenas nos elementos acima da dobra principal (LCP).
   - Use `loading="lazy"` para todas as imagens e ilustrações posicionadas abaixo da dobra.
