const axios = require('axios');

class Busquedas  {

    historial = ['Madrid', 'Santiago','Valencia', 'Sevilla'];
    constructor(){
        //TODO: Leer DB si existe

    }

    //Método para buscar un lugar
    async ciudad(lugar = ''){
        //Peticion http
        //console.log('Ciudad:',lugar)
        const resp = await axios.get('https://reqres.in/api/users?page=2');
        console.log(resp.data);

        return [] ; //Retornar los lugares

    }

}



module.exports = Busquedas;