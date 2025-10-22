import React, { useState, useEffect } from "react";
import { fetchMock } from "../api/mockApi.js"; // Importação Corrigida

export default function QuestionsView() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => { fetchMock("questions").then(setQuestions); }, []);
  return (
    <main className="main-content">
      <h3 className="page-title">Questões</h3>
      <div style={{marginTop: '20px', display: 'grid', gap: '20px'}}>
        {questions.map((q, idx) => (
          <article key={q.id} className="question-item">
            <div style={{fontSize: '0.875rem', color: '#6b7280'}}>Questão {idx + 1} • {q.subject}</div>
            <p style={{marginTop: '10px', fontWeight: '500'}}>{q.statement}</p>
            <ul className="choices-list">
              {q.choices.map((c, i) => (
                <li key={i}>
                  <button className="choice-button">
                    {String.fromCharCode(65+i)}. {c}
                  </button>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
}