"use client"

import React, { useState } from 'react';
import { api } from '../services/index';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await api.post('/login', { username, password });
      
      const token = response.data.token;
      localStorage.setItem('jwtToken', token);

      window.location.href = '/';
    } catch (error) {
      console.error('Errore durante il login:', error);
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

        <div className="checkbox mb-4 mt-4">
          <label>
            <input type="checkbox" value="remember-me" /> Ricordami
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
