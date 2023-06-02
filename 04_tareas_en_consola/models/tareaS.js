const Tarea = require('./Tarea');

class Tareas {  

    _listado = {}

    get listadoArr() {
        const listado = [];
        Object.keys( this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea);
        });

        return listado;

    }
    constructor(){

        this._listado = {};
        
    }

    cargarTareasFromArray(tareas = []){
        tareas.forEach( tarea => {
            
            this._listado[tarea.id] = tarea;

        })
    }

    crearTarea(descDeLaTarea = ''){
        const tarea = new Tarea(descDeLaTarea);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        console.log()
        this.listadoArr.forEach( ( tarea, i) => {

            const idx = `${i + 1}`.green
            const { desc, completadoEn} = tarea;
            const estado = ( completadoEn)
                            ? 'Completada'.green
                            : 'Pendiente'.red
            
            console.log( `${idx}. ${desc} :: ${estado}.\n`)                

        })
         
    }


}

module.exports = Tareas;