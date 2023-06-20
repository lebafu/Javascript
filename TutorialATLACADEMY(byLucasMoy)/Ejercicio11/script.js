window.onload=iniciar();

function iniciar(){
    //Boton Agregar escucha el click
    var btnAgregar=document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click",clickBtnAgregar);
    var btnBorrar=document.getElementById("btnBorrar");
    btnBorrar.addEventListener("click",clickBtnBorrar);
}


function clickBtnAgregar(){
    //Traemos txtNota
    var txtNota=document.getElementById("txtNota");
    //Queda asignado el localstorage
    var notas = [];
    if(localStorage.notas){
        notas=JSON.parse(localStorage.notas);
    }
    notas.push(txtNota.value);
    localStorage.notas= JSON.stringify(notas);
    //localStorage.nota=txtNota.value();
    mostrarNotas();
    //alert(txtNota.value);
}

function clickBtnBorrar(){
    localStorage.clear();
    mostrarNotas();
}

function mostrarNotas(){
    // Trae el divnotas
    var divNotas=document.getElementById("divNotas");
    //Le asigna las notas desde el localstorage
    var notas = [];
    if(localStorage.notas){
        notas=JSON.parse(localStorage.notas);
    }
    var html="";
    for(var nota of notas){
        html+=nota+ "<br/>";
    }
    divNotas.innerHTML=html;
}