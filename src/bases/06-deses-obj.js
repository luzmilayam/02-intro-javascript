

//Asignación Desestructurante

const persona = {
    nombre: 'Tom',
    edad: '40',
    clave: 'Venom'
};

//const {nombre, edad} = persona;

// console.log(nombre, edad);

const retornaPersona = ({clave, edad, nombre, cargo = 'Jefe'}) => { //en la desestructuración se puede hacer en el argumento
   // console.log(nombre, cargo) //también en la desestructuración se pueden asignar cambios por defecto

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 7885375,
            lng: -244711
        }
    }
}

const {nombreClave, anios, latlng: {lat, lng}} = retornaPersona( persona );

console.log(nombreClave, anios)
console.log(lat, lng);

//retornaPersona(persona)