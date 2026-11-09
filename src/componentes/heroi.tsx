import logo from "../assets/img/logo-jady-emanuela.png";
import fotoHeroi from "../assets/img/banco/heroi.jpg";
import { IconeWhatsapp } from "./icone-whatsapp";
import { INSTAGRAM, INSTAGRAM_ARROBA, whatsapp } from "../dados";
import "./heroi.css";

const LINKS = [
  { href: "#tratamentos", texto: "Tratamentos" },
  { href: "#especialidade", texto: "Clareamento corporal" },
  { href: "#contato", texto: "Contato" },
];

export function Heroi() {
  return (
    <section className="heroi" id="inicio" aria-label="Abertura">
      <img
        className="heroi__foto"
        src={fotoHeroi}
        alt="Mulher de olhos fechados recebendo massagem facial"
        fetchPriority="high"
      />
      <div className="heroi__veu" aria-hidden="true" />

      <header className="cabecalho">
        <a className="cabecalho__marca" href="#inicio">
          <img src={logo} alt="" width={44} height={44} />
          <span>
            Jady Emanuela
            <small>Estética avançada</small>
          </span>
        </a>

        <nav className="cabecalho__nav" aria-label="Principal">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.texto}</a>
          ))}
        </nav>

        <a className="botao botao--claro cabecalho__cta" href={whatsapp("Olá! Quero agendar um horário.")} target="_blank" rel="noopener">
          Agendar
        </a>

        <details className="menu">
          <summary aria-label="Abrir menu">
            <span className="menu__barras" aria-hidden="true" />
            Menu
          </summary>
          <div className="menu__painel">
            <nav aria-label="Menu do celular" onClick={(e) => (e.currentTarget.closest("details") as HTMLDetailsElement | null)?.removeAttribute("open")}>
              {LINKS.map((l) => (
                <a key={l.href} href={l.href}>{l.texto}</a>
              ))}
            </nav>
            <div className="menu__contato">
              <p className="rotulo">Fale com a gente</p>
              <a className="botao botao--primario" href={whatsapp("Olá! Quero agendar um horário.")} target="_blank" rel="noopener">
                <IconeWhatsapp />
                WhatsApp
              </a>
              <a className="menu__insta" href={INSTAGRAM} target="_blank" rel="noopener">{INSTAGRAM_ARROBA}</a>
            </div>
          </div>
        </details>
      </header>

      <div className="heroi__conteudo">
        <p className="rotulo heroi__rotulo" data-fx="surgir">Estética avançada em Belo&nbsp;Horizonte</p>
        <h1 className="heroi__titulo" data-fx="subir" data-fx-atraso="80">
          Brilhe por você.
          <span>Do seu jeito natural.</span>
        </h1>
        <div className="heroi__base" data-fx="surgir" data-fx-atraso="220">
          <p className="heroi__texto">
            Cuidados faciais, corporais e capilares para realçar a beleza que já é sua.
          </p>
          <div className="heroi__acoes">
            <a className="botao botao--claro" href={whatsapp("Olá! Quero agendar um horário.")} target="_blank" rel="noopener">
              <IconeWhatsapp />
              Agendar pelo WhatsApp
            </a>
            <a className="botao botao--fio heroi__secundario" href="#tratamentos">Ver tratamentos</a>
          </div>
        </div>
      </div>
    </section>
  );
}
