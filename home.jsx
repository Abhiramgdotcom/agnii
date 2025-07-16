import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      blood_group: form.blood.value,
      location: form.location.value,
      phone: form.phone.value,
      email: form.email.value,
    };

    fetch('https://dhamani-backend.onrender.com/api/request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(() => {
        alert("Request submitted successfully!");
        form.reset();
      })
      .catch(() => alert("Failed to submit request."));
  };

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-semibold text-red-600 mb-4">Give the Gift of Life</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Full Name" required className="p-2 border rounded" />
          <input type="text" name="blood" placeholder="Blood Group" required className="p-2 border rounded" />
          <input type="text" name="location" placeholder="Location" required className="p-2 border rounded" />
          <input type="tel" name="phone" placeholder="Phone Number" required className="p-2 border rounded" />
          <input type="email" name="email" placeholder="Email" required className="p-2 border rounded md:col-span-2" />
        </div>
        <button type="submit" className="bg-red-600 text-white px-6 py-2 mt-4 rounded hover:bg-red-700">Request</button>
      </form>

      <div className="flex justify-center gap-4">
        <button onClick={() => navigate('/donor-login')} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Donor Login</button>
        <button onClick={() => navigate('/recipient-login')} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Recipient Login</button>
      </div>
    </div>
  );
}