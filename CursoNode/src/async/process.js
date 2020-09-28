//const process = require('process')

process.on('beforeExit', () => {
    console.log("El proceso va a terminar");
})


process.on('exit', () => {
    console.log("El proceso acabó");
})

process.on('uncaughtException', (error, origen) => {
    console.log('Se nos olvidó capturar un error');
    console.error(error);
})

console.log('esto, sale si el error no entra');
