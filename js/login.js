
import { cantidadCaracteres, validarContraseña, validarEmail } from "./helpers.js";
import {Usuario} from "./claseUsuario.js";

let formulario = document.querySelector("#formularioEntero");
let nombreIngresado = document.querySelector('#nombreCompleto');
let mailIngresado = document.querySelector('#mailIngresado');
let contraseñaIngresada = document.querySelector('#contraseñaIngresada');
const crearModal = new bootstrap.Modal(document.querySelector("#modalFormulario"));


formulario.addEventListener("submit", crearUsuario);
nombreIngresado.addEventListener("blur", ()=>{cantidadCaracteres(nombreIngresado)});
mailIngresado.addEventListener("blur", ()=> {validarEmail(mailIngresado)});
contraseñaIngresada.addEventListener("blur", ()=>{validarContraseña(contraseñaIngresada)});


let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuariosKey")) || []; 

function crearUsuario(e){
    e.preventDefault();
    if(cantidadCaracteres(nombreIngresado)=== true && validarEmail(mailIngresado) && validarContraseña(contraseñaIngresada)){
        const nuevoUsuario = new Usuario(
        nombreIngresado.value,
        mailIngresado.value,
        contraseñaIngresada.value,
        );
        listaUsuarios.push(nuevoUsuario);
        guardarUsuariosLocalStorage();
        limpíarFormulario();
        function limpíarFormulario(){
            formulario.reset()};
        console.log(listaUsuarios);
        crearModal.hide();
        alert("usuario creado con exito");

}else{
alert("debe completar todos los datos")

}

}
        
function guardarUsuariosLocalStorage(){
    localStorage.setItem("listaUsuariosKey", JSON.stringify(listaUsuarios));
}
     
        



