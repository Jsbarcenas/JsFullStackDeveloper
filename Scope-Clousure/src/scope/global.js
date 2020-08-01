var hello ="hello";
let wolrd = "hello wolrd";
const helloWolrd="hello mundo"


const  anotherFunction =  ()=> {
    console.log(hello);
    console.log(world);
    console.log(helloWolrd);
}

anotherFunction();

const helloWolrd = () => {
    globalVar = "i am global";
}
helloWolrd();
console.log(globalVar);

const otherFunction = () => {
    var localVar = globalVar = "i am global";
}
otherFunction();
console.log(globalVar);