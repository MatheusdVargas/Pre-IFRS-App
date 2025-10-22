import React, { useState, useEffect } from "react";
import { fetchMock } from "../api/mockApi.js"; // Importação Corrigida

export default function SimuladoView() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => { fetchMock("questions").then(setQuestions); }, []);
  if (!questions.length) return <div style={{padding: '30px', textAlign: 'center'}}>Carregando...</div>;

  const q = questions[current];
  function answer(i) {
    setSelected(i);
    setShow(true);
    if (i === q.answer) setScore(s => s + 1);
  }

  function next() {
    setSelected(null);
    setShow(false);
    setCurrent(c => Math.min(c+1, questions.length-1));
  }

  const isFinalQuestion = current === questions.length - 1;
  const nextButtonText = isFinalQuestion ? "Finalizar" : "Próxima";

  return (
    <main className="main-content">
      <div className="simulado-box">
        <div style={{fontSize: '0.875rem', color: '#6b7280'}}>Questão {current+1}/{questions.length}</div>
        <h4 style={{marginTop: '10px', fontWeight: '600'}}>{q.statement}</h4>
        <ul className="choices-list">
          {q.choices.map((c, i) => (
            <li key={i}>
              <button 
                onClick={() => answer(i)} 
                disabled={show} 
                className={`choice-button ${show && i === q.answer ? 'res-correct' : (show && selected === i && i !== q.answer ? 'res-incorrect' : '')}`}
                style={selected === i && !show ? {border: '2px solid var(--color-primary)'} : {}}
              >
                {String.fromCharCode(65+i)}. {c}
              </button>
              {show && selected === i && (
                <div className={`resolution-box ${i === q.answer ? 'res-correct' : 'res-incorrect'}`}>
                  {i === q.answer ? 'Correto' : 'Incorreto'} — {q.resolution}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div>Pontos: {score}</div>
          {show && <button onClick={next} className="next-button">{nextButtonText}</button>}
        </div>
      </div>
    </main>
  );
}