

const personajes = ['Ironman', 'Hulk', 'Thor'];

const [, , p3]=personajes;

console.log(p3);

const retornaArreglo =() =>{
    return ['abc', 123];
}

const [letras, nros] = retornaArreglo();
console.log(letras, nros);

//Tarea
//1. el primer nombre del arreglo se llamará nombre
//2. el segundo se llamará setNombre
const usarState = (valor) => {
    return [valor, () => {console.log('Hola mundo')}];
     
}

const [nombre, setNombre] = usarState('Loki');

console.log(nombre);
setNombre();
