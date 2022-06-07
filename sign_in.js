//(funcion)(){
    var formulario = document.getElementById('formulario'),
		ma      = formulario. ma,
		correo = formulario.correo,
		error = document.getElementById('error');



function validarMa(e){
    if(ma.value == '' || ma == null){
        console.log('Completa el password');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>You can not leave empty spaces, Enter a password. </li>';
        e.preventDefault();
}else{
    error.style.display='none';
}
}

function validarCorreo(e){
     if(correo.value == '' || correo == null){
        console.log('Completa el correo');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>You can not leave empty spaces, Enter an email.</li>';
        e.preventDefault();
}else{
    error.style.display='none';
}
}


function validarForm(e){
   error.innerHTML = '';
   error.style.display = 'block';
   validarMa(e);
   validarCorreo(e);
   formulario.request();
   return false;
}


formulario.addEventListener('submit', validarForm);

//}())