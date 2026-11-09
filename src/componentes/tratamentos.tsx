import { useRef, useState, type KeyboardEvent } from "react";
import fotoFacial from "../assets/img/banco/facial-mascara.jpg";
import fotoCorporal from "../assets/img/banco/corporal.jpg";
import fotoMassagem from "../assets/img/banco/massagem.jpg";
import fotoCapilar from "../assets/img/banco/capilar.jpg";
import fotoHomeCare from "../assets/img/banco/home-care.jpg";
import { whatsapp } from "../dados";
import "./tratamentos.css";

const TRATAMENTOS = [
  {
    id: "facial",
    nome: "Facial",
    chamada: "Cuidado para a pele do rosto.",
    texto: "Conte para a gente o que você quer cuidar na sua pele e indicamos o tratamento facial mais adequado para o seu momento.",
    foto: fotoFacial,
    alt: "Mulher deitada com máscara facial",
    posicao: "40% 50%",
  },
  {
    id: "corporal",
    nome: "Corporal",
    chamada: "Nossa especialidade.",
    texto: "Tratamentos corporais com soluções personalizadas, com destaque para o clareamento corporal, que é o centro do nosso trabalho.",
    foto: fotoCorporal,
    alt: "Mãos de profissional em massagem nas costas",
    posicao: "50% 40%",
  },
  {
    id: "massagens",
    nome: "Massagens",
    chamada: "Um tempo só seu.",
    texto: "Massagens para desacelerar, aliviar o cansaço do dia a dia e cuidar do corpo com calma.",
    foto: fotoMassagem,
    alt: "Mulher relaxando em maca com velas ao fundo",
    posicao: "62% 50%",
  },
  {
    id: "capilar",
    nome: "Capilar e Tricologia",
    chamada: "Couro cabeludo e fios.",
    texto: "A tricologia olha para a saúde do couro cabeludo e dos fios. Fale com a gente para entender o que o seu cabelo pede.",
    foto: fotoCapilar,
    alt: "Mulher sorrindo prendendo o cabelo em coque",
    posicao: "50% 72%",
  },
  {
    id: "home-care",
    nome: "Kit Home Care",
    chamada: "O cuidado continua em casa.",
    texto: "Nossa linha Kit Home Care ajuda você a manter a rotina entre uma sessão e outra. Peça o catálogo pelo WhatsApp.",
    foto: fotoHomeCare,
    alt: "Frascos brancos sem rótulo entre folhas verdes",
    posicao: "45% 60%",
  },
];

type Tratamento = (typeof TRATAMENTOS)[number];

const num = (i: number) => String(i + 1).padStart(2, "0");
const rotuloBotao = (t: Tratamento) =>
  "Perguntar sobre " + (t.id === "home-care" ? "o kit" : t.nome.split(" ")[0].toLowerCase());
const mensagem = (t: Tratamento) => whatsapp("Olá! Quero saber mais sobre " + t.nome + ".");

function Seta() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Tratamentos() {
  const [ativo, setAtivo] = useState(0);
  const abas = useRef<(HTMLButtonElement | null)[]>([]);
  const t = TRATAMENTOS[ativo];

  function teclado(e: KeyboardEvent<HTMLDivElement>) {
    const total = TRATAMENTOS.length;
    const mapa: Record<string, number> = {
      ArrowDown: (ativo + 1) % total,
      ArrowRight: (ativo + 1) % total,
      ArrowUp: (ativo - 1 + total) % total,
      ArrowLeft: (ativo - 1 + total) % total,
      Home: 0,
      End: total - 1,
    };
    if (!(e.key in mapa)) return;
    e.preventDefault();
    setAtivo(mapa[e.key]);
    abas.current[mapa[e.key]]?.focus();
  }

  return (
    <section id="tratamentos" className="tratamentos" aria-labelledby="tratamentos-titulo">
      <div className="tratamentos__cabeca">
        <div>
          <p className="rotulo tratamentos__rotulo" data-fx="surgir">Tratamentos</p>
          <h2 id="tratamentos-titulo" className="tratamentos__titulo" data-fx="subir">O que cuidamos</h2>
        </div>
        <p className="tratamentos__intro" data-fx="surgir" data-fx-atraso="100">
          Do rosto aos fios, cada cuidado começa por uma conversa sobre o que você procura.
        </p>
      </div>

      {/* Desktop com JS: abas */}
      <div className="trat-abas">
        <div className="trat-abas__lista" role="tablist" aria-label="Tratamentos" aria-orientation="vertical" onKeyDown={teclado}>
          {TRATAMENTOS.map((item, i) => (
            <button
              key={item.id}
              ref={(el) => {
                abas.current[i] = el;
              }}
              type="button"
              role="tab"
              id={"aba-" + item.id}
              aria-selected={i === ativo}
              aria-controls="painel-tratamento"
              tabIndex={i === ativo ? 0 : -1}
              className="trat-abas__aba"
              onClick={() => setAtivo(i)}
            >
              <span className="trat-abas__num">{num(i)}</span>
              <span className="trat-abas__nome">{item.nome}</span>
              <Seta />
            </button>
          ))}
        </div>

        <div className="trat-abas__painel" role="tabpanel" id="painel-tratamento" aria-labelledby={"aba-" + t.id} key={t.id}>
          <div className="trat-abas__moldura gema">
            <img src={t.foto} alt={t.alt} style={{ objectPosition: t.posicao }} />
          </div>
          <div className="trat-abas__texto">
            <p className="trat-abas__contagem">
              {num(ativo)} <span>/ {num(TRATAMENTOS.length - 1)}</span>
            </p>
            <h3 className="trat-abas__titulo">{t.nome}</h3>
            <p className="trat-abas__chamada">{t.chamada}</p>
            <p className="trat-abas__descricao">{t.texto}</p>
            <a className="botao botao--primario" href={mensagem(t)} target="_blank" rel="noopener">
              {rotuloBotao(t)}
            </a>
          </div>
        </div>
      </div>

      {/* Celular, ou qualquer tela sem JS: lista corrida */}
      <ol className="trat-lista">
        {TRATAMENTOS.map((item, i) => (
          <li key={item.id} id={item.id} className="trat-lista__item">
            <div className="trat-lista__moldura gema">
              <img src={item.foto} alt={item.alt} loading="lazy" style={{ objectPosition: item.posicao }} />
            </div>
            <div className="trat-lista__topo">
              <span className="trat-lista__num">{num(i)}</span>
              <h3 className="trat-lista__nome">{item.nome}</h3>
              <p className="trat-lista__chamada">{item.chamada}</p>
            </div>
            <p className="trat-lista__descricao">{item.texto}</p>
            <a className="trat-lista__link" href={mensagem(item)} target="_blank" rel="noopener">
              {rotuloBotao(item)}
              <Seta />
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
