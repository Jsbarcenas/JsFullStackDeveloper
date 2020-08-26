const soyAsincrona = (nombre, callback) => {
  console.log("Hola, estoy viviendo de forma asíncrona");
  setTimeout(() => {
    console.log("Estoy siendo asincrona gracias a " + nombre);
    callback(nombre);
  }, 1000);
};
const adios = (nombre, otherCallback) => {
  setTimeout(() => {
    console.log(`Adiós ${nombre}`);
    otherCallback();
  }, 2000);
};

const hablar = (callbackHablar) =>
  setTimeout(() => {
    console.log("balbala");
    callbackHablar();
  }, 2500);

 const conversacion = (nombre, veces, callback) => {
     if(veces >= 0){
         hablar( () => {
        conversacion(nombre, --veces, callback);
    })}else {
        adios(nombre, ()=> {});
    }
         
 }
soyAsincrona('Santiago', (nombre) => {
    conversacion(nombre ,5, ()=> console.log('Proceso terminado'))
} )

// soyAsincrona("Santiago", () => {
//   console.log("Soy el callback");
//   hablar(() =>
//     hablar(() =>
//       hablar(() =>
//         hablar(() =>
//           adios(`Lina`, () => console.log(`Terminando Proceso... Lina`))
//         )
//       )
//     )
//   );
// });
console.log("Terminando proceso...");
