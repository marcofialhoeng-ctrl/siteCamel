import React from 'react';

export default function Home() {
  const destaques = [
    { title: 'Linha Leve', desc: 'Componentes de suspensão, freios e motor para carros de passeio.', icon: '🚗' },
    { title: 'Linha Pesada', desc: 'Peças robustas e reforçadas para caminhões, carretas e ônibus.', icon: '🚛' },
    { title: 'Ferramentas', desc: 'Chaves, macacos, equipamentos pneumáticos e diagnósticos.', icon: '🔧' },
    { title: 'Elétrica & Óleos', desc: 'Baterias, lubrificantes, filtros e lâmpadas de alta performance.', icon: '⚡' },
  ];

  return (
    <main>
      <section className="hero">
        <span className="hero-badge">Desde 1986 • Leopoldina - MG</span>
        <h1 className="hero-title">
          A Melhor Opção em <br />
          <span style={{ color: '#2563eb' }}>Preço e Qualidade</span> para o Seu Veículo.
        </h1>
        <p className="hero-subtitle">
          Compre as peças e ferramentas indicadas pelo seu mecânico com o melhor preço da região.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Especialidades da Loja</h2>
          <p className="section-desc">Atendemos do motorista de passeio ao frotista com estoque a pronta entrega</p>
        </div>

        <div className="grid-cards">
          {destaques.map((item, index) => (
            <div key={index} className="card">
              <span className="card-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
