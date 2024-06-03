
const persona = {
    nombre: 'Tom',
    apelllido: 'Hardy',
    edad: '40',
    direccion: {
        ciudad: 'New York',
        zip: '886855',
        lat: '24.45832',
        lng: '98.75728'
    }

};
//console.table({persona});
const persona2 = {...persona}; //Manera de crear un clon del objeto
persona2.nombre = 'Peter';

console.log({persona});
console.log({persona2});
console.log({persona});