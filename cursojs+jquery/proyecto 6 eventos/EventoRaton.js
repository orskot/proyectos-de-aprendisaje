'use strict';

var boton = document.querySelector('#boton');
var div = document.querySelector('#div');

//boton.addEventListener('click', function(){
   // console.log('Pulsaste el boton');
   // div.innerHTML = 'Pulsaste el boton nmms'
//})

function Pulsar() {
    div.innerHTML = 'Pulsaste el boton';
}

function Alert() {
    alert('Precionaste el div');
}

//onclick  click izquierdo
//oncontextmenu  click dereco
//onmouseenter   click central
//onmousedown    al pasar el raton hacia abajo
//ondbloclick    doble click
//onmouseleave   pulsarlo y despues soltar la pulsacion
//onmouseover    pasar el raton por debaj0
//onmouseup      parar el raton por encima