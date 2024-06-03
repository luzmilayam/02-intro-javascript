// const saludar = function saludar (nombre){
//     return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar4 = () => `Hola Mundo`;

console.log(saludar2 ('Mica'));
console.log(saludar3 ('Mili'));
console.log(saludar4 ());

const getUser = () => ({
        uid: 'ABC123',
        username: 'El_chiqui22'
});

console.log(getUser());

//Tarea
//1. Transformar a funcion flecha
//2. Retornar objeto implícito

const getUsuarioActivo = (nombre) => ({
        uid: 'ABC456',
        username: nombre
});

const usuarioActivo = getUsuarioActivo('Luzmila');
console.log(usuarioActivo);