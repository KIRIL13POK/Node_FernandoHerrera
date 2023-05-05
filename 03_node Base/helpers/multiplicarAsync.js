const fs = require('fs');
const colors = require('colors')

const crearArchivo = async( base , listar = false, hasta = false) => {

    try {
        if(listar){
            console.log('===================================================='.green);
            console.log('            Tabla de '.green,colors.red(base) );
            console.log('===================================================='.green);
        }
    
        let salida = '';
        let consola = '';
        
    
        for ( let i = 1 ; i <= hasta ; i++) {
            salida  += `${ base } * ${ i } = ${ base * i}\n`
            consola += `${ base } * ${ i } = ${ base * i}\n`.rainbow
        }
        if(listar){

            console.log(consola)
        }
     
    
        fs.writeFileSync(`./salida/tabla_DE_${base}.txt`, salida);
    
        return `Tabla_DE_${base}.txt`
        
    } catch (error) {
        console.log(error)
        
    }
  
}

module.exports = {
    crearArchivo
}


