# Direção visual

Preencher antes de aplicar o design. Método e critérios: `referencias/direcao-visual.md`.

## Objetivo e identidade
- Negócio, público e ação desejada: clínica de estética avançada (facial, corporal, tricologia/capilar, injetáveis/Botox, Kit Home Care) em Belo Horizonte; público vindo do Instagram/Linktree buscando tratamentos estéticos; ação desejada é contato por WhatsApp (agendar avaliação).
- Materiais e características reais da marca: logo oficial em alta resolução (selo circular, fundo branco, anel de texto verde-esmeralda "JADY EMANUELA" + "ESTÉTICA AVANÇADA", ícone central de coroa + diamante em gradiente verde-esmeralda e seringa dourado-rosé); tom de voz real "Brilhe por você! Nosso propósito é realçar sua beleza natural" (Linktree); vibe confirmada no BRIEF: premium, delicado, confiável, "brilho natural".
- Restrições do nicho e materiais disponíveis: procedimentos injetáveis (Botox) exigem identificação do profissional responsável e seu conselho (CRM/COREN/CRBM) — **pendente do cliente, não construir essa seção sem confirmação** (ver `BRIEF.md` seção 3). Sem fotos reais da clínica/equipe ainda (fachada mencionada pela cliente está no Google, mas a busca automática não achou o perfil). Sem promessa de resultado/cura em nenhuma seção, mesmo nos procedimentos não invasivos.

## Pesquisa visual

| Fonte | Pesquisa ou URL | Resultado observado ou limitação |
|---|---|---|
| Mobbin | busca por `site:mobbin.com beauty clinic OR skincare landing page` | Sem acesso: o buscador não indexa mobbin.com (resultados vieram todos de lapa.ninja, um terceiro). Não foi possível abrir o catálogo do Mobbin neste ambiente (exige login). Limitação registrada, não contornada. |
| Awwwards | `site:awwwards.com beauty clinic aesthetic landing page`, depois páginas individuais abertas | Acesso funcionou: três páginas de listagem abertas e os sites reais por trás delas visitados e capturados (Royal Clinic, Frame SB, Annatwelve Fragrances — ver tabela abaixo). |
| Cosmos | busca por `cosmos.so aesthetic clinic beauty moodboard` | Sem acesso: o buscador não retornou nenhuma página de cosmos.so (resultados foram todos de outros sites com "cosmos" no nome). Limitação registrada. |
| Pinterest | `site:pinterest.com clínica estética landing page design` | Sem acesso: o filtro `site:` não trouxe nenhum resultado de pinterest.com neste buscador (o Pinterest não parece indexado por ele). Limitação registrada. |
| NameThatUI | `namethatui.com beauty clinic spa component patterns` | Sem acesso: nenhuma página de namethatui.com retornada; resultados foram templates WordPress/Framer de terceiros. Limitação registrada. |

