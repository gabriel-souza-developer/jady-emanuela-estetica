import fotoSorriso from "../assets/img/banco/sorriso.jpg";
import fotoRolo from "../assets/img/banco/rolo-jade.jpg";
import "./manifesto.css";

export function Manifesto() {
  return (
    <section className="manifesto" aria-labelledby="manifesto-titulo">
      <div className="manifesto__grade">
        <figure className="manifesto__fotos" data-fx="crescer">
          <div className="manifesto__arco engaste">
            <img className="gema" src={fotoSorriso} alt="Mulher sorrindo enquanto aplica creme no rosto" loading="lazy" />
          </div>
          <div className="manifesto__circulo" aria-hidden="true">
            <img src={fotoRolo} alt="" loading="lazy" />
          </div>
        </figure>

        <div className="manifesto__texto">
          <p className="rotulo manifesto__rotulo" data-fx="surgir">Nosso propósito</p>
          <h2 id="manifesto-titulo" className="manifesto__frase" data-fx="subir">
            Realçar a sua <span>beleza natural.</span>
          </h2>
          <p className="manifesto__paragrafo" data-fx="surgir" data-fx-atraso="100">
            Somos uma clínica de estética avançada em Belo Horizonte, especializada em clareamento
            corporal. Trabalhamos com soluções personalizadas para cada pele, cada corpo e cada fio.
          </p>
          <p className="manifesto__assinatura" data-fx="surgir" data-fx-atraso="180">Brilhe por você!</p>
        </div>
      </div>
    </section>
  );
}
