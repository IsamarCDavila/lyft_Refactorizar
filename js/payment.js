$(document).ready(init);
function init() {
    console.log("oli");
    $.ajax(
    {
        url: "http://clientes.geekadvice.pe/api/carrera",
        data:{tipo:2}
    }).done(function(_data){
        update(_data);
    });
};

function update(_info){
    $(".foto-perfil").attr("src",_info.conductor.url);
     $("#nuevo").text(_info.conductor.name);
    $("#dolar").text(_info.estimado.moneda+_info.final);
    
}

