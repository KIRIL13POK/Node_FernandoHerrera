const fs = require('fs');
const colors = require('colors')

console.clear();
console.log('====================================================')
console.log(`La tabla de ${base}`)
console.log('====================================================')

let salida = '';
let base = 3;
for(let i = 1; i <= 10 ; i++){
   salida +=(`${base} * ${i} = ${base*i}\n`)
}
console.log(salida)

fs.writeFile(`tabla_de${base}.txt`, salida, ( err ) => {
   if( err ) throw err
   console.log(`El archivo fue creado : "Tabla de ${base}"`)
});