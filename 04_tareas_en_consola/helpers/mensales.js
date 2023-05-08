const { resolve } = require('path');

require('colors');

const mostrarMenu = () => {
    return new Promise( resolve => {

        console.clear()
        
        console.log('===================================='.green)
        console.log('      Seleccione una opcion'.red)
        console.log('====================================\n'.green)


        console.log(`${'1'.red}. Crear una tarea`)
        console.log(`${'2'.red}. Listar tareas`)
        console.log(`${'3'.red}. Listar tareas complitadas`)
        console.log(`${'4'.red}. Listar tareas pendientes`)
        console.log(`${'5'.red}. Completar tarea(s)`)
        console.log(`${'6'.red}. Borrar tarea`)
        console.log(`${'0'.red}. Salir\n`)
        // => Creando interfaz:
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        // => Una manera de  recibir la informacion:
        readLine.question('Seleccione una opcion: ', (opt) => {
            //console.log({opt}); para ver la informacion
            readLine.close();
            resolve(opt)

        })

    });


};

const pausa = () => {
    return new Promise( resolve => {

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`\nPresione ${'Enter'.red} para continuar\n`, (opt) => {
            readLine.close();
            resolve()
    
        })
    })   
}

module.exports = {
    mostrarMenu,
    pausa

}


