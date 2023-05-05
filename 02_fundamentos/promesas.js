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

const getEmpleado = (id) => {

    return new Promise( (resolve, reject) => {

        const empleado = empleados.find( e => e.id === id )?.nombre;

        (empleado)
            ? resolve(empleado)
            :reject(`No existe empleado con el ID ${id}`)
            
    });

}

const getSalario = (id) => {

    return new Promise( ( resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;
        (salario)
            ?resolve(`${salario}$`)
            :reject(`No existe el salario con el el ID ${id}`)

    });
}


 const id = 3;
 const id2 = 11111;

 //__________________________Promesas en cadena =>___________________________________________
 //1)
let nombre;
getEmpleado(id)
//.then (empleado => getSalario(id))es lo mismo pero (Arrow function) =>
    .then(empleado => {
        nombre = empleado;
        return getSalario(id);
    })
    
    .then (salario => console.log('El empleado ',nombre,'cobra el salario de:',salario))
    .catch( err => console.log(err) );

//2)
let nombre2;
getEmpleado(id2)
    .then(empleado => {
        nombre2 = empleado
        return getSalario(id2)
    })
    .then(salario => console.log(`El empleado ${nombre2} tiene el salario de: ${salario}`))
    .catch( err => console.log(err) );

//____________________Promesas cada por separado=>_____________________
// getEmpleado(id)
//     .then(empleado => console.log( empleado) )
//     .catch( err => console.log(err) );

// getSalario(id)
//     .then(salario => console.log( salario) )
//     .catch( err => console.log(err) );

//_____________________Promesas heel=>_________________________________
// getEmpleado(id)
//     .then(empleado => {

//         getSalario(id) 
//             .then ( salario => {

//                 console.log('El empleado', empleado, 'tiene un salario de', salario)
           
//         })
//         .catch( err => console.log(err) )
//     })
//     .catch( err => console.log(err) )
//_____________________________________________________________________




    
