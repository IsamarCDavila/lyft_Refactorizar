function init(){
    createList();
    var listaPaises = $("li"); 
    
    console.log(typeof listaPaises);
  
    listaPaises.each(function(){
        //console.log($(this).find("img").attr("src")); 
        $(this).click(onCountryClick);
    });
}

function createList() {
    var elListCountries = $("#list-countries");
    for(var i in paises){
        var listHtml= 
            '<li id="' + i + '">'+
                '<img class="img-size" src="'+ paises[i].imageURL +'" alt=""><p class="country-name">'+ paises[i].nombre +'</p> <span><strong>+'+ paises[i].phone_code +'</strong></span>'+
            '<hr></li>';
        
        elListCountries.append(listHtml); 
    }
}

function onCountryClick(evt) {
    localStorage.setItem("country_select",evt.currentTarget.id);
    location.href="pais.html";
}

$(document).ready(function () {
 
            (function ($) {
 
                $('#search').keyup(function () {
 
                    var rex = new RegExp($(this).val(), 'i');
                    $('li').hide();
                    $('li').filter(function () {
                        return rex.test($(this).text());
                    }).show();
 
                })
 
            }(jQuery));
});





/*
// ----------------------------------------------- BUSCADOR
var search = $("#search");
var ulListCountries = $("#list-countries");

//var contacto = ulListCountries.getElementsByClassName("country-name");
var contacto = ulListCountries.filter(".country-name");
var forEach = Array.prototype.forEach;

search.keyup(function(e){
   var choice = this.val();
 
   forEach.call(contacto, function(f){
       
       if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
           f.parentNode.style.display = "none";   
       else
          f.parentNode.style.display = "block";        
   });
}, 
false);
*/