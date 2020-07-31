// External Modules
const express = require('express');
const path = require('path');
const morgan = require('morgan')

// Internal Modules
const { port } = require('./config/index');

// Declarations
const app = express();

// Application-wide Middleware
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));

// Routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port: ${port}`));