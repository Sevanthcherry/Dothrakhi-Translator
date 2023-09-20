var input = document.getElementById("ip-box");

var output = document.getElementById("op-box");



var btn = document.getElementById("btn");

var api = "https://api.funtranslations.com/translate/dothraki.json";

function decode(text){
    return api+"?"+"text="+text;
}

function errorHandler(error){
    console.log("Error",error);
    alert("Error connecting the server, please try again later");
}


function translated(){
    var ip = input.value;
    fetch(decode(ip)).then(res=>res.json()).then(data=>{var recieved=data.contents.translated;
    output.innerText=recieved;
    }).catch(errorHandler)
}



btn.addEventListener("click",translated);
