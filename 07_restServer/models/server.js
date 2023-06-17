const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.port = 3000

        //Middlewars
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes()
    }
    
    middlewares(){
        //Directorio publico
        this.app.use(express.static('public'))
    }



    routes() {
        this.app.get('/', (req, res) => {
            res.send('Hello Worldsssssssssssss')
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`El Servidor esta escuchando en el puero ${this.port}`)
        });

    }

}

module.exports = Server