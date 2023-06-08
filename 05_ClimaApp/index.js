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

                //Buscar los lugares
                const lugares = await busquedas.ciudad(terminoDeBusqueda);

                //Seleccionar el lugar
                const id = await listarLugares(lugares);
                const lugarSel = lugares.find( l => l.id === id);
                console.log(lugarSel)

                //Clima

                //Mostrar resultados
                //Mapbox API=>
                console.log('\nInformación de la ciudad\n'.green);
                console.log(`${'Ciudad:'.grey} ${lugarSel.nombre}`)
                console.log(`${'Lat:'.grey} ${lugarSel.lat}`)
                console.log(`${'Lng:'.grey} ${lugarSel.lng}`)
                
                console.log('Temperatura:')
                console.log('Minima:')
                console.log('Maxima:')

                break;


        }


        if (opt !== 0) await pausa();

    } while (opt !== 0);

}

main()