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
                name: `${'1'.red +'. Crear una tarea'}`,
            },
            {
                value: '2',
                name: `${'2'.red + '. Listar tareas '}`,
            },
            {
                value: '3',
                name: `${'3'.red +  '. Listar tareas completadas'}`,
            },
            {
                value: '4',
                name: `${'4'.red +  '. Listar tareas pendientes '}`,
            },
            {
                value: '5',
                name: `${'5'.red +  '. Completar tarea(s) '}`,
            },
            {
                value: '6',
                name: `${'6'.red +  '. Borrar tarea '}`,
            },
            {
                value: '0',
                name: `${'0'.red +  '. Salir '}`,
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

const leerInput = async (message) =>{

    const question = [
        {
            type: 'input',
            name: 'descDeLaTarea',
            message,
            validate(value){
                if(value.length === 0){
                    //voy a retornar un error=>
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        } 
    ];
    const {descDeLaTarea} = await inquirer.prompt(question);
    return descDeLaTarea;

}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput

}