| Referência e URL | Nicho ou prêmio, autor se identificado | Data e forma de observação | Evidência visual ou de UX | Princípio adaptável e o que descartar |
|---|---|---|---|---|
| Royal Clinic — `https://royalclinic.pl/` | Nicho: clínica de estética/medical spa (Polônia); listada no Awwwards | 2026-11-07, observação direta (screenshot Playwright, 1440×900 e 390×844) | Abertura: foto real de procedimento (mão enluvada aplicando produto) em tela cheia, título serifado translúcido sobreposto ("Nasza pasja, Twoje piękno"), três links de texto simples separados por traços finos (Zabiegi · Sklep · Konsultacja), sem botões. Nav clara com logo-selo floral centralizado. No celular, nav vira hambúrguer + carrinho, título quebra em duas linhas, mesma foto cortada mais perto. | Adaptar: fotografia real do procedimento como herói (não ilustração), navegação só de texto sem botão, selo circular como logo central — já é a mesma lógica do selo da Jady. Descartar: paleta neutra fria (creme/preto) não é a da Jady (verde-esmeralda/dourado-rosé); não copiar a composição exata nem os três links idênticos. |
| Frame SB (Frame by Sarah Battiana) — `https://www.framesb.ch/` | Nicho: clínica de estética (Genebra); Menção de Honra Awwwards ("Medical & Aesthetic E-Commerce Site") | 2026-11-07, observação direta (screenshot Playwright, 1440×900 e 390×844) | Abertura: foto panorâmica real da cidade (não closeup de procedimento) com título serifado em caixa alta sobreposto, subtítulo curto, CTA só em texto sublinhado ("En savoir plus"), nav transparente sobre a foto com o mesmo tipo de logo floral/selo do Royal Clinic. Botão flutuante de WhatsApp no canto inferior direito, mantido também no celular. | Adaptar: botão de WhatsApp flutuante persistente (mesmo padrão já usado em `hospital-day-mais-vida-v2`, confirma que é convenção testada, não repetição indevida); nav transparente sobre foto ampla. Descartar: foto de cidade não se aplica (Jady não tem esse material); CTA só-texto pode ser fraco para conversão por WhatsApp — preferir um botão visível. |
| "Spavelle" (template Health & Wellness/Medical Spa) — listagem `https://webflow.com/templates/html/aesthiva-website-template` | Nicho: template de clínica/medspa no Webflow Marketplace, por estúdio LioWeb | 2026-11-07 — **limitação**: a URL original levou a uma página de listagem do marketplace que embute uma imagem de pré-visualização do template ("Spavelle"), não o template ao vivo interativo; registrado como captura identificada de terceiro, não navegação direta no produto final. | Evidência (da captura embutida): herói assimétrico — título grande à esquerda ("Subtle aesthetic care for skin that looks natural"), parágrafo curto de apoio à direita do título (não abaixo), etiqueta/pílula flutuante sobre a foto ("Oxygen Infusion Facial"), barra utilitária no topo com telefone + botão "Contact Us". | Adaptar: herói assimétrico (título de um lado, texto de apoio do outro) e etiqueta/pílula flutuante nomeando o procedimento em destaque — dá variedade em relação à composição centralizada do Royal Clinic. Descartar: copy genérica do template (não usar as frases, são de outro cliente) e o grid de preço "Buy template" (não se aplica). |
| Annatwelve Fragrances — `https://www.annatwelve.com/en` | Outro setor: perfumaria de luxo (Itália); Site of the Day Awwwards 2020 | 2026-11-07, observação direta (screenshot Playwright, 1440×900 e 390×844) | Abertura escura e atmosférica: fundo macro texturizado (textura de folha/madeira com luz âmbar), nomes de produtos em tipografia enorme rotacionada 90° lida de baixo para cima, empilhados lado a lado (DUNE, BOREAL, ROYALE...), selo circular do logo no canto superior esquerdo, nav reduzida a dois links de texto. Extremamente minimalista, sem nenhum botão visível na primeira dobra. | Adaptar (o princípio, não o tom): restrição radical de elementos de chrome na abertura, uso de tipografia rotacionada como ritmo gráfico pontual (não para o site inteiro), selo circular de marca no canto como assinatura recorrente — mesmo princípio de selo que a Jady já tem. Descartar: paleta escura/âmbar não serve à marca da Jady (fundo branco, tom "brilho natural" claro, não sombrio); não adequada ao nicho de saúde/estética, que pede mais clareza e confiança visual do que mistério. |

Quatro referências observadas visualmente (capturas Playwright reais, exceto a Spavelle que é uma captura identificada de terceiro por indisponibilidade do template ao vivo): duas do nicho (Royal Clinic, Frame SB) e duas de design achadas via Awwwards/Webflow Marketplace (Spavelle, Annatwelve — esta última de outro setor). Mobbin, Cosmos, Pinterest e NameThatUI ficaram sem acesso neste ambiente (ver tabela de fontes); não foi possível contornar isso com as ferramentas disponíveis nesta sessão.

## Alternativas

