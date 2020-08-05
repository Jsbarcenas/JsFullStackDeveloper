function suma (num1, num2) {
    return num1 + num2;
}

function calc (num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(6, 2, suma));


function factorial(n){
   if (n===1){
       return n*1;
   }
   
    return n*factorial(n-1);
}

function asynchronimsCreator (n, callback) {
    return callback(n);
}


function date (callback) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        return callback(date);
    },3000)
}
function printDate (dateNow) {
    console.log(dateNow);
}
date(printDate);