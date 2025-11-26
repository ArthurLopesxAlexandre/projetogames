import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const imagens = [
    "/assets/img/wp1811277.jpg",
    "/assets/img/913243.jpg",
    "/assets/img/call-of-duty-warzone-4k-kzetz7h7t75073ye.jpg",
    "/assets/img/gta-online-pdz1sc5c5voimbh0.jpg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <div
        className="carrossel-fundo"
        style={{ backgroundImage: `url(${imagens[index]})` }}
      >
        <div className="overlay"></div>
      </div>

      <nav className="navbar">
        <div className="logo-area">
          <img
            src="/assets/img/Sem título.jpg"
            alt="Logo TZ"
            className="logo-img"
          />
          <h1 className="logo-text">TZGAMES</h1>
        </div>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Página 2</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>

      <div className="descricao">
        <h3>
          DESCUBRA OS LANÇAMENTOS MAIS ESPERADOS, OS JOGOS QUE ESTÃO
          DOMINANDO O MOMENTO E ANÁLISES EXCLUSIVAS. ENCONTRE SUA PRÓXIMA
          AVENTURA NO TZGAMES!
        </h3>
      </div>
    </>
  );
}