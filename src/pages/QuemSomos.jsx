import React from 'react';

export default function QuemSomos() {
  return (
    <main className="section">
      <div className="section-header">
        <span className="hero-badge">Tradição & Confiança</span>
        <h1 className="section-title">Sobre a Auto Peças Camel</h1>
      </div>

      <div className="form-container" style={{ maxWidth: '800px', lineHeight: '1.7' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '20px', color: '#f4f4f5' }}>
          Desde <strong>20 de outubro de 1986</strong>, a <strong>Auto Peças Camel</strong> é referência no mercado automotivo de Leopoldina e região.
        </p>

        <p style={{ color: '#a1a1aa', marginBottom: '20px' }}>
          Instalada estrategicamente na <strong>BR-116 (nº 766 - Três Cruzes)</strong>, nossa loja oferece acesso rápido e prático para quem precisa de solução imediata, seja na cidade ou na rodovia.
        </p>

        <div className="grid-cards" style={{ margin: '30px 0', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
            <span style={{ fontSize: '1.8rem' }}>🚗</span>
            <h4 style={{ color: '#f59e0b', marginTop: '8px' }}>Linha Leve</h4>
            <p style={{ fontSize: '0.8rem', marginTop: '4px' }}>Peças para carros de passeio</p>
          </div>

          <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
            <span style={{ fontSize: '1.8rem' }}>🚛</span>
            <h4 style={{ color: '#f59e0b', marginTop: '8px' }}>Linha Pesada</h4>
            <p style={{ fontSize: '0.8rem', marginTop: '4px' }}>Componentes para caminhões</p>
          </div>

          <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
            <span style={{ fontSize: '1.8rem' }}>🔧</span>
            <h4 style={{ color: '#f59e0b', marginTop: '8px' }}>Ferramentas</h4>
            <p style={{ fontSize: '0.8rem', marginTop: '4px' }}>Equipamentos profissionais</p>
          </div>
        </div>

        <p style={{ color: '#a1a1aa', textAlign: 'center', fontWeight: '600' }}>
          Tradição, estoque variado e atendimento técnico para resolver o seu problema com rapidez.
        </p>
      </div>
    </main>
  );
}