import logo from "../assets/img/logo-jady-emanuela.png";
import "./hero.css";

const WHATSAPP = "https://wa.me/5531971311512";

/* Primeira dobra — Direção A "Selo e luz" (DIRECAO-VISUAL.md). Nav só-texto
 * (sem botões), selo real da marca ampliado com halo em CSS, tipografia
 * serifada para o título. Os links da nav apontam para seções que ainda
 * não existem (próxima etapa de construção) — âncoras reservadas. */
export function Heroi() {
  return (
    <>
      <header className="cabecalho">
        <a className="cabecalho__marca" href="#conteudo">
          <img className="cabecalho__selo" src={logo} alt="" aria-hidden="true" width={40} height={40} />
          Jady Emanuela
        </a>
        <nav aria-label="Principal">
          <ul className="cabecalho__nav">
            <li><a href="#facial">Facial</a></li>
            <li><a href="#corporal">Corporal</a></li>
            <li><a href="#capilar">Capilar</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <section className="heroi" id="conteudo" aria-label="Abertura">
        <div className="heroi__texto">
          <p className="heroi__assinatura" data-fx="surgir">Estética avançada em Belo&nbsp;Horizonte</p>
          <h1 className="heroi__titulo" data-fx="subir">
            Brilhe por você, do seu <em>jeito natural</em>.
          </h1>
          <p className="heroi__subtitulo" data-fx="surgir" data-fx-atraso="100">
            Nosso propósito é realçar sua beleza natural: tratamentos faciais, corporais e
            capilares pensados para você em cada etapa.
          </p>
          <div className="heroi__acoes" data-fx="surgir" data-fx-atraso="180">
            <a className="botao-whatsapp" href={WHATSAPP} target="_blank" rel="noopener">
              Agendar pelo WhatsApp
            </a>
            <span className="heroi__nota">Atendimento em Belo Horizonte</span>
          </div>
        </div>

        <div className="heroi__selo-area" data-fx="crescer" data-fx-atraso="80">
          <div className="heroi__halo" aria-hidden="true" />
          <img className="heroi__selo" src={logo} alt="Selo da marca Jady Emanuela Estética Avançada" width={512} height={512} />
        </div>

        <div className="heroi__rolar" aria-hidden="true">
          <span>role</span>
          <span className="heroi__rolar-linha" />
        </div>
      </section>
    </>
  );
}
