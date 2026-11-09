# BRIEF: Jady Emanuela Estética Avançada

Criado em 2026-11-07 com `novo-projeto.mjs`. Preencha ANTES de escrever código.
Se o cliente já mandou briefing, extraia daqui as respostas e pergunte só o que faltar.

**Formato técnico: 2 — React + TypeScript + Vite (estático)**, decidido com o usuário em
2026-11-07. Esqueleto copiado de `adaptadores/react-vite/` para esta pasta; scaffold de
Formato 1 (motor/) removido.

## 1. Negócio e público
- O que é: clínica de estética avançada — facial, corporal, tricologia (capilar) e procedimentos injetáveis (Botox). Linha de produtos próprios "Kit Home Care".
- Quem visita a página: pessoas buscando tratamentos estéticos faciais/corporais/capilares em Belo Horizonte, vindas do Instagram/Linktree.
- Cidade/região: Belo Horizonte - MG (inferido do bio do Instagram "📍BH" e DDD 31 do WhatsApp — **pendente confirmar endereço exato**, busca não achou o perfil do Google Meu Negócio)
- Canal de conversão: WhatsApp — 31 97131-1512 (achado no Linktree; **pendente confirmar que é o número atual/correto**)

## 2. Dados reais confirmados (só o que o cliente informou: nunca inventar)
| Dado | Valor | Fonte/data |
|---|---|---|
| Nome oficial | Jady Emanuela Estética Avançada | logo oficial (2026-11-07) |
| Telefone/WhatsApp | 31 97131-1512 | linktr.ee/jadyemanuelaestetica (2026-11-07) — confirmar com cliente |
| Endereço | **não encontrado** | pesquisa Google sem resultado exato — pendente |
| Redes | Instagram @clinicajadyemanuela (11,4 mil seguidores); Linktree linktr.ee/jadyemanuelaestetica | 2026-11-07 |
| Identificação profissional (OAB, CRM, CRO, CRP, COREN, CRBM…) | **não informado** | logo tem ícone de seringa (injetável/Botox) → **pendente crítico**: perguntar quem aplica e qual conselho |
| Avaliações públicas (nota/quantidade/fonte) | não encontrado | Google Meu Negócio não localizado via busca |

Pendentes (NÃO vão para a página: ficam só na lista de pendências da entrega):
- Endereço completo (bairro pelo menos, pra SEO local e rodapé)
- Confirmar WhatsApp é o número certo
- Registro profissional de quem aplica Botox/injetáveis (obrigatório antes de publicar qualquer procedimento injetável)
- E-mail e razão social, se houver
- Domínio (se não houver, `noindex`)
- Avaliações reais do Google (nota/quantidade), se existirem
- Conteúdo do folder "Facial, Corporal e Tricologia" (link Canva não pôde ser lido automaticamente — é renderizado em JS/imagem) e do catálogo "Kit Home Care" (flipbook Heyzine, mesmo problema) — pedir o texto/PDF de origem direto ao cliente se quiser usar esse conteúdo
- Fotos reais da clínica/fachada/equipe (a cliente mencionou foto da fachada com a logo no Google, mas a busca não localizou o perfil — pedir link direto ou as fotos)
- Fotos do Instagram: tentativa de ver a grade de posts por captura de tela (container Playwright, sem login, 2026-11-07) bateu direto numa tela de login do Instagram (`Entrar no Instagram`) — nenhuma foto da clínica ficou visível, nenhum link de post foi encontrado. Instagram exige login até pra ver o perfil público neste tipo de acesso automatizado; não tentamos contornar (sem criar conta, sem usar credenciais). Pedir as fotos direto à cliente (arquivos originais) continua sendo o caminho confiável.

