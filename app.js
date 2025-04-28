const express = require('express');
const path = require('path');
const app = express();

// Configuración del motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas básicas
app.get('/', (req, res) => res.render('index'));
app.get('/login', (req, res) => res.render('login'));
app.get('/menu', (req, res) => res.render('menu'));
app.get('/privacidad', (req, res) => res.render('privacidad'));
app.get('/triaje', (req, res) => res.render('triaje'));
app.get('/hospitales', (req, res) => res.render('hospital'));

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
