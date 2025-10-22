import React from "react";
import { Link } from "react-router-dom";

export default function Hero({ streak, score }) {
  return (
    <section id="hero">
      <div className="hero-content container">
        
        {/* Texto do Hero */}
        <div className="hero-text">
          <h2>MEG: A sua plataforma de estudos</h2>
          <p>Conteúdos de Ciências da Natureza pensados para alunos do Ensino Fundamental II.</p>
          
          <div className="hero-actions">
            <Link to="/simulado" className="action-button-primary">Começar simulado</Link>
            <Link to="/questoes" className="action-button-secondary">Ver questões</Link>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">🔥 Ofensiva: <strong>{streak} dias</strong></div>
            <div className="stat-item">🏅 Pontos: <strong>{score}</strong></div>
          </div>
        </div>

        {/* Imagem ao lado */}
        <div className="imagem-container">
          <img src="/menina-estudando01.png" alt="Menina estudando 1" id="img01" />
          <img src="/menina-estudando02.png" alt="Menina estudando 2" id="img02" />
        </div>

      </div>
    </section>
  );
}
