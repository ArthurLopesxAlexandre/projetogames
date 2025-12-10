import { useEffect, useState } from "react";
import './Home.css';
import Nav from '../componentes/nav'
import wp1811277 from '../img/wp1811277.jpg';
import img2 from '../img/913243.jpg';
import img3 from '../img/call-of-duty-warzone-4k-kzetz7h7t75073ye.jpg';
import img4 from '../img/gta-online-pdz1sc5c5voimbh0.jpg';

export default function Home() {
  const imagens = [
    wp1811277,
    img2,
    img3,
    img4

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

      <Nav/>
     

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