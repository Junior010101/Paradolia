---
name: auditar-a11y
description: >-
  Audita código HTML e CSS sob a ótica de acessibilidade (A11y), garantindo conformidade com WCAG 2.1 AA,
  leitura fluida por leitores de tela (screen readers), semântica de marcos e navegação por teclado.
---

# Skill: Auditoria de Acessibilidade Frontend (A11y)

Esta skill orienta o agente na execução de auditorias completas de acessibilidade no código HTML e folhas de estilo CSS do projeto **Paradôlia**, visando conformidade rigorosa com **WCAG 2.1 AA** e uma experiência inclusiva para tecnologias assistivas.

---

## 1. Procedimento de Auditoria Passo a Passo

Ao receber código HTML/CSS para auditoria:

1. **Inspeção de Marcos Semânticos (Landmarks):**
   - Verifique a existência e unicidade de `<header>`, `<main>`, `<footer>` e `<nav>`.
   - Garanta que todo conteúdo navegável esteja dentro de um marco estrutural principal.

2. **Hierarquia de Títulos (Heading Structure):**
   - Confirme a presença de exatamente um `<h1>` por página (representando o título do documento/seção principal).
   - Verifique se os subtítulos seguem sequência lógica (`<h2>`, `<h3>`, `<h4>`) sem saltos (ex.: `<h1>` direto para `<h3>`).

3. **Imagens e Mídia:**
   - Para imagens informativas ou ilustrações: confirme se há um atributo `alt` descritivo que transmita o propósito da imagem.
   - Para ícones e elementos meramente decorativos: garanta `alt=""` e `aria-hidden="true"`.
   - Verifique se atributos de dimensão (`width` e `height`) estão presentes.

4. **Elementos Interativos e Teclado:**
   - Botões devem usar `<button>`, nunca `<div onclick>` ou `<a href="#">` sem função de âncora real.
   - Links devem ter texto perceptível e claro sobre seu destino (sem "clique aqui").
   - Verifique se estados `:focus-visible` estão definidos no CSS com indicador visual nítido.

5. **Uso Mínimo e Cirúrgico de ARIA:**
   - A regra de ouro é: **nenhum ARIA é melhor do que ARIA mal utilizado**.
   - Substitua `role="button"`, `role="navigation"` ou `role="banner"` pelos equivalentes nativos `<button>`, `<nav>` e `<header>`.
   - Mantenha `aria-label` apenas quando o elemento visual não contiver texto textual correspondente.

6. **Contraste de Cores:**
   - Valide se o texto normal possui razão de contraste mínima de `4.5:1` contra o fundo.
   - Valide se textos grandes (≥ 24px ou ≥ 18.66px negrito) e componentes essenciais atingem ao menos `3:1`.

---

## 2. Checklist Rápido de Revisão (Review Checklist)

- [ ] A página contém `<html lang="pt-BR">`?
- [ ] Há apenas um `<h1>` no documento?
- [ ] A ordem dos cabeçalhos (`<h1>` até `<h6>`) é estritamente sequencial?
- [ ] Todas as tags `<img>` possuem atributo `alt` preenchido (ou vazio com `aria-hidden="true"`)?
- [ ] Os ícones funcionais em SVG/PNG possuem alternativas textuais ou rótulos via `aria-label`?
- [ ] Links externos abrem com `rel="noopener noreferrer"`?
- [ ] O foco pelo teclado (`Tab`) é visível em todos os elementos interativos?
- [ ] Não há `outline: none` desprovido de substituto visual `:focus-visible`?
- [ ] O contraste de cores das fontes atende ao nível WCAG AA?
- [ ] Não há tabelas usadas para fins exclusivos de layout?

---

## 3. Formato do Retorno da Auditoria

Ao emitir o relatório de auditoria para o usuário:
1. Destaque os problemas encontrados categorizados por gravidade (Crítico, Médio, Baixo).
2. Forneça o snippet de código com as **linhas exatas a serem corrigidas**, sem reescrever arquivos inteiros desnecessariamente.
3. Justifique a mudança com base nos critérios WCAG correspondentes.

---

## 4. Recursos e Exemplos

Consulte os arquivos de apoio inclusos nesta skill:
- [Exemplo de Código Inadequado (Bad)](./examples/bad.html)
- [Exemplo de Código Corrigido e Acessível (Good)](./examples/good.html)
- [Checklist Detalhado WCAG 2.1 AA](./resources/wcag-checklist.md)
