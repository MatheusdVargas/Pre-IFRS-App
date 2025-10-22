import React from "react";
import { Link } from "react-router-dom";

export default function Header({ user, setUser }) {
  function loginAsDemo() {
    const demo = { name: "Aluno Demo", nickname: "aluno_demo", school: "E.M. Exemplo" };
    setUser(demo);
    localStorage.setItem("preifrs_user", JSON.stringify(demo));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("preifrs_user");
  }

  return (
    <header id="header">
      <div className="header-content container">
        <div className="logo-group">
          <div className="logo">PI</div>
          <h1>MEG</h1>
        </div>
        <nav className="main-nav">
          <Link to="/" className="nav-link">Início</Link>
          <Link to="/simulado" className="nav-link">Simulado</Link>
          <Link to="/questoes" className="nav-link">Questões</Link>
          <Link to="/ranking" className="nav-link">Ranking</Link>
          {user ? (
            <div className="main-nav" style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '5px 10px', borderRadius: '5px'}}>
              <div style={{width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{user.name[0]}</div>
              <div style={{fontSize: '0.875rem'}}>{user.name}</div>
              <button onClick={logout} style={{marginLeft: '10px', padding: '5px 10px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '5px', border: 'none', color: 'white', cursor: 'pointer'}}>Sair</button>
            </div>
          ) : (
            <button onClick={loginAsDemo} className="login-button">Entrar</button>
          )}
        </nav>
      </div>
    </header>
  );
}