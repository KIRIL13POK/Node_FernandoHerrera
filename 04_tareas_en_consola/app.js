require('colors');



const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareaS');
//const { mostrarMenu, pausa } = require('./helpers/mensales');




console.clear()


const main = async() => {
    console.log('Hola Mundo')
    let opt = '';

    do {
        // opt = await inquirerMenu();
        // console.log({opt})


        const tareaS = new Tareas();
        const tarea = new Tarea('Hacer la mochila para ir al GYM');
        tareaS._listado[tarea.id] = tarea
        console.log(tarea)
        console.log(tareaS)



      console.log('\n')
      await pausa();
      
        
    } while (opt !== '0');

    
   //pausa();



}

main();
