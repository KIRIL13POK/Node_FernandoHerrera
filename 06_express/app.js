const express = require('express')
const app = express()

//Servir contenido estatico
app.use(express.static('public'))


app.get('/holaMundo', (req, res) => {
  res.send('Hola Mundo')
})
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
})

let port = 8080
app.listen( port, ()=>{
    console.log(`El serividor esta escuchando en el puerto ${port}`)
})

