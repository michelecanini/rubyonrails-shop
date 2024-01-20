"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    const meta = document.querySelector('meta[name="csrf-token"]');
    if (meta !== null) {
      const token = meta.getAttribute('content');
      if (token !== null) {
        setCsrfToken(token);
      }
    }
  }, []);  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/password', {
        user: {
          email
        }
      }, {
        headers: {
          'X-CSRF-Token': csrfToken
        }
      });

      console.log('Risposta completa dalla richiesta di login:', response);
      console.log('Dati della risposta:', response.data);
      console.log('Headers della risposta:', response.headers);

      setMessage('Ti abbiamo inviato un link per reimpostare la password. Controlla la tua email.');
    } catch (error) {
      setMessage('Si è verificato un errore. Riprova.');
    }
  };

  return (
    <div className="border p-5 rounded bg-secondary">
      <h1 className="h3 mb-4 fw-normal text-center">Recupera password</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-floating">
          <input
            type="email"
            className="form-control rounded-top"
            id="floatingEmail"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="floatingEmail">Email</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">Richiedi il Link per reimpostare la password</button>
      </form>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
};

export default ResetPassword;
