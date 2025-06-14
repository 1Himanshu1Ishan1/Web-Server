const express = require('express');
const app = express();
const PORT = 3000;

// Middleware 
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); 
});

// Route 1  Home PAGE
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

// Route 2 - About PAGE
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