### Direção A — "Selo e luz"
- Conceito e por que se relaciona ao cliente: o selo circular real da marca (coroa + diamante + seringa em gradiente verde-esmeralda/dourado-rosé) vira o centro visual da abertura, sobre fundo claro — mesma lógica do Royal Clinic (fotografia real + selo + texto simples), mas em paleta clara/quente em vez de neutra/fria, coerente com "brilho natural".
- Abertura e hierarquia: título curto (ex.: variação da tagline real "Brilhe por você") ao lado ou atrás do selo ampliado com leve brilho (glow) nas cores do próprio gradiente da logo; nav só com texto (Facial · Corporal · Capilar · Contato), sem botões, como no Royal Clinic.
- Tipografia, cores e imagens: fundo branco/creme, verde-esmeralda e dourado-rosé como cor de destaque (não como fundo); tipografia serifada delicada para títulos (eco do anel de texto do selo) + sans para corpo; imagens reais da clínica quando chegarem (pendência), placeholder honesto até lá.
- Ritmo das seções, celular e movimento do motor: seções por tipo de tratamento em faixas alternadas (não grade de cartões iguais), botão de WhatsApp flutuante (padrão confirmado em Frame SB e já usado em projeto anterior), `data-fx-reveal` discreto, sem paralaxe manual.

### Direção B — "Brilho em movimento"
- Conceito e por que se relaciona ao cliente: herói assimétrico inspirado no princípio do template Spavelle (título de um lado, texto de apoio + etiqueta do tratamento em destaque do outro), para variar a composição centralizada da Direção A e dar mais peso a textos reais de procedimento quando confirmados.
- Abertura e hierarquia: título grande à esquerda, bloco curto de apoio + pílula nomeando o diferencial (ex. "Kit Home Care" ou o tratamento mais pedido, a confirmar com a cliente) à direita, sem foto de procedimento ainda disponível — usar o selo/gradiente da marca como plano de fundo sutil em vez de foto de banco.
- Tipografia, cores e imagens: mesma paleta real da marca, mas com o dourado-rosé mais presente (não só acento); fundo com halo desfocado nas duas cores do gradiente da logo atrás dos títulos de seção — assinatura própria, diferente da linha dourada do canopustour e do selo girado do hospital-day-mais-vida-v2.
- Ritmo das seções, celular e movimento do motor: serviços organizados em faixas horizontais roláveis por categoria (facial/corporal/capilar/injetáveis quando liberado/Kit Home Care), sem grade quadrada repetida; no celular, cada faixa vira pilha vertical; halo de gradiente anima sutilmente com `prefers-reduced-motion` respeitado (se reduzido, halo fica estático).

## Escolha e originalidade
- Direção escolhida e motivo: recomendo a **Direção A ("Selo e luz")** como base, incorporando o herói assimétrico da Direção B apenas se/quando houver foto real de procedimento ou texto de destaque suficiente para preencher os dois lados — decisão a confirmar com o usuário, não é definitiva. A Direção A é mais segura agora porque depende menos de materiais que ainda são pendência (fotos reais, conteúdo do Canva/Heyzine).
- Alternativas descartadas e motivo: não proponho uma terceira direção no estilo "escuro/atmosférico" da Annatwelve — o princípio de restrição de chrome é bom, mas o tom sombrio contradiz a identidade confirmada (fundo branco, "brilho natural", nicho de saúde que pede clareza, não mistério).
- Transformação das referências em proposta própria: nenhuma composição foi copiada; o que se aproveita são princípios (fotografia real como herói, nav só-texto, WhatsApp flutuante, selo como assinatura, herói assimétrico com etiqueta) todos remontados sobre a identidade e as cores reais já confirmadas da Jady Emanuela, não as das referências.
- Comparação com `construcoes.md`, em pelo menos três eixos: **paleta** (verde-esmeralda + dourado-rosé sobre branco/creme — nenhum projeto anterior usa branco puro como base; hospital-v2 usa areia/kraft escuro, canopustour usa navy quase preto); **abertura** (selo real da marca ampliado com halo de gradiente, sem foto de paisagem nem traçado de constelação, diferente de todos os anteriores); **assinatura** (halo de gradiente nas cores do próprio selo, diferente da linha/ponto dourado do canopustour e do selo girado do hospital-v2 — mesmo usando "selo" como elemento, o tratamento visual — halo de luz, não rotação — é distinto). Isso cobre 3 dos 5 eixos pedidos; estrutura e pico ainda serão definidos no wireframe.
- Comparação dos projetos anteriores por ordem de seções, composição, proporções e componentes; diferenças e eventuais padrões comuns justificados: nenhum projeto anterior é uma clínica de estética (mais próximos são as duas versões do hospital-day-mais-vida, que são saúde ocupacional/exames, não estética); a única repetição consciente é o botão de WhatsApp flutuante, já usado no hospital-v2 e observado como convenção real do próprio nicho (Frame SB também usa), não cópia de composição.
- Componentes escolhidos, biblioteca, finalidade e alternativas descartadas: a decidir em `DESIGN-SYSTEM.md` (Flowbite vs daisyUI) depois de fechar a direção com o usuário; não presumir agora.
- Materiais ou informações ainda necessários: fotos reais da clínica/procedimentos (pendência do BRIEF), confirmação do profissional responsável pelos injetáveis antes de construir essa seção, conteúdo do Canva/Heyzine se for usado, endereço/bairro para contexto local.

