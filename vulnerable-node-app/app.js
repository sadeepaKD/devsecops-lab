const express = require('express');
const app = express();

app.use(express.json());

// Vulnerability 1: SQL Injection
app.get('/user', (req, res) => {
  const username = req.query.username;
  const query = "SELECT * FROM users WHERE username = '" + username + "'";
  console.log("Executing: " + query);
  res.json({ query: query });
});

// Vulnerability 2: Hardcoded Credentials
const DB_PASSWORD = "supersecret123";
const API_KEY = "sk-prod-abc123hardcoded";

// Vulnerability 3: XSS
app.get('/search', (req, res) => {
  const term = req.query.term;
  res.send('<h1>Results for: ' + term + '</h1>');
});

// Vulnerability 4: Broken Access Control
app.post('/admin', (req, res) => {
  const { action } = req.body;
  res.json({ executed: action, status: 'done' });
});

app.listen(3001, () => {
  console.log('Vulnerable app running on port 3001');
});
