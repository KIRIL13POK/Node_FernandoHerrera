
const express = require('express');

const app = express();
const puerto = 8083;

// Configurar las rutas y la lógica del servidor aquí

app.use(express.static('public'))

app.get('/generic', (req,res) => {
    res.sendFile(__dirname + '/public/generic.html')
})
app.get('/elements', (req,res) => {
    res.sendFile(__dirname + '/public/elements.html')
})
app.get('/index', (req,res) => {
    res.sendFile(__dirname + '/public/index.html')
})






app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}`);
});