## Refinamentos sobre a Direção A (2026-11-08)

A pedido do usuário, revisitei `inspiracoes/beleza-portfolio-referencia/camila-ingridy-1200.webp`
(salão "Camila Ingridy") pra ver o que valia aproveitar como princípio, sem copiar composição/
cor/texto/foto — e sem o padrão de grade de 6 cartões iguais, que o motor já proíbe. Quatro
princípios aplicados (detalhes e tokens em `DESIGN-SYSTEM.md`): marca-d'água do selo/halo
estendida pra página inteira, ícone de diamante próprio (proporção da logo real) como marcador
recorrente de título, um divisor em curva só na transição hero → Facial (não repetido em excesso),
e rodapé convertido em cartão flutuante arredondado em vez de faixa reta. Revisão visual real
confirmou que a Direção A continua coerente depois dessas mudanças — são reforços da mesma
assinatura, não uma direção nova.

## Revisão pós-feedback do cliente (2026-11-07)

Feedback direto do usuário, visualizando a página já com os refinamentos acima: "não gostei do
hero, imagem/logo muito grande. Também sinto que design system precisa ser refeito, use uma
biblioteca de imagens grátis, mude todo o layout e componentes do hero até o footer".

O selo de 512px/60vw da Direção A original (item acima, "Abertura e hierarquia") dominava a dobra
inteira — na prática, maior do que o pretendido na direção escolhida. Em vez de abandonar a
Direção A, corrigi a execução dela: o selo deixa de ser o elemento dominante e vira um distintivo
pequeno (56px) sobre uma foto de banco gratuito, que passa a ocupar o papel visual que o selo
ampliado tinha. Isso mantém a assinatura "selo e luz" (o selo continua lá, com halo de cor da
marca por trás da foto), só muda a escala e o que preenche o painel principal.

- **Fotos escolhidas:** banco gratuito Unsplash (licença padrão, uso comercial livre), nunca
  Unsplash+ (pago). Critério novo, registrado nesta revisão: só foto genérica de ação (mãos em
  tratamento), nunca foto de interior/fachada real de outra clínica (seria enganoso apresentar
  como se fosse o espaço da Jady) nem foto que exponha marca concorrente legível. Processo de
  busca e descartes em `src/assets/img/banco/CREDITOS-FOTOS.md`.
