const express = require('express')
var router = require('./routes/routes.js')
var path = require('path');

const app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));

app.use('/', router);

module.exports = app;