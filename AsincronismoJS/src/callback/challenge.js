let XMLHttpRequest = require(`xmlhttprequest`).XMLHttpRequest;
const API = `https://rickandmortyapi.com/api/character/`;
function fetchData (url_api,callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(`GET`,url_api,true);//el tercer parámetro es el asynchronims
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                return callback (null, JSON.parse(xhttp.responseText));
            }else { 
                const error = new Error(`Error ${url_api}`)
                return callback (error,null);
            }
        }
        
    }
    xhttp.send();
}
fetchData(API, function (error1, data1) {
    if(error1){
        return console.log(error1);
    }
    fetchData(API + data1.results[0].id, function(error2 , data2) {
        if(error2){
            return console.log(error2);
        }
        fetchData(data2.origin.url, function (error3, data3){
            if(error3) {
                return console.log(error3);
            }
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    } )
});


let XMLHttpRequest = require(`xmlhttprequest`).XMLHttpRequest;
const API_URL = "https://swapi.dev/api/people/";

function fetchStarWarsApi (API_URL,callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(`GET`,API_URL,true);
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                return callback (null, JSON.parse(xhttp.responseText));
            }else{
                console.log(xhttp.status);
                const error = new Error(`Error en ${API_URL}`);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

 fetchStarWarsApi (API_URL, function (error1, data1){
    if (error1){
        return console.log(error1);
    }
    console.log(data1);
    console.log(data1.count);
    console.log(data1.results[0].name);
    console.log(data1.results[0].homeworld);
    
})
