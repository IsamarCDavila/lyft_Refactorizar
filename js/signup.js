var botonFlag = $("#btn-flag");
botonFlag.on("click",onFlagClick);

function onFlagClick() {
    //window.location.href="paises.html";
    $(location).attr("href","paises.html");
}


function init()
{
    var imgFlag = $("#img-flag");
    var codeFlag = $("#code-flag").text(+51);
    
    var select = localStorage.getItem('country_select'); 
    
    var country_url = paises[select].imageURL;
    var country_code = paises[select].phone_code;
    
    //imgFlag.src=country_url;
    imgFlag.attr("src",country_url);
    codeFlag.text(country_code);
    
    // ------------------------- CODIGO
    var button = $("#next");
    button.click(onButtonClick);
}

// --------------------------------------
var inputNumber =$("#number");


function onButtonClick() {
    
    localStorage.setItem('Number', inputNumber.val());
    
    var mensajeNumber = $("#mensajeNumber");
    
    if(inputNumber.val() == '') {
        mensajeNumber.html("<br><h5 class='text-center' style='color:#FF1493';>Debes escribir tu número telefónico</h5>")
    } else {
        mensajeNumber.html('');
        onCode();
        //location.href = 'signame.html';
        $(location).attr("href","signame.html");
    }
}

function onCode() {

    var lab = "LAB-";
    var aleatorio = Math.floor((Math.random()*999)+100);
    var concat = (lab += aleatorio);
    alert("Tu código de usuario es : " + concat);
}


function validateNumber(_evt){
    
    number = window.event.keyCode;


    if((number>=48 && number<=57)|| number==8 || number==32){
            
    } else {
        
        _evt.preventDefault();
    }     
} 