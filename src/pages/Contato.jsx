import React, { useState } from 'react';
import "./Contato.css";


export default function Contato(){
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados do formulário
        alert('Mensagem enviada!');
      };
    
      return (
        <div className="contato">
          <header>
            <nav>
              <ul>
                <li><a href="/">Início</a></li>
                <li><a href="/jogos">Jogos</a></li>
                <li><a href="/contato">Contato</a></li>
              </ul>
            </nav>
          </header>
    
          <main>
            <section className="contato-info">
              <h1>Contato</h1>
    
              <div className="informacoes">
                <h2>Informações de Contato</h2>
                <p><strong>Nome da Empresa:</strong> Jogos Mais Jogados</p>
                <p><strong>E-mail:</strong> contato@jogosmaisjogados.com.br</p>
                <p><strong>Telefone:</strong> +55 11 1234-5678</p>
                <p><strong>WhatsApp:</strong> +55 11 98765-4321</p>
                <p><strong>Endereço:</strong> Rua Exemplo, 123 - São Paulo, SP</p>
                <p><strong>Horário de Atendimento:</strong> Seg - Sex: 9:00 - 18:00</p>
    
                <h3>Redes Sociais</h3>
                <ul>
                  <li><a href="https://facebook.com/jogosmaisjogados" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                  <li><a href="https://instagram.com/jogosmaisjogados" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  <li><a href="https://twitter.com/jogosmaisjogados" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
              </div>
    
              <div className="formulario">
                <h2>Envie uma Mensagem</h2>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="nome">Nome:</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
    
                  <label htmlFor="email">E-mail:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
    
                  <label htmlFor="mensagem">Mensagem:</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
    
                  <button type="submit">Enviar</button>
                </form>
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
        </div>
      );
    }
