const fs = require('fs');

const crearArchivo = ( base )  => {

    return new Promise( (resolve, reject) => {

        console.log('====================================================');
        console.log('                 Tabla de ', base);
        console.log('====================================================');

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += (`${base} * ${i} = ${base * i}\n`)
        }
        
        console.log(salida);

        fs.writeFileSync(`tabla_De_${base}.txt`, salida)
        //console.log(`El archivo fue creado : "Tabla de ${base}"`)
        resolve(`Tabla-${ base }.txt `)

    })

}
module.exports = {
    //crearArchivo: crearArchivo
    crearArchivo

}