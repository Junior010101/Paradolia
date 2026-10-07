# Guia de Convenções de Nomenclatura BEM — Paradôlia

Este guia sintetiza as regras e o vocabulário padrão de nomenclatura adotado na base de código do **Paradôlia**.

---

## 1. Padrão Sintático

| Tipo | Sintaxe | Exemplo no Paradôlia | Descrição |
| :--- | :--- | :--- | :--- |
| **Block** | `.bloco` | `.header`, `.about-intro`, `.contact`, `.footer` | Componente visual ou seção independente. |
| **Element** | `.bloco__elemento` | `.about-intro__title`, `.contact__link`, `.footer__list` | Parte integral subordinada ao bloco (nunca existe isolada). |
| **Modifier de Bloco** | `.bloco--modificador` | `.header--start`, `.footer--simple` | Variação de tema, estado ou comportamento do bloco. |
| **Modifier de Elemento** | `.bloco__elemento--modificador` | `.about-intro__item--offset` | Variação específica aplicada ao elemento filho. |

---

## 2. Regras Fundamentais de Arquitetura

1. **Evite Elementos de Elementos (Evite `bloco__el1__el2`):**
   - Incorreto: `.header__nav__list__item__link`
   - Correto: `.header__nav`, `.header__list`, `.header__item`, `.header__link`
   - O BEM preza por estrutura plana (`flat hierarchy`), facilitando a manutenção e a especificidade uniforme.

2. **Idioma Padronizado:**
   - O projeto utiliza nomes em inglês para componentes globais e termos canônicos (`header`, `footer`, `layout`, `button`, `divider`) ou em português quando referenciar conceitos da regra de negócio da página (`about-intro`, `contact`, `pagemap`). Mantenha a consistência com os arquivos existentes em `styles/`.

3. **Classes de Estado do Navegador vs Modificadores:**
   - Use pseudo-classes nativas (`:hover`, `:focus-visible`, `:active`, `:disabled`, `:target`) sempre que possível.
   - Use modificadores (`--active`, `--hidden`, `--open`) apenas quando o estado for controlado por marcação declarativa permanente.
