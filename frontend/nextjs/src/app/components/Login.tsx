"use client"
//import { api } from '../services/index';

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      console.log('Invio della richiesta di login...');

      const response = await axios.post('http://localhost:3001/login', {
        user: {
          username, 
          password
        }
      });

      console.log('Risposta completa dalla richiesta di login:', response);
      console.log('Dati della risposta:', response.data);
      console.log('Headers della risposta:', response.headers);

      const token = response.headers.authorization;

      if (token) {
        localStorage.setItem('jwtToken', token);
        console.log('Token salvato:', localStorage.getItem('jwtToken'));
        setSuccessMessage('Accesso effettuato con successo!');
      } else {
        console.error('Token non presente nella risposta del server');
      }

      setTimeout(() => {
        window.location.href = '/admin';
      }, 1000);
      } catch (error: any) {
      console.error('Errore durante il login:', error);

      if (error.response && error.response.status === 401) {
        setError('Credenziali non valide. Riprova.');
      } else {
        setError('Errore durante il login. Riprova più tardi.');
      }
    }
  };

  return (
    <div className="border p-5 rounded bg-secondary">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-4 fw-normal text-center">Login</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control rounded-top"
            id="floatingUsername"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="floatingUsername">Username</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control rounded-bottom"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        {error && <div className="alert alert-danger mt-2">{error}</div>}
        {successMessage && <div className="alert alert-success mt-2">{successMessage}</div>}

        <div className="checkbox mb-4 mt-4">
          <label>
            <input type="checkbox" value="remember-me" /> Ricordami
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Accedi</button>
      </form>
    </div>
  );
};

export default Login;
