const os = require('os')
//console.log(os.arch());
//console.log(os.platform());
//console.log(os.cpus());
//console.log(os.constants);
// const size = 1024;
// const kb = (bytes) => {
//     return bytes/size
// }
// const mb = (bytes) => {
//     return kb(bytes)/size
// }
// const gb = (bytes) => {
//     return mb(bytes)/size
// }
// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
// console.log(gb(os.totalmem()));

// console.log(os.tmpdir());
// console.log(os.hostname());
console.log(os.networkInterfaces());