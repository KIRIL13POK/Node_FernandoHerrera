require('colors');


const { mostrarMenu, pausa } = require('./helpers/mensales');




console.clear()


const main = async() => {
    console.log('Hola Mundo')

    mostrarMenu();
    pausa();



}

main();
