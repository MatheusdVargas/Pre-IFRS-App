import React, { useState, useEffect } from "react";
import { fetchMock } from "../api/mockApi.js"; // Importação Corrigida

export default function RankingView() {
  const [ranking, setRanking] = useState([]);
  useEffect(() => { fetchMock("ranking").then(setRanking); }, []);
  return (
    <main className="main-content">
      <h3 className="page-title">Ranking semanal</h3>
      <div className="ranking-box">
        <ol className="ranking-list">
          {ranking.map((r, i) => (
            <li key={i} className="ranking-item">
              <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                <div style={{width: '32px', height: '32px', backgroundColor: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600'}}>{i+1}</div>
                <div>
                  <div style={{fontWeight: '500'}}>{r.name}</div>
                  <div style={{fontSize: '0.75rem', color: '#6b7280'}}>{r.school}</div>
                </div>
              </div>
              <div style={{fontWeight: '600'}}>{r.points} pts</div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}