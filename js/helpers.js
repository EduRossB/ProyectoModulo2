export function cantidadCaracteres(input){
    if(input.value.length >= 10 && input.value.length <=50){
        console.log("dato correcto");
        input.className = "form-control is-valid";
        return true;
    }else{
        console.log("dato incorrecto");
        input.className = "form-control is-invalid";
        return false;
        
    }
}

