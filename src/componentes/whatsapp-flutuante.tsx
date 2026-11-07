import { IconeWhatsapp } from "./icone-whatsapp";
import "./whatsapp-flutuante.css";

const WHATSAPP = "https://wa.me/5531971311512";

/* Botão de WhatsApp flutuante persistente: convenção real do nicho
 * (observada em Frame SB, DIRECAO-VISUAL.md) e já usada em
 * projetos/hospital-day-mais-vida-v2. Sempre presente, inclusive sem JS; a
 * entrada é só por CSS (animation), nunca por estado React. */
export function WhatsappFlutuante() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener"
      aria-label="Falar pelo WhatsApp, número 31 97131-1512"
      className="zap-flutuante"
    >
      <IconeWhatsapp className="zap-flutuante__icone" />
      <span className="zap-flutuante__texto">Falar pelo WhatsApp</span>
    </a>
  );
}
