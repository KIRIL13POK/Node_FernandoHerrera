const {Router} = require('express');
const { usuariosPut,
        usuariosGet, 
        usuariosPost,
        usuariosDelete, 
        usuariosPath } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);
router.put('/', usuariosPut);
router.post('/', usuariosPost);
router.delete('/',usuariosDelete);
router.patch('/', usuariosPath);


module.exports = router;