- **Hero:** ver detalhe técnico em `DESIGN-SYSTEM.md`, seção "Revisão pós-feedback do cliente".
- **Componentes hero → footer:** `FaixaTratamento` ganhou suporte a foto opcional (usada em
  Corporal); Contato/rodapé revisado e mantido como está, já alinhado aos mesmos tokens do novo
  hero (cartão arredondado, marca-d'água, paleta) da revisão anterior — não havia nada a
  destoar da nova direção ali.
- **Direção:** continua Direção A ("Selo e luz"), não uma direção nova — o próprio usuário não
  pediu uma identidade diferente, só rejeitou a escala do selo e pediu fotos reais de banco em
  vez de depender só do selo/halo como imagem.

## Wireframe e revisão da primeira dobra
- Wireframe desktop e celular: `WIREFRAME.md` — preenchido, Direção A aplicada.
- Resultado observado no navegador em desktop: selo real ampliado com halo emerald/dourado-rosé, nav só-texto, título serifado com gradiente de marca, CTA de WhatsApp visível sem rolar; abertura ocupa a altura inicial da tela (ajustado depois de uma primeira observação com espaço vazio excessivo). Screenshot real via Playwright (container Docker auxiliar), não só leitura de código.
- Resultado observado no navegador em celular: texto empilha sobre o CTA e o selo vem por último; quebra de linha da assinatura corrigida (quebrava "Belo" de "Horizonte", agora quebra em "em" / "Belo Horizonte"). Também observado com screenshot real (390×844).
- Ajustes antes de completar a página: halo do selo estava fraco, aumentado; altura da abertura sem definição, corrigida com `min-height` relativo à viewport. Ambos aplicados e reconferidos por screenshot.
- Revisão independente da primeira dobra por outro agente, quando disponível, e ajustes: **feita** (agente separado, página completa já construída). Achado real: `.heroi__assinatura` usava `--cor-rose` com contraste ≈3,3:1 sobre o fundo — abaixo do mínimo AA (4,5:1) para texto pequeno. Corrigido com um novo token `--cor-rose-texto` (≈5,2:1), aplicado só nesse rótulo; o uso de `--cor-rose` no título grande continua correto (texto ≥36px só precisa de 3:1). Revisão também corrigiu uma suposição de método de QA equivocada (ver `WIREFRAME.md`): captura `fullPage` produz artefatos de composição nesta máquina sem GPU mesmo com `reducedMotion`, então a confirmação real usou rolagem programática — ordem, conteúdo e comportamento de todas as seções (desktop, celular, reduced-motion) foram confirmados corretos.
- Restante da página (Facial, Corporal, Capilar, Kit Home Care, Contato): construído e revisado com screenshots reais (desktop, celular, reduced-motion) — detalhes em `WIREFRAME.md`, seção "Revisão da página inteira". Ritmo alternado confirmado, sem grade de cartões repetida; rodapé com WhatsApp/Instagram/Linktree reais, sem endereço/horário (pendência do cliente). Injetáveis/Botox e depoimentos continuam fora da página.
- Design system documentado em `DESIGN-SYSTEM.md` e tokens aplicados: **feito** — cores (com papéis e conferência de contraste), tipografia, espaçamento, grid, bordas, componentes, foco/acessibilidade e movimento reduzido documentados a partir dos valores reais já implementados no código.

## Redesenho de 2026-11-09: "Arco esmeralda"

> Atualização (mesmo dia): o arco em todas as fotos ficou com "cara de IA" para o usuário. Virou a
> lapidação esmeralda (cantos chanfrados, cortes diferentes por uso, engaste rosé), ligada ao
> diamante da logo e ao nome da cor principal.

Pedido do usuário: layout anterior reprovado, faltavam imagens (banco gratuito), manter só a paleta.
Fontes consultadas com navegador real (Playwright), capturas em `verificacao/jady-redesign/pesquisa/`:

| Fonte | Exemplo aberto | O que foi visto | Princípio aproveitado | Descartado |
|---|---|---|---|---|
| supahero.io | https://supahero.io/hero/casa-lunara | Foto ocupando a dobra inteira, marca centralizada no alto, título serifado grande sobre a foto | Foto como palco e tipografia serifada em escala como protagonista | Grafite, arcos arquitetônicos da foto, tom de moda |
| navbar.gallery | https://www.navbar.gallery/navbar/aveon | Menu em painel claro com links grandes em lista e bloco de contato separado, ao lado de foto | Menu do celular com links grandes + contato no mesmo painel | Painel lateral em tela cheia (pesado para uma página curta) |
| supahero.io (página inicial) | https://supahero.io/ | Grade de heróis: Treize Grammes (título serifado em bloco sobre escuro), Wope, Zed | Contraste de uma única faixa escura no meio de página clara | Estética de SaaS (prints de painel) |

Escolha: abertura em foto inteira com véu floresta, uma cena presa como pico, uma faixa escura e
arco como forma única. Comparação com `construcoes.md`: difere de todos os projetos anteriores em
abertura (foto inteira com título sobreposto), pico (cena presa com troca de foto por etapa),
assinatura (frase com fotos em cápsula), paleta (esmeralda/rosé da logo) e estrutura.
