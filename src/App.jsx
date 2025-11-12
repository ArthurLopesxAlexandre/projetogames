
import {div,h1} from 'react'
import './App.css'


export default function App() {
  return (
    <>
     <div className='descricao'>
      <h3>Descubra os lançamentos mais esperados, os jogos que estão dominando o momento e análises exclusivas. Encontre sua próxima aventura no TZGAMES!</h3>
    </div>
      <nav className="navbar">
        <div className="logo-container">
         
          <h1 className="titulo">TZGAMES</h1>
          
        </div>
       

        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Página 2</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>

      <div className="cards-container">
      <div className="card">
      <img src="./assets/gamepad-svgrepo-com.svg" alt="Jogos" className="card-icon" />
        <h3>Seu jogo perfeito está aqui</h3>
        <p>
        Conheça os lançamentos mais esperados e os títulos que estão bombando no momento. 
        Dicas, análises e recomendações para todos os estilos de jogador.
        </p>
      </div>

      <div className="card">
        <img src="./assets/magnifier-svgrepo-com.svg" alt="Notícias" className="card-icon" />
        <h3>Principais notícias sobre jogos</h3>
        <p>
        Fique por dentro das principais novidades do mundo gamer. 
        Descubra tudo sobre eventos, campeonatos e anúncios que estão movimentando o universo dos games.
        </p>
      </div>

      <div className="card">
        <img src="./assets/plan-list-svgrepo-com.svg" alt="Atualizaçoes" className="card-icon" />
        <h3>Atualizações dos seus jogos estão aqui</h3>
        <p>
        Saiba tudo sobre os novos patches, expansões e melhorias dos seus jogos favoritos. 
        Atualize-se e descubra o que mudou nas últimas versões.
        </p>
      </div>
    </div>
    
   
    </>
  );
}