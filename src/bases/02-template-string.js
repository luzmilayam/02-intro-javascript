//console.log('holis mundo');

const nombre = 'Luzmila'
const apellido = 'Rodriguez'

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto)

function getSaludo() {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`) //sin el parámetro, muestra el nombre también                                                                                                                                                                                                                                                                                                                                                                        