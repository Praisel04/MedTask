const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index'));
app.get('/login', (req, res) => res.render('login'));
app.get('/menu', (req, res) => res.render('menu'));
app.get('/privacidad', (req, res) => res.render('privacidad'));
app.get('/triaje', (req, res) => res.render('triaje'));
app.get('/hospitales', (req, res) => res.render('hospital'));

module.exports = app;
