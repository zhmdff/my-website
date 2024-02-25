const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();

app.set('public', path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving index page
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('<h1>Error</h1>');
});

// Start the server
app.listen(3000, () => {
    console.log("App listening on port 3000");
});