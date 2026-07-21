import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Contato from './pages/Contato';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500 selection:text-zinc-950 flex flex-col justify-between">
      <div>
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        {currentPage === 'home' && <Home />}
        {currentPage === 'quemsomos' && <QuemSomos />}
        {currentPage === 'contato' && <Contato />}
      </div>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}