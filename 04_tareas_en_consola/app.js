require('colors');



const { inquirerMenu, pausa } = require('./helpers/inquirer');
//const { mostrarMenu, pausa } = require('./helpers/mensales');




console.clear()


const main = async() => {
    console.log('Hola Mundo')
    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({opt})


      console.log('\n')
      await pausa();
      
        
    } while (opt !== '0');

    
   //pausa();



}

main();
