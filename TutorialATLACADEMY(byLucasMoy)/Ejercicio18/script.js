window.onload=iniciar;

function iniciar(){
    let boton=document.getElementById("btnCargar");
    boton.addEventListener("click",clickBoton);
}

async function cargarUrl(url){
    let response = await fetch(url);
    return response.json();
}

async function clickBoton(){
    let userId= document.getElementById('inputId').value;
    /*let typeofuser=document.getElementById('inputTypeofUser').value;
    let titulo= document.getElementById('titulo').value;
    let completed=document.getElementById('completed').value;*/
    let url= `https://jsonplaceholder.typicode.com/todos/${userId}`;
    let json = await cargarUrl(url);
    alert(json.userId);
    document.getElementById('inputTypeofUser').innerHTML=json.userId;
    document.getElementById('titulo').innerHTML=json.title;
    document.getElementById('completed').innerHTML=json.completed;
    let estadisticas= json;
    console.log(json);
}