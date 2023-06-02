require('colors');

const { guardarDB,
        leerDB } = require('./helpers/guardarArchivo');
        
const { inquirerMenu,
        pausa,
        leerInput} = require('./helpers/inquirer');

const TareaS = require('./models/TareaS');
//const { mostrarMenu, pausa } = require('./helpers/mensales');

const main = async () => {

  let opt = '';
  const tareaS = new TareaS()

  const tareasDB = leerDB()

  if(tareasDB){
    //Cargar tareas
    tareaS.cargarTareasFromArray(tareasDB);
  }

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
        //console.log(tareaS.listadoArr)
        tareaS.listadoCompleto()
      break;


    }

    guardarDB(tareaS.listadoArr);

    await pausa();

  } while (opt !== '0');


  //pausa();



}

main();
