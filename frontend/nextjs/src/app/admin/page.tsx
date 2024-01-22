"use client"

import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AdminManagement from './components/AdminManagement';

const AdminPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main style={{ textAlign: 'center' }}>
        <AdminManagement />
      </main>
    </div>
  );
};

export default AdminPage;
