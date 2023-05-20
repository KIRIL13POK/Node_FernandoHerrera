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

    cargarTareasFromArray(tareas = []){
        tareas.forEach( tarea => {
            
            this._listado[tarea.id] = tarea;

        })
    }

    constructor(){

        this._listado = {};
        
    }

    crearTarea(descDeLaTarea = ''){
        const tarea = new Tarea(descDeLaTarea);
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;