# Design system

Redesenho completo em 2026-11-09 ("Lapidação esmeralda"; a forma em arco foi trocada no mesmo dia por parecer genérica). O usuário reprovou o layout anterior
("Selo e luz": faixas vazias com "conteúdo chega em breve", halos desfocados no lugar de fotos) e
pediu para manter só a paleta. A versão anterior está no git (commit `b2487fb`).
Critérios: `referencias/direcao-visual.md`. Pesquisa: `DIRECAO-VISUAL.md`, seção 2026-11-09.

## Cores (tokens em `src/index.css`)

Paleta mantida, extraída por amostragem de pixel da logo real. Só entraram os tons "floresta",
que são a mesma esmeralda escurecida para fundos escuros.

| Token | Valor | Papel |
|---|---|---|
| `--cor-floresta` | `#0f3d31` | fundo escuro (véu do herói, especialidade, rodapé), títulos de tratamento |
| `--cor-floresta-media` | `#145040` | hover do botão primário |
| `--cor-esmeralda-escura` | `#0b7a58` | botão primário (texto branco ≈ 5,3:1) |
| `--cor-esmeralda` | `#0ea978` | foco (`:focus-visible`), brilho da faixa escura |
| `--cor-rose-clara` | `#e3bfae` | destaque de título sobre fundo escuro (≈ 7:1 sobre floresta) |
| `--cor-rose-texto` | `#8f5c4e` | rótulos e chamadas sobre fundo claro (≈ 5,2:1) |
| `--cor-fundo` / `--cor-fundo-alt` | `#fbf8f2` / `#f3ece1` | creme principal / creme da cena de tratamentos |
| `--cor-texto` / `--cor-texto-suave` | `#2a2622` / `#6b645c` | texto (≥ 5:1 nos dois fundos claros) |
| `--cor-creme-sobre-escuro` | `#f6efe4` | texto e botão claro sobre floresta |

## Tipografia

Fraunces (títulos, pesos 300 a 500) e Inter (corpo), locais em `src/assets/fonts/`. Destaque por
peso 300 + cor rosé, nunca itálico (o arquivo variável não tem itálico e o falso itálico fica
ruim). Rótulos em caixa alta, 0,75rem, espaçamento 0,18em.

## Forma, espaço e grade

- **Linguagem de forma: lapidação esmeralda** (classe `.gema`, retângulo de cantos chanfrados por
  `clip-path`, como a pedra no corte esmeralda e o diamante da logo). Cada uso muda `--corte`
  (miniatura 0.85rem, colagem 1.1rem e 2.4rem, painel 2.75rem, especialidade até 4rem).
  `.engaste` desenha a moldura rosé com a mesma lapidação (deslocada no propósito, em volta na
  especialidade). O círculo fica para o selo: logo, foto pequena do propósito e uma foto da colagem. Botões em cápsula. Sem cartões retos.
- Largura útil 1320px, margem lateral `clamp(1.25rem, 5vw, 4rem)`, um ponto de quebra em 900px.

## Componentes (`src/componentes/`)

| Componente | O que é | Origem |
|---|---|---|
| `heroi` | Desktop: foto de ponta a ponta com véu floresta e título por cima. Celular: texto logo abaixo do cabeçalho sobre o verde, foto lapidada depois | princípio de Casa Lunara (supahero.io) |
| menu `<details>` | Painel no celular com links + WhatsApp + Instagram; funciona sem JS | princípio do Aveon (navbar.gallery) |
| `manifesto` | Foto lapidada com engaste rosé deslocado e círculo menor sobreposto + frase "Realçar a sua beleza natural.", parágrafo e assinatura "Brilhe por você!" (celular: foto primeiro) | próprio (2ª versão; a frase com fotos em cápsula foi trocada) |
| `tratamentos` | Desktop: abas WAI-ARIA (setas, Home, End), nomes numerados à esquerda, foto lapidada + texto ao lado. Celular e sem JS: lista corrida com miniatura lapidada e link de WhatsApp | próprio (a cena presa foi reprovada em 2026-11-09) |
| `especialidade` | Faixa escura única: clareamento corporal, foto lapidada (corte grande) com engaste rosé fino | próprio |
| `contato` | Colagem: duas lapidações de cortes diferentes e um círculo + CTA; rodapé floresta | próprio |
| `acoes-flutuantes` | WhatsApp + seta "voltar ao topo" acima (aparece após 500px) | padrão do motor (`adaptadores/react-vite`) |

Nenhuma biblioteca de componentes. Cada botão de tratamento abre o WhatsApp com mensagem pronta
(`dados.ts`, função `whatsapp()`).

## Estados, acessibilidade e movimento

- `:focus-visible` global em esmeralda, link "Ir para o conteúdo", `aria-labelledby` em todas as
  seções, alt descritivo com "imagem ilustrativa"; fotos decorativas com alt vazio.
- Motor `data-fx-*`: só revelações curtas (`surgir`, `subir`, `crescer`). Troca de aba com
  fade curto, desligado em `prefers-reduced-motion`. Sem digitação, contador, paralaxe ou efeito que segue o mouse.
- Sem legenda "Imagem ilustrativa" (removida a pedido em 2026-11-09); o alt descreve a cena.

## Verificação (2026-11-09)

Capturas por rolagem real (não `fullPage`) em 1440×900, 390×844 e 1440×900 com
`reducedMotion: reduce`, mais o menu aberto no celular: `verificacao/jady-redesign/v2`, `v3`.
Corrigidos durante a verificação: ordem de CSS (`index.css` agora é importado antes do App), etapas
vazando sobre a faixa escura no modo reduzido, legenda e rodapé sob o botão flutuante, margens
desalinhadas entre seções.
