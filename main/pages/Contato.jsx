import React from 'react';

export default function Contato() {
  const [form, setForm] = React.useState({ nome: '', tipo: 'Carro', peca: '' });

  const enviarZap = (e) => {
    e.preventDefault();
    const saudacao = `Olá Auto Peças Camel!`;
    const mensagem = `Me chamo ${form.nome}. Gostaria de um orçamento de [${form.tipo}]: ${form.peca}`;
    window.open(`https://wa.me/5532999842634?text=${encodeURIComponent(mensagem)}`, '_blank');
  };

  return (
    <main className="section">
      <h2 className="section-title">Orçamento via Telezap</h2>
      <form className="form-container" onSubmit={enviarZap}>
        <div className="form-group">
          <label>Seu Nome</label>
          <input type="text" required onChange={(e) => setForm({...form, nome: e.target.value})} />
        </div>

        <div className="form-group">
          <label>Eu procuro por:</label>
          <select onChange={(e) => setForm({...form, tipo: e.target.value})}>
            <option value="Peça para Carro">Peça para Carro</option>
            <option value="Peça para Caminhão">Peça para Caminhão</option>
            <option value="Ferramenta">Ferramenta / Equipamento</option>
            <option value="Outros">Outros</option>
          </select>
        </div>

        <div className="form-group">
          <label>Descrição do que precisa</label>
          <textarea rows="4" placeholder="Ex: Chave de fenda 1/4 ou Filtro de óleo Scania" required onChange={(e) => setForm({...form, peca: e.target.value})} />
        </div>

        <button type="submit" className="btn-primary" style={{width: '100%', padding: '15px', background: '#f59e0b', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer'}}>
          Solicitar Orçamento Agora
        </button>
      </form>
    </main>
  );
}