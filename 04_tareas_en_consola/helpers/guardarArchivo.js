const fs = require('fs');

const archivoJSON = './db/data.json'

const guardarDB = (data) => {
    fs.writeFileSync(archivoJSON, JSON.stringify(data))
}

const leerDB = () => {

    if (!fs.existsSync(archivoJSON)) {
        return null;
    }

    const info = fs.readFileSync(archivoJSON, { encoding: 'utf-8' })
    const data = JSON.parse(info);
    //console.log(data)
    return data;
    // console.log(info)
    // return null

}

module.exports = {
    guardarDB,
    leerDB
}