import React from 'react';
import "./Jogos.css";
import img2 from '../img/913243.jpg';
import img3 from '../img/call-of-duty-warzone-4k-kzetz7h7t75073ye.jpg';
import img4 from '../img/gta-online-pdz1sc5c5voimbh0.jpg';
import img5 from '../img/wp1811277.jpg';
import Nav from '../componentes/nav';

export default function Jogos() {
  return (
    <>
      <Nav/>
      <main className="container">
        <header className="header">
          <h1>JOGOS MAIS JOGADOS NO MOMENTO</h1>
        </header>

        <section className="intro">
          <div className="text">
            <p>
              Os títulos que estão bombando agora. Seja no competitivo, na história ou no mundo aberto, esses jogos dominam as telas e as conversas da comunidade gamer.
            </p>
          </div>
        </section>

        <section className="gallery">
          <div className="game-card">
            <img src={img2} alt="Spider-Man"/>
            <p>Spiderman</p>
          </div>
          <div className="game-card">
            <img src={img3} alt="Call of Duty: Warzone"/>
            <p>Call of Duty: Warzone</p>
          </div>
          <div className="game-card">
            <img src={img4} alt="GTA V"/>
            <p>Grand Theft Auto V</p>
          </div>
          <div className="game-card">
            <img src={img5} alt="The Last of Us"/>
            <p>The Last of Us</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <p>&copy; 2025 Jogos Mais Jogados. Todos os direitos reservados.</p>
          </div>
          <div className="footer-center">
            <ul>
              <li><a href="#">Privacidade</a></li>
              <li><a href="#">Termos de Serviço</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>
          <div className="footer-right">
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
