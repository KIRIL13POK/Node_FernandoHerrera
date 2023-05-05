const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de tabla en la consola'
        }
    })
    .options({
        'h': {
            alias:'hasta',
            type:'number',
            default:10,
            describe: 'Indica hasta que numero cuntinua la tabla de multiplacacion'

        }

    })
    .options({
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en la consola'
        }
    })
   .check( ( argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero'
        }
        return true
       
    })
    
    .argv;

   

console.clear();
// console.log(argv);

// console.log('base: yargs', argv.base);

//let base = '3';

module.exports = {
    argv
}