export class Usuario{
    constructor(parametroNombreCompleto, parametroEmail, parametroContraseña){
        this.nombreCompleto = parametroNombreCompleto;
        this.email = parametroEmail;
        this.contraseña = parametroContraseña;
    }
    mostrarDatos(){
        return (`
        <ul>
        <li>Nombre: ${this.nombreCompleto}</li>
        <li>Email: ${this.email}</li>
        <li>Contraseña: ${this.contraseña}</li>
        </ul>
        `);
    }
    get mostrarNombreCompleto(){
        return this.nombreCompleto;
    }
    set modificarNombreCompleto(nuevoNombreCompleto){
    this.nombreCompleto = nuevoNombreCompleto;
    }

    get mostrarEmail(){
      return this.email;   
    }
    set modificarEmail(nuevoEmail){
    this.email = nuevoEmail;    
    }

    get mostrarContraseña(){
    return this.contraseña;
    }
    set modificarContraseña(nuevaContraseña){
        this.contraseña = nuevaContraseña;
    }
    
}
