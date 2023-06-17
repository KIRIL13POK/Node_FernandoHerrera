require('dotenv').config()

const express = require('express');
const app = express();

console.log(process.env)


app.get('/', (req,res) => {
    res.send('Hello World')
})

//const port = process.env.PORT
const port = 3000;
app.listen( port , () => {
    console.log(`El Servidor esta escuchando en el puero ${port}`)
})



