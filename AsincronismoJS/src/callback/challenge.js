let XMLHttpRequest = requier(`xmlhttprequest`).XMLHttpRequest;

function fetchData (url_api,callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(`GET`,url_api,true);//el tercer parámetro es el asynchronims
    xhttp.onreadystatechange = function(event) {
        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                return callback(null, JSON.parse(xhttp.responseText));
            }else { 
                const error = new Error(`Error ${url_api}`)
                return callback (error,null);
            }
        }
    }
}
xhttp.send()