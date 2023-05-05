
const { options, check } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicarAsync');
const {argv} = require('./config/yargs');
const colors = require('colors')


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));



// const [, , arg3 = 'base=5'] = process.argv;
// const [ , base ] = arg3.split('=');



