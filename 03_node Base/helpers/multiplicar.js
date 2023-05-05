
const fs = require('fs');

const crearArchivo = ( base ) => {
    console.log('====================================================');
    console.log('====================================================');
    console.log('                 Tabla de ', base);
    console.log('====================================================');
    console.log('====================================================');

    let salida = '';

    for(let i = 1; i <= 10 ; i++){

        salida +=(`${base} * ${i} = ${base*i}\n`)

    }

    
    fs.writeFileSync(`tabla_De_${base}.txt`, salida) 

    console.log(`El archivo fue creado : "Tabla de ${base}"`)


}

module.exports = {
    //crearArchivo: crearArchivo
    crearArchivo

}