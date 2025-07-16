document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value,
    blood_group: form.blood_group.value,
    phone: form.phone.value,
    location: form.location.value,
    last_donation: form.last_donation.value,
    availability: form.availability.value
  };

  fetch('https://dhamani-backend.onrender.com/api/donor/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(result => {
      if (result.success) {
        document.getElementById('message').textContent = 'Registration successful!';
        form.reset();
      } else {
        document.getElementById('message').textContent = 'Registration failed: ' + result.message;
      }
    })
    .catch(() => {
      document.getElementById('message').textContent = 'Error connecting to server.';
    });
});
