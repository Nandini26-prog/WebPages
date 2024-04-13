const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/register', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);


  res.json(formData);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/form.html');
});



// Serve the frontend files
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});