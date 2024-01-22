"use client"

import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import UsersTable from './components/UsersTable';

const AdminPage: React.FC = () => {
  return (
    <div>
      <Header />
        <p style={{ textAlign: 'center', marginTop: '20px' }}>Benvenuto nella pagina di amministrazione!</p>
      <Sidebar />
      <main style={{ textAlign: 'center' }}>
        <UsersTable />
      </main>
    </div>
  );
};

export default AdminPage;