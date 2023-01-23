import "nes.css/css/nes.min.css";
import "./scss/style.scss";

export default function App() {
  return (
    <main className="app">
      <section className="icon-list">
        <i className="nes-ash"></i>
        <i className="nes-pokeball"></i>
        <i className="nes-charmander"></i>
      </section>
      <div className="nes-container with-title">
        <p className="title">Aware!</p>
        <p>A wild pokemon appeared!</p>
      </div>
    </main>
  );
}
