'use strict';

function Persona(edad,altura,peso){
    this.edad = edad;
    this.altura = altura;
    this.peso = peso;
    this.caminar = () => {
        console.log('Esta persona esta caminando');
    }
    this.sentarse = () => {
        console.log('La persona esta sentada');
    }
}

var Manuel = new Persona(37,2.00,97);
var Alysa = new Persona(22,1.78,52);
console.log(Alysa.sentarse());
console.log(Manuel.caminar());