// Los callbacks en JavaScript representan el uso de funciones como parámetros de otras funciones. Es decir, una función callback se crea cuando insertamos una función como valor de un parámetro de otra función.

const getUsuarioByID = (id, callback) => {

    const usuario = {
        id,
        nombre: 'Kiril'
    }

    setTimeout( () => {
        callback(usuario)
    },1500)
}

getUsuarioByID( 10, (usuario) => {
    console.log(usuario.id)
    console.log(usuario.nombre.toUpperCase());
});

