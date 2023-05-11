const { v4: uuidv4 } = require('uuid');

class Tarea  {
    id = '';
    desc = '';
    completadoEn = null;

    constructor(descDeLaTarea){
        this.id = uuidv4();
        this.desc = descDeLaTarea;
        this.completadoEn = null;
    }
};

module.exports = Tarea;