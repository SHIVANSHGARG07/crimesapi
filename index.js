const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

console.log('Starting the server...');

// GET route to return data from db.json
app.get('/api/employees', (req, res) => {
  console.log('Received request for /api/employees');
  const filePath = path.join(__dirname, 'db.json');
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading db.json:', err);
      return res.status(500).json({ error: 'Failed to read data' });
    }

    const employees = JSON.parse(data);
    res.json(employees);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
