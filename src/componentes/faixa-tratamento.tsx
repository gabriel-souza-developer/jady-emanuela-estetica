import "./faixa-tratamento.css";

type FaixaTratamentoProps = {
  id: string;
  titulo: string;
  reverso?: boolean;
  acento?: "esmeralda" | "rose";
};

/* Faixa reutilizável para Facial, Corporal, Capilar/Tricologia e Kit Home
 * Care. Alterna o lado do painel de luz a cada seção (reverso) e o acento de
 * cor, pra não repetir a mesma composição em cada faixa (sem grade de
 * cartões iguais). O texto de cada tratamento (procedimentos, benefícios)
 * ainda é pendência do cliente (BRIEF.md seção 2, conteúdo do folder Canva e
 * do catálogo Heyzine não pôde ser lido automaticamente) — por isso cada
 * faixa mostra só o nome real da categoria e uma nota honesta de "em breve",
 * nunca uma descrição de procedimento inventada. */
export function FaixaTratamento({ id, titulo, reverso, acento = "esmeralda" }: FaixaTratamentoProps) {
  return (
    <section
      id={id}
      className={"faixa" + (reverso ? " faixa--reversa" : "") + " faixa--" + acento}
      aria-labelledby={id + "-titulo"}
    >
      <div className="faixa__texto" data-fx={reverso ? "direita" : "esquerda"}>
        <h2 id={id + "-titulo"} className="faixa__titulo">{titulo}</h2>
        <p className="faixa__nota">Conteúdo detalhado desta categoria chega em breve.</p>
      </div>
      <div className="faixa__painel" data-fx="crescer" aria-hidden="true">
        <div className="faixa__halo" />
      </div>
    </section>
  );
}
