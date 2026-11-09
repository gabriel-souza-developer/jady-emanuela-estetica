import fotoCorpo from "../assets/img/banco/corporal-costas.jpg";
import { IconeWhatsapp } from "./icone-whatsapp";
import { whatsapp } from "../dados";
import "./especialidade.css";

export function Especialidade() {
  return (
    <section id="especialidade" className="especialidade" aria-labelledby="especialidade-titulo">
      <div className="especialidade__grade">
        <div className="especialidade__texto">
          <p className="rotulo especialidade__rotulo" data-fx="surgir">Nossa especialidade</p>
          <h2 id="especialidade-titulo" className="especialidade__titulo" data-fx="subir">
            Clareamento <span>corporal.</span>
          </h2>
          <p className="especialidade__descricao" data-fx="surgir" data-fx-atraso="120">
            Somos uma clínica especializada em clareamento corporal, com soluções personalizadas para
            cada pessoa. Antes de começar, tire todas as suas dúvidas com a gente pelo WhatsApp.
          </p>
          <a
            className="botao botao--claro"
            href={whatsapp("Olá! Quero saber mais sobre clareamento corporal.")}
            target="_blank"
            rel="noopener"
            data-fx="surgir"
            data-fx-atraso="200"
          >
            <IconeWhatsapp />
            Tirar dúvidas
          </a>
        </div>

        <figure className="especialidade__figura" data-fx="crescer">
          <div className="especialidade__arco engaste">
            <img className="gema" src={fotoCorpo} alt="Mãos de profissional em tratamento nas costas" loading="lazy" />
          </div>
        </figure>
      </div>
    </section>
  );
}
