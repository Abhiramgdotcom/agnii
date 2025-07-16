import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DonorLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://dhamani-backend.onrender.com/api/donor/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          localStorage.setItem('donorEmail', email);
          navigate('/donor-dashboard');
        } else {
          alert('Login failed: ' + data.message);
        }
      })
      .catch(() => alert('Error connecting to server'));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold text-red-600 mb-4">Donor Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required className="p-2 border rounded" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required className="p-2 border rounded" />
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Login</button>
      </form>
    </div>
  );
}
