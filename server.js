const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint to handle user registration
app.post('/api/register', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);

  // No data storage needed here (commented out for clarity)
  // res.json({ message: 'User registered successfully' });

  // Send the received data back to the client
  res.json(formData);
});

app.get('/', (req, res) => {
  // Send a response, such as rendering an HTML file or sending a message
  res.sendFile(__dirname + '/public/form.html');
});



// Serve the frontend files
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});