document.getElementById('requestBloodForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const inputs = this.querySelectorAll('input');
  const requestData = {};

  inputs.forEach(input => {
    requestData[input.placeholder.toLowerCase().replace(/ /g, '_')] = input.value;
  });

  fetch('https://dhamani-backend.onrender.com/api/request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestData)
  })
    .then(res => res.json())
    .then(data => {
      alert('Blood request submitted successfully!');
      this.reset();
    })
    .catch(err => {
      alert('Something went wrong. Please try again.');
      console.error(err);
    });
});
