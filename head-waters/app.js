// External Modules
const express = require('express');
const path = require('path');
const morgan = require('morgan')
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

// Internal Modules
const { port } = require('./config/index');

// Declarations
const app = express();

// Application-wide Middleware
app.use(morgan('dev'));
app.use(helmet({ hsts: false }));
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

// Routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port: ${port}`));