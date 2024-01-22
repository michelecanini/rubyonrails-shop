"use client"

import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const AdminPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main style={{ textAlign: 'center' }}>
        <h1>Pagina di amministrazione</h1>
        <p>Benvenuto nella pagina di amministrazione!</p>
      </main>
    </div>
  );
};

export default AdminPage;