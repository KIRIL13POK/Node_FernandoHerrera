const Tarea = require('./Tarea');

class Tareas {
    
    _listado = {}

    constructor(){

        this._listado = {};
        
    }

    crearTarea(descDeLaTarea = ''){
        const tarea = new Tarea(descDeLaTarea);
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;