const fs = require('fs');

const base = 9;

console.clear()
console.log('====================================')
console.log(       `TABLA DE ${base}`          )
console.log('====================================')

let salida = '';

for(let i = 1 ; i <= 10; i++){
    salida += `${base} * ${i} = ${base*i}\n`
}

fs.writeFile( `tabla_${base}.txt`, salida, (err) => {
    if(err)throw err;
    console.log(`La tabla_${base} fue creada`)
})

let saludo = 'Hola Muundo';
fs.writeFile('Hola_Mundo.txt', saludo, ( err) => {
    if( err ) throw err;
})


let paisesCapitales = [
    "España - Madrid",
    "Francia - París",
    "Alemania - Berlín",
    "Italia - Roma",
    "Reino Unido - Londres",
    "Rusia - Moscú",
    "China - Pekín",
    "Estados Unidos - Washington D.C.",
    "México - Ciudad de México",
    "Argentina - Buenos Aires"
  ];
fs.writeFile('paisesCapitales.txt', JSON.stringify(paisesCapitales), ( err ) => {
    if( err ) throw err;
})


const paisesCapitalesObj = [
    { pais: "España", capital: "Madrid" },
    { pais: "Francia", capital: "París" },
    { pais: "Alemania", capital: "Berlín" },
    { pais: "Italia", capital: "Roma" },
    { pais: "Reino Unido", capital: "Londres" },
    { pais: "Rusia", capital: "Moscú" },
    { pais: "China", capital: "Pekín" },
    { pais: "Estados Unidos", capital: "Washington D.C." },
    { pais: "México", capital: "Ciudad de México" },
    { pais: "Argentina", capital: "Buenos Aires" }
  ];
fs.writeFile('paisesCapitalesObj.txt', JSON.stringify(paisesCapitalesObj), ( err ) => {
    if ( err ) throw err;
})
