require('colors');

const { guardarDB } = require('./helpers/guardarArchivo');
const { inquirerMenu,
  pausa,
  leerInput
} = require('./helpers/inquirer');

const TareaS = require('./models/TareaS');
//const { mostrarMenu, pausa } = require('./helpers/mensales');

const main = async () => {

  let opt = '';
  const tareaS = new TareaS()

  do {
    //Imprimir el menu
    opt = await inquirerMenu();
    switch (opt) {
      case '1':
        //crear opcion
        const descDeLaTarea = await leerInput('Descripcion: ')
        tareaS.crearTarea(descDeLaTarea);
        break;
      case '2':
        console.log(tareaS.listadoArr)
        break;


    }

    guardarDB(tareaS.listadoArr);



    await pausa();


  } while (opt !== '0');


  //pausa();



}

main();
