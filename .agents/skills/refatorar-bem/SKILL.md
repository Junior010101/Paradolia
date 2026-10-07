---
name: refatorar-bem
description: >-
  Analisa, refatora e audita código CSS sob a ótica de Qualidade de Software (QA) Frontend,
  garantindo aplicação rigorosa da metodologia BEM (Block, Element, Modifier), CSS3 Moderno,
  organização nas 4 seções padronizadas e eliminação de código redundante.
---

# Skill: Refatoração e Padronização BEM (CSS3 Moderno)

Esta skill orienta o agente na análise e refatoração de folhas de estilo CSS do projeto **Paradôlia**, assegurando que todo o código siga a arquitetura de blocos modulares, nomenclatura BEM pura e separação estrita de escopo sem duplicidade de regras.

---

## 1. Princípios e Regras Inegociáveis

1. **Estilização Restrita a Classes:**
   - Toda estilização deve ser aplicada via classes (`.bloco`, `.bloco__elemento`, `.bloco--modificador`).
   - É proibido estilizar seletores de tags puros (ex.: `section h2 { ... }`) ou cadeias descendentes aninhadas (ex.: `.card div a span { ... }`).
2. **Um Único Bloco por Arquivo CSS:**
   - Cada arquivo em `styles/components/` ou `styles/pages/` deve representar **apenas um Bloco BEM**.
   - Se um componente contiver um Bloco secundário, ele deve ser extraído para seu próprio arquivo CSS independente.
3. **Divisão Rígida nas 4 Seções Padronizadas:**
   Todo arquivo deve conter obrigatoriamente as seguintes seções comentadas, na ordem exata:
   ```css
   /* Block */
   /* Element */
   /* Modifiers */
   /* Media Queries */
   ```
4. **Zero Redundância em Estados e Modificadores:**
   - Em pseudo-classes (`:hover`, `:focus-visible`, `:active`) ou modificadores (`--variacao`), declare **apenas as propriedades que mudam de valor**.
   - Nunca repita `display`, `padding`, `font-family` ou dimensões se elas já foram herdadas do elemento base.
5. **Aproveitamento de Tokens Globais:**
   - Utilize as variáveis globais de `:root` (`styles/styles.css`) para cores, fontes e espaçamentos, garantindo consistência com o Figma.

---

## 2. Procedimento de Refatoração Passo a Passo

Ao receber um arquivo ou trecho de CSS para refatoração:

1. **Mapeamento de Blocos:**
   - Identifique a entidade autônoma principal (`Block`).
   - Identifique todos os elementos subordinados (`Element`) que dependem do contexto desse bloco.
   - Identifique estados alternativos ou variações visuais (`Modifiers`).
2. **Eliminação de Seletores Aninhados:**
   - Converta seletores compostos (ex.: `.meu-bloco .sub-item`) em classes planas BEM (`.meu-bloco__sub-item`).
3. **Estruturação nas 4 Seções:**
   - Distribua as regras de acordo com as seções `/* Block */`, `/* Element */`, `/* Modifiers */` e `/* Media Queries */`.
4. **Revisão de Redundâncias:**
   - Compare cada bloco de modificador ou `:hover` com sua regra pai e remova qualquer propriedade duplicada com valores idênticos.
5. **Validação Responsiva:**
   - Garanta que regras dentro de `@media` fiquem na seção `/* Media Queries */` no final do arquivo, respeitando os breakpoints oficiais (`820px` principal, `480px` secundário).

---

## 3. Checklist de Revisão de QA (Review Checklist)

- [ ] Todas as regras CSS utilizam seletores de classe?
- [ ] O arquivo contém apenas uma entidade `Block` principal?
- [ ] Os elementos filhos utilizam o formato duplo sublinhado (`bloco__elemento`)?
- [ ] As variações e temas utilizam o formato duplo hífen (`bloco--modificador` ou `bloco__elemento--modificador`)?
- [ ] O arquivo contém as 4 seções de comentários (`/* Block */`, `/* Element */`, `/* Modifiers */`, `/* Media Queries */`)?
- [ ] Não há propriedades repetidas sem necessidade em `:hover` ou modificadores?
- [ ] As cores e tipografias usam variáveis CSS de `styles/styles.css`?
- [ ] O breakpoint principal adotado é `820px`?

---

## 4. Recursos e Exemplos

Consulte os arquivos de apoio inclusos nesta skill:
- [Exemplo de CSS Desorganizado (Bad)](./examples/bad.css)
- [Exemplo de CSS Refatorado com BEM Estrito (Good)](./examples/good.css)
- [Template Boilerplate para Novos Componentes](./resources/bem-template.css)
- [Guia de Convenções de Nomenclatura](./resources/naming-conventions.md)
