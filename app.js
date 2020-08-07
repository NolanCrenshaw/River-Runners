// External Modules
const express = require('express');
const path = require('path');
// const morgan = require('morgan')
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const createError = require('http-errors');

// Internal Modules
const routes = require('./routes')

// Declarations
const app = express();

// Application-wide Middleware
// app.use(morgan('dev'));
app.use(helmet({ hsts: false }));
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.use(function(req, _res, next) {
    next(createError(404));
});

app.use(function(err, _req, res, _next) {
    res.status(err.status || 500);
    if (err.status === 401) {
        res.set('WWW-Authenticate', 'Bearer');
    }
    res.json({
        message: err.message,
        error: JSON.parse(JSON.stringify(err)),
    });
});

module.exports = app;