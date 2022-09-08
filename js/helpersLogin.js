export function cantidadCaracteres(input){
    if(input.value.length >= 10 && input.value.length <=50){
        input.className = "form-control is-valid";
        return true;
    }else{
        input.className = "form-control is-invalid";
        return false;
    }
}

let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

export function validarEmail(input){
    if( validEmail.test(input.value) ){
		input.className = "form-control is-valid";
		return true;
	}else{
		input.className = "form-control is-invalid";
		return false;
	}
} 


let validContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

export function validarContraseña(input){
    if( validContraseña.test(input.value)){
        input.className = "form-control is-valid";
		return true;
    }else{
		input.className = "form-control is-invalid";
		return false;
	}
}

        
        
        


