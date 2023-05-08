const inquirer = require('inquirer');
require('colors');

const preguntas = [

    {
        type: 'list',
        name: 'opcion',
        message: 'Que deseas hacer?',
        choices: [
            {
                value: '1',
                name: '1.Crear una tarea',
            },
            {
                value: '2',
                name: '2.Listar tareas ',
            },
            {
                value: '3',
                name: '3.Listar tareas completadas',
            },
            {
                value: '4',
                name: '4.Listar tareas pendientes ',
            },
            {
                value: '5',
                name: '5.Completar tarea(s) ',
            },
            {
                value: '6',
                name: '6.Borrar tarea ',
            },
            {
                value: '0',
                name: '0. Salir ',
            },
        ]
    }
]

const preguntaPausa = [
    {
        type: 'input',
        name: 'opcion',
        message: `Presione ${'Enter'.red} para continuar`,

    }
]
     

const inquirerMenu = async () => {

    console.clear()

    console.log('===================================='.green)
    console.log('      Seleccione una opcion'.red)
    console.log('====================================\n'.green)


    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}


const pausa = async () =>{
    await inquirer.prompt(preguntaPausa);
   


}

module.exports = {
    inquirerMenu,
    pausa

}