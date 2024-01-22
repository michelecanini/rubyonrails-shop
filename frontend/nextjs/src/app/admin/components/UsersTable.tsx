"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
}

const UsersTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const token = window.localStorage.getItem('jwtToken');
    if (token) {
      axios.get('http://localhost:3001/users', {
        headers: {
          Authorization: `${token}`
        }
      })
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2">
          <div className="table-responsive">
            <table className="table table-primary table-control table-control-lg rounded border">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Cognome</th>
                  <th scope="col">Data di Nascita</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.date_of_birth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
