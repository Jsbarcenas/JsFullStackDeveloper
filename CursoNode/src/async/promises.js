const soyAsincrona = (nombre) => {
    return new Promise( (resolve, reject) => {
        console.log("Hola, soy "+nombre+ ", y estoy viviendo de forma asíncrona");
    setTimeout(() => {
        var i = 2;
      console.log("Estoy siendo asincrona gracias a " + "Santiago");
      resolve(nombre);
    }, 1000);
    });
 
  };
  const adios = (nombre) => {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`Adiós ${nombre}`);
          resolve();
          }, 2000);
      })
    
  };
  
  const hablar = (nombre) =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("balbala");
            resolve(nombre)
            
          }, 1000);
    })
    
}
   
 console.log('Iniciando el proceso');

  soyAsincrona('Lina')
  .then((nombre) => console.log(nombre) )
    .then(hablar)
    .then(adios)
    