export const TELEFONE = "5531971311512";
export const TELEFONE_LEGIVEL = "31 97131-1512";
export const INSTAGRAM = "https://www.instagram.com/clinicajadyemanuela";
export const INSTAGRAM_ARROBA = "@clinicajadyemanuela";
export const LINKTREE = "https://linktr.ee/jadyemanuelaestetica";

export function whatsapp(mensagem?: string) {
  const base = "https://wa.me/" + TELEFONE;
  return mensagem ? base + "?text=" + encodeURIComponent(mensagem) : base;
}
