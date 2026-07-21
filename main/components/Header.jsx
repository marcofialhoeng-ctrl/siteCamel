import React from 'react';
import logoImg from '../assets/logo.png'; // Garanta que o nome e extensão correspondam ao seu arquivo em src/assets

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <header className="header">
      <div className="header-content">
        {/* Logo que redireciona para a home ao ser clicada */}
        <div 
          className="logo" 
          onClick={() => setCurrentPage('home')}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
        >
          <img 
            src={logoImg} 
            alt="Auto Peças Camel" 
            className="logo-img" 
          />
        </div>

        <nav className="nav-links">
          <button 
            type="button"
            className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
          >
            Início
          </button>
          <button 
            type="button"
            className={`nav-button ${currentPage === 'quemsomos' ? 'active' : ''}`}
            onClick={() => setCurrentPage('quemsomos')}
          >
            Quem Somos
          </button>
          <button 
            type="button"
            className={`nav-button ${currentPage === 'contato' ? 'active' : ''}`}
            onClick={() => setCurrentPage('contato')}
          >
            Contato
          </button>
        </nav>

        <a 
          href="https://wa.me/5532999842634" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          (32) 99984-2634
        </a>
      </div>
    </header>
  );
}