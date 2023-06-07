const axios = require('axios');

class Busquedas {

    historial = ['Madrid', 'Santiago', 'Valencia', 'Sevilla'];
    constructor() {
        //TODO: Leer DB si existe

    }

    //Método para buscar un lugar
    async ciudad(lugar = '') {

        try {
            //Peticion http
            //console.log('Ciudad:',lugar)
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/MADRID.json?limit=10&proximity=ip&language=es&access_token=pk.eyJ1Ijoia2lyaWwxM3BvayIsImEiOiJjbGlsdDVicjYwZG9pM2twYzE1bzQ2dTc1In0.0LGZfx-JQ46poOOctJAgTA');
            console.log(resp.data);

            return []; 

        } catch (error) {
            return []; 

        }



    }

}



module.exports = Busquedas;