## 3. Conformidade
- Perfil: **nicho sem perfil pronto no catálogo interno — aplica-se o caso "Botox/injetáveis"**, que no Brasil normalmente exige identificação do profissional responsável (biomédico com CRBM, enfermeiro com COREN, ou médico com CRM, dependendo de quem aplica) e segue restrições de publicidade de procedimento estético (sem promessa de resultado, sem comparação agressiva, antes/depois com contexto). **Não construir a seção de Botox/injetáveis sem essa confirmação do cliente.**
- Procedimentos não invasivos (facial, corporal não injetável, tricologia capilar, massagens) têm norma mais leve, mas ainda assim sem promessa de resultado/cura e sem preço como chamariz agressivo.
- Conferir `referencias/conformidade.md` e pesquisar a norma vigente do conselho aplicável antes de publicar a seção de procedimentos injetáveis.

## 4. Identidade
- Marca existente: logo oficial em alta resolução obtida (selo circular, fundo branco, anel de texto verde-esmeralda "JADY EMANUELA" + "ESTÉTICA AVANÇADA", ícone central de coroa + diamante em gradiente verde-esmeralda + seringa em dourado-rosé). Salvo em `src/assets/img/logo-jady-emanuela.png`.
- Cores da marca: verde-esmeralda/teal (ícone e texto do anel) + dourado-rosé/cobre (coroa, "JADY EMANUELA"), fundo branco.
- Tom de voz real (Linktree): "Brilhe por você! Nosso propósito é realçar sua beleza natural." Bio do Instagram: "Clínica especializada em clareamento corporal. Soluções personalizadas com tecnologia e resultado real!" (bio truncada no "mais", pendente ver o resto)
- Serviços confirmados (destaques do Instagram): Botox, Corporal, Facial, Capilar/Tricologia, Massagens, "Ultramed" (nome próprio de tratamento/aparelho, confirmar o que é), "Lumine" (nome próprio, confirmar o que é), Kit Home Care
- Vibe em 3 a 5 palavras: premium, delicado, confiável, "brilho natural"
- Ponto de partida do UI/UX Pro Max: `npm run estilo -- "estética avançada premium feminino delicado" --design-system -f markdown`
- Decisão final (paleta, fontes, linguagem de forma): a definir depois do passo de direção visual
- Pesquisa de direção visual (sites do nicho e referências de design, com evidência observada e princípios aproveitáveis/descartados): ver `DIRECAO-VISUAL.md`. Aprendizado principal: WhatsApp flutuante e navegação só-texto são convenções reais do nicho (Royal Clinic, Frame SB), não invenção; fotografia real do procedimento como herói é o padrão esperado, mas ainda depende de material real da cliente (pendência).

## 5. Jornada em cenas (4 a 7 como referência, ajuste ao conteúdo)
| # | Cena | O visitante VÊ | SENTE | PASSA A ACREDITAR | Energia |
|---|---|---|---|---|---|
| 1 | Abertura | | | | |
| 2 | | | | | |

- O que ele precisa acreditar no final (uma frase):
- Ponto de destaque, se fizer sentido:
- Movimento do motor, se ajudar a leitura:

## 6. Trava anti-repetição
Comparar com `construcoes.md`: diferir em pelo menos 3 de 5 (abertura · pico · assinatura · paleta · estrutura).

## 7. Materiais
- Fotos reais: nenhuma obtida ainda (fachada mencionada pela cliente está no Google, mas a busca automática não achou o perfil — pedir link direto ou fotos)
- Vídeo: nenhum
- Logo: `src/assets/img/logo-jady-emanuela.png` (512×512, baixado do Google em alta resolução a partir do link enviado pela cliente)

## Redesenho de 2026-11-09: pendências novas para confirmar com a cliente

- Textos dos tratamentos foram escritos em termos gerais (sem procedimento, aparelho, preço ou
  promessa). Confirmar se a cliente aprova o tom e mandar a lista real de protocolos.
- Kit Home Care descrito como "nossa linha": confirmar que é linha própria. Pedir o link do
  catálogo (Heyzine) para trocar o "peça pelo WhatsApp" por um link direto.
- Ultramed e Lumine continuam fora até a cliente explicar o que são.
- Fotos são ilustrativas (Burst/Shopify e uma do Unsplash, créditos em
  `src/assets/img/banco/CREDITOS-FOTOS.md`). Trocar por fotos reais da clínica quando chegarem.
- `public/aviso-privacidade.html` ainda tem campos `[PREENCHER]` (controlador e e-mail).
