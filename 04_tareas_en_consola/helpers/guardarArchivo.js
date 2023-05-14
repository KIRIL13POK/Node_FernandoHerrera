const fs = require('fs');

const guardarDB = (data) => {
    const archivo = './db/data.txt'
    const archivoJSON = './db/data.json'
     //fs.writeFileSync( archivo,JSON.stringify(data)  )
     fs.writeFileSync( archivoJSON,JSON.stringify(data)  )
}

module.exports = {
    guardarDB
}