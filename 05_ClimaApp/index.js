require('dotenv').config()

const { leerInput, inquirerMenu, pausa, listarLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');


const main = async () => {
    
    const busquedas = new Busquedas();
    let opt;

    do {
        //Imprimir el menu
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                //Mostrar mensaje
                const terminoDeBusqueda = await leerInput('Ciudad:');
                //Buscar los lugares:
                const lugares = await busquedas.ciudad(terminoDeBusqueda);
                //Seleccionar el lugar:
                const id = await listarLugares(lugares);
                const lugarSel = lugares.find(l => l.id === id);
                //Clima:
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);
                //Mostrar resultados:
                console.clear();
                    //Mapbox API=>
                console.log('\nInformación de la ciudad:\n'.grey);
                console.log(`${'Ciudad:'.grey} ${lugarSel.nombre.green}`)
                console.log(`${'Lat:'.grey} ${lugarSel.lat}`)
                console.log(`${'Lng:'.grey} ${lugarSel.lng}`)
                    //OpenWeatherMap API=>
                console.log('Temperatura:'.grey, clima.temp)
                console.log(`${'Minima:'.grey}`, clima.min)
                console.log(`${'Maxima:'.grey}`, clima.min)
                console.log('Como está el clima:'.grey, clima.desc.green)
                break;

        }

        if (opt !== 0) await pausa();

    } while (opt !== 0);

}

main()