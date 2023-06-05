const { leerInput, inquirerMenu,pausa } = require('./helpers/inquirer')


const main = async () => {

    let opt;

    do {
        //Imprimir el menu
        opt = await inquirerMenu();
        console.log({opt})
        
        
        if(opt !== 0) await pausa();

    } while (opt !== 0);

}

main()