const {leerInput} = require('./helpers/inquirer')


const main = async () => {

    const texto = await leerInput('was up')
    console.log(texto)
}

main()