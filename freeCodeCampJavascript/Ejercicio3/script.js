window.onload=iniciar;
var estaciones=["Invierno","Otoño","Primavera"];


function iniciar(){
    mostrarEstaciones();
    var btnPush=document.getElementById("btnPush");
    btnPush.addEventListener("click",clickPush);

    var btnPop=document.getElementById("btnPop");
    btnPop.addEventListener("click",clickPop);

    var btnUnshift=document.getElementById("btnUnshift");
    btnUnshift.addEventListener("click",clickUnshift);

    var btnShift=document.getElementById("btnShift");
    btnShift.addEventListener("click",clickShift);
}

function clickPush(){
    var estacion= document.getElementById("estacion").value;
    estaciones.push(estacion);
    mostrarEstaciones();
}
function clickPop(){
    var estacion= document.getElementById("estacion").value;
    estaciones.pop();
    mostrarEstaciones();
}

function clickUnshift(){
    var estacion= document.getElementById("estacion").value;
    estaciones.unshift(estacion);
    mostrarEstaciones();
}

function clickShift(){
    var estacion= document.getElementById("estacion").value;
    estaciones.shift();
    mostrarEstaciones();
}

function mostrarEstaciones(){
    var listado = document.getElementById("listado");
    var html="";
    for(var estacion of estaciones){
        html= html+estacion+"<br/>"; //html+=estacion+"<br/>";
        listado.innerHTML=html;
    }
}