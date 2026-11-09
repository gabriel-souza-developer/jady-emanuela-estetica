import logo from "../assets/img/logo-jady-emanuela.png";
import fotoSorriso from "../assets/img/banco/sorriso.jpg";
import fotoRolo from "../assets/img/banco/rolo-jade.jpg";
import fotoGuaSha from "../assets/img/banco/gua-sha.jpg";
import { IconeWhatsapp } from "./icone-whatsapp";
import { INSTAGRAM, INSTAGRAM_ARROBA, LINKTREE, whatsapp } from "../dados";
import "./contato.css";

export function Contato() {
  return (
    <>
      <section id="contato" className="contato" aria-labelledby="contato-titulo">
        <div className="contato__grade">
          <div className="contato__colagem" aria-hidden="true">
            <img className="contato__foto contato__foto--a gema" src={fotoSorriso} alt="" loading="lazy" data-fx="subir" />
            <img className="contato__foto contato__foto--b gema" src={fotoGuaSha} alt="" loading="lazy" data-fx="subir" data-fx-atraso="120" />
            <img className="contato__foto contato__foto--c" src={fotoRolo} alt="" loading="lazy" data-fx="subir" data-fx-atraso="240" />
          </div>

          <div className="contato__texto">
            <p className="rotulo contato__rotulo" data-fx="surgir">Agende</p>
            <h2 id="contato-titulo" className="contato__titulo" data-fx="subir">
              Vamos marcar o seu <span>momento?</span>
            </h2>
            <p className="contato__descricao" data-fx="surgir" data-fx-atraso="100">
              Mande uma mensagem, conte o que você quer cuidar e combinamos o melhor horário.
            </p>
            <div className="contato__acoes" data-fx="surgir" data-fx-atraso="180">
              <a className="botao botao--primario" href={whatsapp("Olá! Quero agendar um horário.")} target="_blank" rel="noopener">
                <IconeWhatsapp />
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="rodape">
        <div className="rodape__grade">
          <div className="rodape__marca">
            <img src={logo} alt="" width={64} height={64} />
            <p>
              Jady Emanuela
              <small>Estética avançada · Belo Horizonte</small>
            </p>
          </div>
          <p className="rodape__frase">Brilhe por você!</p>
          <nav className="rodape__links" aria-label="Redes e contato">
            <a href={whatsapp()} target="_blank" rel="noopener">WhatsApp</a>
            <a href={INSTAGRAM} target="_blank" rel="noopener">Instagram {INSTAGRAM_ARROBA}</a>
            <a href={LINKTREE} target="_blank" rel="noopener">Linktree</a>
          </nav>
        </div>
        <div className="rodape__base">
          <p>Jady Emanuela Estética Avançada</p>
          <a href="aviso-privacidade.html">Aviso de privacidade</a>
        </div>
      </footer>
    </>
  );
}
