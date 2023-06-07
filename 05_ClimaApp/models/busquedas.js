const axios = require('axios');

class Busquedas {

    historial = ['Madrid', 'Santiago', 'Valencia', 'Sevilla'];
    constructor() {
        //TODO: Leer DB si existe

    }

    get paramsMapbox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language':'es'
         }
    }

    //Método para buscar un lugar
    async ciudad(lugar = '') {

        try {
            //Peticion http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox

            })
            const resp =  await instance.get();
           
            console.log(resp.data);

            return []; 

        } catch (error) {
            return []; 

        }



    }

}



module.exports = Busquedas;