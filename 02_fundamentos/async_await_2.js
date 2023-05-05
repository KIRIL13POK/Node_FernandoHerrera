const empleados = [
    {
        id: 1,
        nombre: 'Kiril'
    },
    {
        id: 2,
        nombre: 'Pedro'
    },
    {
        id: 3,
        nombre: 'Susana'
    }

]

const salarios = [
    {
        id: 1,
        salario: 1111000
    },
    {
        id: 2,
        salario: 22222
    },

]

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        const empleado = empleados.find(e => e.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con el ID ${id}`)

    });

}

const getSalario = (id) => {

    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;
        (salario)
            ? resolve(`${salario}$`)
            : reject(`No existe el salario para el empleado  con el ID ${id}`)

    });
}

const getInfoTotal = async (id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario de empleado ${empleado} es de: ${salario}`

    } catch (error) {
        throw(error)

    }

}

const id = 1;

getInfoTotal(id)
    .then(msg => console.log(msg))
    .catch((err) => {
        console.log('Algo va mal')
        console.log(err);

    })