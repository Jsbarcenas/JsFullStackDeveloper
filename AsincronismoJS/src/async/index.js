const doSomethingAsync = () => {
    return new Promise((resolve,reject) => {
        (false)
        ? setTimeout(() => resolve("Do Something Async"), 3000)
        : reject( new Error("test Error"))
    })
}
const testAsync = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}
console.log("Before");
testAsync();
console.log("after");

const anotherFunction = async () => {
    try {
    const something = await doSomethingAsync(); 
    console.log(something+"1");   
    } catch (error) {
        console.error(error);
    }
}
console.log("Before");
anotherFunction();
console.log("after1");
