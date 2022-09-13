
import { cantidadCaracteres, validarContraseña, validarEmail } from "./helpersLogin.js";
import {Usuario} from "./claseUsuario.js";

// formulario registro (modal)
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
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usuario creado con exito',
            showConfirmButton: false,
            timer: 1500
          })

}else{
alert("debe completar todos los datos")

}

}

console.log(listaUsuarios);

// formulario inicio sesion
let iniciaSesionEmail = document.querySelector('#iniciaremail');
let iniciaSesionContraseña = document.querySelector('#iniciarcontraseña');
let inicioFormulario = document.querySelector("#iniciaFormulario");
inicioFormulario.addEventListener("submit", iniciarSesionAdmin);
inicioFormulario.addEventListener("submit", iniciaSesionInvitado);


// Usuario y clave de admin
let nombreUsuarioAdmin = "rolling@gmail.com";
let iniciarClaveAdmin = "Rolling@123456";

let nuevoNavBar = document.querySelector("#listaNavBarAdmin"); 

// inicio sesion admin
function iniciarSesionAdmin(e){
    e.preventDefault();
if (iniciaSesionEmail.value == nombreUsuarioAdmin && iniciaSesionContraseña.value == iniciarClaveAdmin){
  window.location="/pages/pagAdmin.html";

}
}

function iniciaSesionInvitado(e){
    e.preventDefault();
   for(let i = 0; i < listaUsuarios.length; i++){
    if(iniciaSesionEmail.value == listaUsuarios[i].email && iniciaSesionContraseña.value == listaUsuarios[i].contraseña){
        window.location="/index.html";
        i = 50;
    }
}
}