let importarObjeto = document.querySelector("#etiquetaUsuario")
let consultarSesion = localStorage.getItem("inicioSesion");
let etiquetaLoginNav = document.querySelector("#etiquetaLogin")
let cerrarSesionNav = document.querySelector("#cerrarSesion")
let botonDesplegable = document.querySelector("#desplegable")

cerrarSesionNav.addEventListener("click", cerrarSesion);

if(consultarSesion === "activo"){
importarObjeto.innerHTML= localStorage.getItem("usuarioLogueado");
}else{
    importarObjeto.innerHTML="";
    botonDesplegable.innerHTML="";
}
if(consultarSesion==="activo"){
    etiquetaLoginNav.innerHTML="";
}else{
    etiquetaLoginNav.innerHTML="Login"
}

console.log(consultarSesion)

function cerrarSesion(){
  localStorage.removeItem("inicioSesion");
  localStorage.removeItem("usuarioLogueado");
}