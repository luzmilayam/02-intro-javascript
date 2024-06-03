import {getHeroeById} from './bases/08-imp-exp'

// const promesa = new Promise( (resolve, reject) =>{

//     setTimeout( () =>{
//         //Tarea
//         //importar  
//         const heroe = getHeroeById(2);
//         resolve (heroe);
//     }, 2000)
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe)
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) =>{

           setTimeout( () =>{
                 //Tarea
                 //importar  
                 const heroe = getHeroeById(id);
                 if (heroe){
                 resolve (heroe);
                 }else{
                 reject ('No se pudo encontrar el héroe')
                 }
             }, 2000)
         });
}

getHeroeByIdAsync(2)
.then (console.log)
.catch (err => console.warn(err))  //console.warn es una función que va a recibir como argumento el primer argumento que reciba el catch 