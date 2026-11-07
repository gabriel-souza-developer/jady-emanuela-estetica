import { IconeWhatsapp } from "./icone-whatsapp";
import "./contato.css";

const WHATSAPP = "https://wa.me/5531971311512";
const INSTAGRAM = "https://www.instagram.com/clinicajadyemanuela";
const LINKTREE = "https://linktr.ee/jadyemanuelaestetica";

/* Endereço e horário de atendimento ficam de fora: são pendência do BRIEF.md
 * (endereço não localizado via busca, horário não informado) e mostrar "a
 * confirmar" no rodapé pareceria um dado real incompleto. Melhor omitir até
 * a cliente confirmar do que fingir uma informação parcial. */
export function Contato() {
  return (
    <section id="contato" className="contato" aria-labelledby="contato-titulo">
      <div className="contato__caixa" data-fx="surgir">
        <h2 id="contato-titulo" className="contato__titulo">Fale com a gente</h2>
        <p className="contato__texto">
          Tire suas dúvidas e agende sua avaliação pelo WhatsApp.
        </p>
        <a className="botao-whatsapp" href={WHATSAPP} target="_blank" rel="noopener">
          <IconeWhatsapp className="botao-whatsapp__icone" />
          Agendar pelo WhatsApp
        </a>
        <div className="contato__redes">
          <a href={INSTAGRAM} target="_blank" rel="noopener">Instagram @clinicajadyemanuela</a>
          <a href={LINKTREE} target="_blank" rel="noopener">Linktree</a>
        </div>
      </div>
      <p className="contato__rodape">Jady Emanuela Estética Avançada</p>
    </section>
  );
}
