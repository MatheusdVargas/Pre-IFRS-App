import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"; // Componente separado
import Hero from "./components/Home/Hero.jsx";
import HomeCards from "./components/Home/HomeCards.jsx";

// Páginas
import QuestionsView from "./pages/QuestionsView.jsx";
import SimuladoView from "./pages/SimuladoView.jsx";
import RankingView from "./pages/RankingView.jsx";

export default function App() {
  const [user, setUser] = useState(null);
  const [streak] = useState(3);
  const [score] = useState(450); // Valor fixo para o protótipo

  useEffect(() => {
    const saved = localStorage.getItem("preifrs_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  return (
    <Router>
      <div id="app-container">
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<><Hero streak={streak} score={score} /><HomeCards /></>} />
          <Route path="/questoes" element={<QuestionsView />} />
          <Route path="/simulado" element={<SimuladoView />} />
          <Route path="/ranking" element={<RankingView />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}