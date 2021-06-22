'use strict';

//funcion para obtener fecha , hora , minutos y segundos
function MueveReloj(){

var fecha = new Date();
var hora = fecha.getHours().toString();
var minutos = fecha.getMinutes().toString();
var segundos = fecha.getSeconds().toString();



// obtenemos el elemento fecha1 desde el Html
var fecha1 = document.getElementById('fecha1');

fecha1.innerHTML = hora +':'+minutos +':'+segundos;
fecha1.style.fontSize = '45px';

}


var repetir;

// funcion que refresca el reloj cada 1 seg 
function RefrescaReloj(){

    repetir = setInterval(MueveReloj, 1000)

}

RefrescaReloj();
