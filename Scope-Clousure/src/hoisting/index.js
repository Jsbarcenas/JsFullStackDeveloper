//Nos hace le favor de levantar las cosas antes de llamarlas
//llamar algo antes de ser "creado"

a = 2;
var  a;
console.log(a);

console.log(a);
var a = 2;
nameOfDog("Chiqui");
function nameOfDog (name) {
    console.log(name);
}
