const empleados = [
    {
        id : 1,
        nombre : 'Kiril'
    }, 
    {
        id : 2,
        nombre : 'Pedro'
    },
    {
        id : 3,
        nombre : 'Susana'
    }   

]

const salarios = [
    {
        id : 1,
        salario : 1111000
    }, 
    {
        id : 2,
        salario : 22222
    },
    
]

const getEmpleado = (id, callback) => {
    const empleado = empleados.find( e => e.id === id )
    if(empleado){
        callback( null,empleado);
    }else{
        callback(`El empleado con ID '${id}' -NO EXISTE!!!`);
    }

}

const getSalario = (id, callback) => {
    const salario = salarios.find( s => s.id === id)?.salario
    if (salario){
        callback( null, salario)
    }else{
        callback(`No existe el salario con el el ID ${id}`)
    }

}

    
let id = 1;


 getEmpleado(id, (err, empleado) => {
    if(err){
        console.log('ERROR!')
        return console.log(err)
    }
    console.log('Empleado existe.')
    console.log(empleado.nombre)
 })
 
 getSalario(id, (err, salario) => {
    if(err){
        return console.log(err)
    }
    
    console.log(`El salario del empleado es ${salario}$`);
});



//  getEmpleado(3, (err,empleado) => {
//    if(err){
//         console.log('ERROR!')
//         return console.log(err)
//     }
//     console.log('Empleado existe.')
//     console.log(empleado)
//  })

//  getEmpleado(5, (err,empleado) => {
//    if(err){
//         console.log('ERROR!')
//         return console.log(err)
//     }
//     console.log('Empleado existe.')
//     console.log(empleado)
//  })

// const getSalario1 = (id, callback) => {
//     const salario = salarios.find( s => s.id ===id)
//     if(salario){
//         callback(null,salario)
//     }else{
//         callback(`El empleado con ID '${id}' -NO EXISTE!!!`);
//     }
// }