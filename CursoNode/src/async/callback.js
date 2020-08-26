 const soyAsincrona = (nombre,callback) => {
    console.log('Hola, estoy viviendo de forma asíncrona');
    setTimeout( () => {console.log('Estoy siendo asincrona gracias a ' + nombre); callback();}, 1000 )
}
const adios = (nombre, otherCallback) => {
    setTimeout( () => {console.log(`Adiós ${nombre}`); otherCallback()}, 2000)
}
 console.log('Iniciando proceso...');
 soyAsincrona('Santiago' ,() => {console.log('Soy el callback'); adios(`Lina`, () => console.log(`Terminando Proceso... Lina`))});
 console.log('Terminando proceso...');
 