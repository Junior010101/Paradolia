# Guia de Bolso WCAG 2.1 AA — Paradôlia

Este checklist sintetiza os critérios de sucesso essenciais para auditorias de acessibilidade no projeto.

---

## 1. Perceptível (Perceivable)

| Critério WCAG | Requisito Prático | Validação no Paradôlia |
| :--- | :--- | :--- |
| **1.1.1 Conteúdo Não Textual** | Toda imagem/ícone deve ter equivalente textual ou ser ignorada por leitores de tela. | `alt="descrição"` para ilustrações; `alt=""` e `aria-hidden="true"` para ícones decorativos. |
| **1.3.1 Informações e Relações** | A estrutura de apresentação deve ser refletida na semântica do código. | Uso de `<header>`, `<main>`, `<section>`, `<ul>`, `<address>`, sem substitutos em `<div>`. |
| **1.3.2 Sequência com Significado** | A ordem de leitura no DOM deve corresponder à ordem visual e lógica. | Leitura do leitor de tela deve fazer sentido sequencial sem saltos visuais confusos. |
| **1.4.3 Contraste Mínimo** | Texto normal deve ter contraste mínimo de **4.5:1**; texto grande (≥ 24px) mínimo de **3:1**. | Validar hexadecimais contra fundo (ex: `#222222` em `#ffffff` = 15.9:1; `#e45a35` = 4.54:1). |
| **1.4.11 Contraste Não Textual** | Componentes de interface e estados ativos devem ter contraste de pelo menos **3:1**. | Bordas ativas de botões, badges e ícones interativos. |

---

## 2. Operável (Operable)

| Critério WCAG | Requisito Prático | Validação no Paradôlia |
| :--- | :--- | :--- |
| **2.1.1 Teclado** | Todas as funcionalidades devem ser operáveis via teclado (`Tab`, `Enter`, `Espaço`). | Todos os botões e links navegáveis e acionáveis via teclado sem necessidade de mouse. |
| **2.1.2 Sem Bloqueio de Teclado** | O foco nunca deve ficar preso em nenhum componente. | Foco flui naturalmente por todo o documento. |
| **2.4.3 Ordem do Foco** | A ordem de foco deve preservar o significado e a operacionalidade. | Tabulação acompanha a leitura da página. |
| **2.4.4 Finalidade do Link** | O propósito de cada link deve ser claro a partir do próprio texto do link. | Proibido links genéricos como "clique aqui" ou links vazios sem `aria-label`. |
| **2.4.7 Foco Visível** | O elemento com foco deve possuir indicador visual evidente. | Regras `:focus-visible` definidas com contorno claro ou transição visual expressiva. |

---

## 3. Compreensível (Understandable)

| Critério WCAG | Requisito Prático | Validação no Paradôlia |
| :--- | :--- | :--- |
| **3.1.1 Idioma da Página** | O atributo de idioma principal deve estar definido na tag `<html>`. | `<html lang="pt-BR">` em todas as páginas. |
| **3.2.3 Navegação Consistente** | Mecanismos de navegação repetidos devem aparecer na mesma ordem. | Cabeçalho e rodapé mantêm padrão consistente entre `index.html` e `sobre-retorno-index.html`. |

---

## 4. Robusto (Robust)

| Critério WCAG | Requisito Prático | Validação no Paradôlia |
| :--- | :--- | :--- |
| **4.1.2 Nome, Função e Valor** | Todo elemento interativo deve ter papel e nome acessível bem definidos. | Botões, links e seções rotuladas com `aria-labelledby` ou textos explícitos. |
