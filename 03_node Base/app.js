const {crearArchivo} = require('./helpers/multiplicarAsync');

console.clear();


let base = '7';

crearArchivo( base )
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err) );
