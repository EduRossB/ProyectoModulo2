export function caracteresProducto(input){
    if(input.value.length >= 3 && input.value.length <=65){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}
export function caracteresDescripcion(input){
    if(input.value.length >= 5 && input.value.length <=200){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}
export function linkImagenValidacion(input){
    let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
    if(patron.test(input.value)){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}
export function numerosPrecio(input){
    if(input.value.length >= 2 && input.value.length <=8){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}