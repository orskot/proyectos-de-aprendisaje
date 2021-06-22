'use strict'

var n1 = prompt('Dime una palabra','no as puesto nada');
var n2 = prompt('Dime otra palabra','no as puesto nada');

function UnirPalabras(n1,n2, n3 = false) {

    if(n3 == false){
        console.log(n1+" "+n2);
    }else{
        document.write(n1+" "+n2);
    }

}

UnirPalabras(n1,n2, true);