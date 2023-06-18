const { response } = require('express')

const usuariosGet = (req, res = response) => {
    res.json({
        msg:'get API- controlador'
    })
}
const usuariosPost = (req, res) => {

    const {nombre,edad} = req.body
    res.json({
        msg:'post API- controlador',
        nombre,
        edad,
    })
}

const usuariosPut = (req, res) => {
    res.json({
        msg:'put API- controlador'
    })
}

const usuariosPath = (req, res) => {
    res.json({
        msg:'path API- controlador'
    })
}

const usuariosDelete =(req, res) => {
    res.json({
        msg:'delete API- controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPath,
    usuariosDelete

}