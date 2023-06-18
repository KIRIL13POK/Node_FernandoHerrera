const express = require('express');
let cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'


        //Middlewars
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes()
    }
    
    middlewares(){
        //Cors
        this.app.use(cors())

        //Lectura y Parseo de body
         this.app.use(express.json())

        //Directorio publico
        this.app.use(express.static('public'))

        
    }


    routes() {
        this.app.use( this.usuariosPath, require('../routes/usuarios') )

        
    }
    
    listen() {
        this.app.listen(this.port, () => {
            console.log(`El Servidor esta escuchando en el puero ${this.port}`)
        });

    }

}

module.exports = Server