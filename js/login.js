
import { cantidadCaracteres, validarContraseña, validarEmail } from "./helpersLogin.js";
import {Usuario} from "./claseUsuario.js";



// formulario inicio sesion
let iniciaSesionEmail = document.querySelector('#iniciaremail').value;
let iniciaSesionContraseña = document.querySelector('#iniciarcontraseña').value;

let inicioFormulario = document.querySelector("#iniciaFormulario");
inicioFormulario.addEventListener("submit", iniciarSesionAdmin);


// Usuario y clave de admin
let nombreUsuarioAdmin = "rolling@gmail.com";
let iniciarClaveAdmin = "Matias1234@";


// inicio sesion admin
function iniciarSesionAdmin(e){
    e.preventDefault();
if (iniciaSesionEmail.value == nombreUsuarioAdmin && iniciaSesionContraseña.value == iniciarClaveAdmin){
    
window.location="/pages/pagAdmin.html";
}
}

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

inicioFormulario.addEventListener("submit", inicioSesionInvitado);

console.log(listaUsuarios);


    let entryCount = 0
    let entryLimit = 3
    
    
    // Login with Attempts limit
    function inicioSesionInvitado() {
     
    
        let userFound = listaUsuarios.find( == iniciaSesionEmail.value );

        if (userFound) {
            window.location.href = "/index.html"
        }
        else {
            alert('Contraseña o usuario invalido, intentelo nuevamente')
            entryCount++;
        } 
        
        if (entryCount >= entryLimit) {
            alert('Pasaste el limite de intentos')
            window.location.href = "/pages/pagError404.html"
        }
    }    
         
         
    
