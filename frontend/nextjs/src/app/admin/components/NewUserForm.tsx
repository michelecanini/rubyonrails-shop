"use client"

import axios from 'axios';
import { useState, FormEvent } from 'react';

function NewUserForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [date_of_birth, setDateOfBirth] = useState('');
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  
    const token = window.localStorage.getItem('jwtToken');
    if (!token) {
      setError('Token non trovato.');
      return;
    }
  
    const userData = {
      user: {
        username,
        email,
        password,
        first_name,
        last_name,
        date_of_birth
      }
    };
  
    try {
      const response = await axios.post('http://localhost:3001/users', userData, {
        headers: {
          Authorization: `${token}`
        }
      });
  
      if (response.status === 201) {
        setSuccessMessage('Utente creato con successo!');
      } else {
        setError('Si è verificato un errore durante la creazione dell\'utente.');
      }
    } catch (error) {
      setError('Si è verificato un errore durante la creazione dell\'utente.');
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="needs-validation form-control form-control-lg" style={{width: '50%', margin: 'auto'}} noValidate>
        <div className="form-floating mb-3">
          <input 
            type="text" 
            className="form-control" 
            id="username" 
            placeholder="Username" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
            required 
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            placeholder="Email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            placeholder="Password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required 
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="form-floating mb-3">
          <input 
            type="text" 
            className="form-control" 
            id="first_name" 
            placeholder="First Name" 
            value={first_name} 
            onChange={e => setFirstName(e.target.value)} 
            required 
          />
          <label htmlFor="first_name">Nome</label>
        </div>
        <div className="form-floating mb-3">
          <input 
            type="text" 
            className="form-control" 
            id="last_name" 
            placeholder="Last Name" 
            value={last_name} 
            onChange={e => setLastName(e.target.value)} 
            required 
          />
          <label htmlFor="last_name">Cognome</label>
        </div>
        <div className="form-floating mb-3">
          <input 
            type="date" 
            className="form-control" 
            id="date_of_birth" 
            placeholder="Date of Birth" 
            value={date_of_birth} 
            onChange={e => setDateOfBirth(e.target.value)} 
            required 
          />
          <label htmlFor="date_of_birth">Data di Nascita</label>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        <button type="submit" className="btn btn-primary mb-3">Salva</button>
      </form>
    </div>
  );
}

export default NewUserForm;
