'use strict';

//comprobar soporte

if(typeof (storage)){
    console.log('Disponible');
}else{
    console.log('No Disponible');
}

localStorage.setItem('clave','texto o valor de esta clave');
localStorage.setItem('edad','37');

var valor = localStorage.getItem('clave');
console.log(valor);

var persona = {
    edad:37,
    nombre:'Juan',
}

localStorage.setItem('persona', JSON.stringify(persona));

var per = JSON.parse(localStorage.getItem('persona'));

console.log(per.nombre);