import React from "react";
import { Link } from "react-router-dom";

export default function HomeCards() {
  return (
    <section id="home-cards" className="container">
      <div className="card">
        <h4>Cursos por matéria</h4>
        <p style={{fontSize: '0.875rem', marginTop: '5px'}}>Aulas curtas, exercícios e vídeos.</p>
        <div style={{marginTop: '15px', display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
          {['Biologia','Física','Química'].map(s => (
            <Link key={s} to="/questoes" style={{padding: '5px 10px', backgroundColor: '#eff6ff', borderRadius: '5px', fontSize: '0.875rem', textDecoration: 'none', color: '#1f2937'}}>{s}</Link>
          ))}
        </div>
      </div>
      <div className="card">
        <h4>Modo Simulado</h4>
        <p style={{fontSize: '0.875rem', marginTop: '5px'}}>Provas cronometradas e análise por tema.</p>
        <Link to="/simulado" style={{marginTop: '15px', display: 'inline-block', padding: '5px 10px', backgroundColor: '#dcfce7', borderRadius: '5px', textDecoration: 'none', color: '#1f2937'}}>Iniciar</Link>
      </div>
      <div className="card">
        <h4>Ranking</h4>
        <p style={{fontSize: '0.875rem', marginTop: '5px'}}>Compare seu desempenho com colegas.</p>
        <Link to="/ranking" style={{marginTop: '15px', display: 'inline-block', padding: '5px 10px', backgroundColor: '#ede9fe', borderRadius: '5px', textDecoration: 'none', color: '#1f2937'}}>Ver ranking</Link>
      </div>
    </section>
  );
}