const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

//  Home Page
app.get('/', (req, res) => {
  res.status(200).send(' Welcome to the Home Page!');
});

//  About Page
app.get('/about', (req, res) => {
  res.status(200).send('This is the About Page.');
});

// 404 Handler 
app.use((req, res) => {
  res.status(404).send(' 404 - Page Not Found');
});

// Starting the Server
app.listen(PORT, () => {
  console.log(` Server is running at http://localhost:${PORT}`);
});
