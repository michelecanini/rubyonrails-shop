"use client"

import React, { useState, MouseEventHandler } from 'react';
import UsersTable from './UsersTable';
import NewUserForm from './NewUserForm';

const AdminPage = () => {
  const [isCreatingUser, setIsCreatingUser] = useState(false);

  if (isCreatingUser) {
    return <NewUserFormComponent onBack={() => setIsCreatingUser(false)} />;
  } else {
    return <UsersTableComponent onCreateUser={() => setIsCreatingUser(true)} />;
  }
};

const UsersTableComponent = ({ onCreateUser }: { onCreateUser: MouseEventHandler }) => (
  <div>
    <UsersTable />
    <button className="w-25 btn btn-lg btn-primary" onClick={onCreateUser}>Crea Nuovo Utente</button>
  </div>
);

const NewUserFormComponent = ({ onBack }: { onBack: MouseEventHandler }) => (
  <div>
    <NewUserForm />
    <button className="w-25 btn btn-lg btn-secondary mt-3" onClick={onBack}>Torna alla Tabella</button>
  </div>
);

export default AdminPage;
