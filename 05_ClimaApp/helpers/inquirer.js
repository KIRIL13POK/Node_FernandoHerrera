const inquirer = require('inquirer');
require('colors');

const preguntas = [

    {
        type: 'list',
        name: 'opcion',
        message: 'Que deseas hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.red } Buscar ciudad.`,
            },
            {
                value: 2,
                name: `${'2.'.red} Historial.`,
            },
            {
                value: 0,
                name: `${'0.'.red} Salir`,
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


    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
}


const pausa = async () => {
    await inquirer.prompt(preguntaPausa);



}

const leerInput = async (message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    //voy a retornar un error=>
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];
    const { desc } = await inquirer.prompt(question);
    return desc;

}

const listadoTareasBorrar = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {

        const idx = `${i + 1}.`.green
        return {

            value: tarea.id,
            name: `${idx}${tarea.desc}`

        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar'
    });


    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }

    ]
    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async(message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message

        }
    ]
    const { ok } = await inquirer.prompt(question);
    return ok;

}

const mostrarListadoCheckList = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {

        const idx = `${i + 1}.`.green
        return {

            value: tarea.id,
            name: `${idx}${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false

        }
    });




    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }

    ]
    const { ids } = await inquirer.prompt(pregunta);
    return ids;
}



module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheckList

}