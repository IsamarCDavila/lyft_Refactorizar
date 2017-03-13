function init(){
    createList();
    var listaPaises = $("li");
    
    listaPaises.each(function(){
        $(this).click(onCountryClick);
    })
    
    /*for(var i=0; i<listaPaises.length-1; i++){
        listaPaises[i].addEventListener("click",onCountryClick);
    }*/
    
    //buscador();
}

function createList() {
    var elListCountries = $("#list-countries");
    for(var i in paises){
        var listHtml= 
            '<li id="' + i + '">'+
                '<img class="img-size" src="'+ paises[i].imageURL +'" alt=""><p class="country-name">'+ paises[i].nombre +'</p> <span><strong>+'+ paises[i].phone_code +'</strong></span>'+
            '<hr></li>';
        
        //elListCountries.innerHTML += listHtml;
        elListCountries.append(listHtml);
    }
}

// ----------------------------------------------- BUSCADOR

/*function buscador(){

    var search = $("#search"); // objeto input
    var ulListCountries = $("#list-countries"); //objeto ul
    var contacto = ulListCountries.children(); //objeto array de li
    var forEach = Array.prototype.forEach; // funcion forEach

    search[0].addEventListener("keyup", function(e){
        var choice = this.value; // valor del input, las letras que se ingresen
        
        forEach.call(contacto, function(f){ // f es el primer li
            var contenidoPais= f.getElementsByTagName('p')[0].innerHTML; // afganistan text()
            
            if (contenidoPais.toLowerCase().search(choice.toLowerCase()) == -1)
                f.style.display = "none";   
            else
                f.style.display = "block";        
        });
    });//parametro default de addEventListener
    
}*/

// ----------------------------------------------- BUSCADOR
function contains(text_one, text_two) {
    if(text_one.indexOf(text_two) != -1)
        return true; //si no hace match
}
$("#search").keyup(function(){
    var inputSearch = $("#search").val().toLowerCase();
    //console.log(inputSearch);
    $('ul li').each(function(){
        //console.log($(this).find('p').html());
        var porfi = $(this).find('p').html();// pais alemania el TEXTO
        if(!contains(porfi.toLowerCase(), inputSearch)){
            $(this).hide();
        }
        else{
            $(this).show();
        }
    });
});














