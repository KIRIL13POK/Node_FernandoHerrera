const inquirer = require('inquirer');
require('colors');

const preguntas = [

    {
        type: 'list',
        name: 'opcion',
        message: 'Que deseas hacer?',
        choices: ['1.Crear una tarea', '2.Listar tareas ', '3.Listar tareas complitadas', '4.Listar tareas pendientes ', '5.Completar tarea(s) ', '6.Borrar tarea ', '0. Salir ',]
    }
]


const inquirerMenu = async () => {

    //console.clear()

    console.log('===================================='.green)
    console.log('      Seleccione una opcion'.red)
    console.log('====================================\n'.green)


    const opt = await inquirer.prompt(preguntas);
    return opt;
}

module.exports = {
    inquirerMenu

}