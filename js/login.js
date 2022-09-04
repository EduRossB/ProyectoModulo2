
import { cantidadCaracteres, validarContraseña, validarEmail } from "./helpers.js";
import {Usuario} from "./claseUsuario.js";

let formulario = document.querySelector("#formularioEntero");
let nombreIngresado = document.querySelector('#nombreCompleto');
let mailIngresado = document.querySelector('#mailIngresado');
let contraseñaIngresada = document.querySelector('#contraseñaIngresada');


formulario.addEventListener("submit", crearUsuario);
nombreIngresado.addEventListener("blur", ()=>{cantidadCaracteres(nombreIngresado)});
mailIngresado.addEventListener("blur", ()=> {validarEmail(mailIngresado)});
contraseñaIngresada.addEventListener("blur", ()=>{validarContraseña(contraseñaIngresada)});


function crearUsuario(e){
    e.preventDefault();
    
    const nuevoUsuario = new Usuario(
    nombreIngresado.value,
    mailIngresado.value,
    contraseñaIngresada.value,
    );
    console.log(nuevoUsuario);
}
