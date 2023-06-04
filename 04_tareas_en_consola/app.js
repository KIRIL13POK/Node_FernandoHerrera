require('colors');

const { guardarDB,
        leerDB } = require('./helpers/guardarArchivo');
        
const { inquirerMenu,
        pausa,
        leerInput,
        listadoTareasBorrar} = require('./helpers/inquirer');

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

      case '3'://Listar completadas
        tareaS.listaPendientesCompletadas(true)
      break;

      case '4'://Listar pendientes
        tareaS.listaPendientesCompletadas(false)
      break;

      case '6'://Borrar
        const id = await listadoTareasBorrar( tareaS.listadoArr);
        console.log({id})
      break;

    }

    guardarDB(tareaS.listadoArr);

    await pausa();

  } while (opt !== '0');


  //pausa();



}

main();
