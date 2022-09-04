

import {Usuario} from "./claseUsuario.js";

let formulario = document.querySelector("#formularioEntero");
let nombreIngresado = document.querySelector('#nombreCompleto').value;
let mailIngresado = document.querySelector('#mailIngresado').value;
let contraseñaIngresada = document.querySelector('#contraseñaIngresada').value;

formulario.addEventListener("submit", crearUsuario);

function crearUsuario(e){
    e.preventDefault();
    
    const nuevoUsuario = new Usuario(
    nombreIngresado.value,
    mailIngresado.value,
    contraseñaIngresada.value,
    );
    console.log(nuevoUsuario);
}
