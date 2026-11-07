# Design system

Critérios: `referencias/direcao-visual.md`. Documentado **retroativamente** a partir do que já foi
implementado (Direção A "Selo e luz") em `src/index.css`, `src/componentes/*.css` e
`src/motor/motor.css`, não decidido do zero — valores reais lidos do código, nada inventado.

- **Identidade e fontes das decisões:** `DIRECAO-VISUAL.md` (Direção A "Selo e luz") e `BRIEF.md`
  (logo oficial, tom de voz real do Linktree/Instagram). Paleta extraída por amostragem de pixel
  direta da logo (`src/assets/img/logo-jady-emanuela.png`), não estimada visualmente.

- **Cores, papéis e contraste** (tokens em `src/index.css`):
  | Token | Valor | Papel |
  |---|---|---|
  | `--cor-esmeralda` | `#0ea978` | acento principal, gradiente de CTA e halo |
  | `--cor-esmeralda-escura` | `#0b7a58` | texto de destaque (gradiente), início de gradiente de botão |
  | `--cor-esmeralda-clara` | `#6fd9b8` | halo/glow decorativo (painéis, selo) |
  | `--cor-rose` | `#b07d6e` | acento secundário (gradiente de título, halo) — só para texto grande (≥24px), ver abaixo |
  | `--cor-rose-texto` | `#8f5c4e` | mesma família do dourado-rosé, escurecida para texto pequeno |
  | `--cor-rose-clara` | `#e3bfae` | halo/glow decorativo |
  | `--cor-fundo` | `#fbf8f2` | fundo principal (creme muito claro) |
  | `--cor-fundo-alt` | `#f3ece1` | fundo de faixas alternadas (painéis, rodapé) |
  | `--cor-texto` | `#2a2622` | texto principal |
  | `--cor-texto-suave` | `#6b645c` | texto secundário/apoio |

  Contraste conferido (WCAG AA) nesta revisão: `--cor-texto-suave` sobre `--cor-fundo` ≈ 5,5:1 e
  sobre `--cor-fundo-alt` ≈ 5,0:1 (ambos passam o mínimo de 4,5:1 para texto normal).
  `--cor-rose` sobre `--cor-fundo` ≈ 3,3:1 — **insuficiente para texto pequeno** (mínimo 4,5:1),
  mas correto para o uso em `.heroi__titulo em` porque esse texto é grande (≥36px, exige só 3:1).
  O rótulo pequeno `.heroi__assinatura` usava `--cor-rose` diretamente e falhava o AA; corrigido
  nesta revisão para `--cor-rose-texto` (≈5,2:1).

- **Tipografia, pesos e fontes locais:** `Fraunces` (variável, peso 300–600, serifada, títulos:
  `--fonte-titulo`) e `Inter` (variável, peso 400–700, corpo: `--fonte-corpo`), ambas self-hosted em
  `src/assets/fonts/*.woff2` com licença SIL OFL registrada em
  `src/assets/fonts/LICENSE-Fraunces-e-Inter.txt`. Títulos de seção em peso 500; eyebrow/rótulos em
  caixa alta com `letter-spacing` largo (0.14–0.18em).

- **Escala de espaçamento, tamanhos, largura e grid:** container máximo `1280px`, padding lateral
  fluido `clamp(1.25rem, 5vw, 3.5rem)`. Espaçamentos verticais de seção em `clamp()` (ex.
  `clamp(3rem, 8vw, 5.5rem)` nas faixas de tratamento). Grid de duas colunas (`minmax(0,1fr)
  minmax(0,1fr)`) no hero e nas faixas, colapsando para uma coluna em `max-width: 860px`
  (breakpoint único do projeto até agora).

- **Bordas, raios e ícones:** botões e pílulas em `border-radius: 999px` (cápsula); painéis de
  imagem/halo das faixas em `1.5rem`; selo e avatar do cabeçalho em círculo (`50%`). Ícone de
  WhatsApp próprio em SVG (`icone-whatsapp.tsx`), não biblioteca de ícones externa.

- **Imagens e uso autorizado:** única imagem real usada é a logo oficial da cliente
  (`logo-jady-emanuela.png`), reaproveitada no cabeçalho (40px) e ampliada no hero (selo
  360px/60vw) — uso autorizado por ser a própria marca do cliente. Painéis das faixas de
  tratamento ainda não têm foto real (pendência do Canva/Heyzine): usam um halo gradiente decorativo
  nas cores da marca como placeholder honesto, não imagem de banco.

- **Componentes, biblioteca, finalidade e estados:** nenhuma biblioteca de componentes (Flowbite/
  daisyUI) usada até agora — tudo é CSS próprio sobre a identidade real da marca, decisão adequada
  porque os componentes construídos (hero, faixa alternada, botão CTA, botão flutuante) são simples
  o bastante para não precisar de biblioteca; reavaliar se uma seção futura precisar de componente
  mais complexo (ex. carrossel). Estados implementados: `:hover`/`:focus-visible` em todos os links e
  botões (elevação + sombra mais forte); botão flutuante expande texto só em telas ≥46rem no hover.

- **Foco, teclado e acessibilidade:** link "Ir para o conteúdo" (`.pular`) via skip-link, visível só
  no foco. `:focus-visible` com contorno de cor da marca (`--cor-rose`, 3px, offset 3px) no botão
  flutuante; outros botões usam elevação+sombra no foco. Nav e seções com `aria-label`/
  `aria-labelledby` reais. Selo do cabeçalho marcado `aria-hidden` (decorativo, nome já está em
  texto ao lado); selo do hero tem `alt` descritivo real.

- **Responsividade e movimento reduzido:** breakpoint único em `860px` (grid de duas colunas →
  uma coluna) e `700px`/`46rem` para o botão flutuante (ícone+texto → só ícone). Contrato do motor
  (`src/motor/motor.js`/`motor.css`, copiado de `motor/` e adaptado para React): elementos com
  `data-fx` ficam na posição final sem JS (`html:not(.fx-js)`) e com `prefers-reduced-motion:
  reduce` (`.fx-reduzido`) — confirmado nesta revisão que `.fx-reduzido [data-fx] { opacity:1
  !important; transform:none !important }` força tudo visível, sem depender de scroll.

- **Tokens CSS e arquivos de implementação:** tokens centrais em `src/index.css` (`:root`);
  componentes em `src/componentes/{hero,faixa-tratamento,contato,whatsapp-flutuante}.css`; motor de
  animação em `src/motor/{motor.js,motor.css}`.

## Observação de processo (revisão independente, 2026-11-07)

Capturas de página inteira (`page.screenshot({ fullPage: true })`) neste ambiente (Chromium
headless sem GPU, renderização por software) produzem artefatos de composição em páginas muito
altas: não só deixam seções fora da viewport inicial em branco (como já registrado em
`WIREFRAME.md`), mas também colam fragmentos "fantasmas" de outras seções em posições erradas —
confirmado mesmo com `reducedMotion: reduce`. **Não confiar em captura `fullPage` para páginas
longas neste ambiente**; usar sempre captura por posição de rolagem real (`scrollTo` + screenshot de
viewport, repetido a cada ~viewport de altura) para validar o resultado de verdade. A ordem real do
DOM e o conteúdo de cada seção foram confirmados corretos (desktop e celular) por esse método.
