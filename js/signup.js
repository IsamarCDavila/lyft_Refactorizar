var nombre = $("#name");
var emailX = $("#email");
var checkInput = $("#check"); 
var mensajeCheck = $("#mensajeCheck");

function init(){
    var button = $("#next");
    button.click(onButtonClick);
    nombre.val("");
    emailX.val("");
    checkInput.prop( "checked" );
}

function onButtonClick() {
    var inputName = $("#name");
    localStorage.setItem('Name', inputName.val());
    var inputEmail = $("#email");
    localStorage.setItem('Email', inputEmail.val());
    
    if(nombre.val() == '' || emailX.val() == '' || checkInput.checked == false) {
        
        mensajeCheck.html("<br><h5 class='text-center' style='color:#FF1493';>Debe completar todo el formulario</h5>");
    } else {
        
        mensajeCheck.html("");
        location.href = 'mapa.html';
    }
}
//VALIDAR NOMBRE
function validateName(_evt){
    
    var mensajeName = $("#mensajeName");
    var textoNombre = "<h5 style='color:#FF1493';>Debe ingresar su nombre</h5>";
    var textoNumero = "<h5 style='color:#FF1493';>Los números no son válidos</h5>";
 
    
    if(nombre.val() !=""){
       
        nombre.val(convertirMayus(nombre.val()));
        
        if(/([0-9])/g.test(nombre.val())){
            mensajeName.html(textoNumero);
        } else {
            mensajeName.html("");
        }
    } else {
        mensajeName.html(textoNombre);
    }    
}
//VALIDAR EMAIL
function validateEmail(_evt){
    
    var mensajeEmail = $("#mensajeEmail");
    var textoEmail = "<h5 style='color:#FF1493';>Correo Electrónico Inválido, debe contener ejemplo: hola@dominio.com</h5>";

    if(/([a-zA-Z0-9(-_.)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/g.test(emailX.val())){
        mensajeEmail.html(""); 
    } else {
        if(emailX.val().length >= 0){
            mensajeEmail.html(textoEmail);   
        }
    }
}

function convertirMayus(texto){
    
    var nombreArray = texto.split("");
    var primeraLetra = nombreArray[0];
    var mayuscula = primeraLetra.toUpperCase();
    var espacio = false;

    for(var i=1; i<nombreArray.length; i++) {

        if(espacio){
            mayuscula += nombreArray[i].toUpperCase();
            espacio = false;
        } else {
            mayuscula += nombreArray[i];
            if(nombreArray[i] == " ")
                espacio = true;
        }
    }
    
    return mayuscula;
}
    
function onCheck(){   
    
    if(checkInput.checked){
        return true;
    } else {
        return false;
    }
} 
