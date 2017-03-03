/*function init (){}
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16.457389199999998, lng: -71.5315308},
    zoom:14
  });
    
    var myLatLng = {lat: -16.457389199999998, lng: -71.5315308};

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!',
    icon:'img/'
  });
}*/
function initMap() {
    getLocation();    
  /*map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -14.4571485, lng: -61.532948},
    zoom: 8
  });*/
  // Create a marker and set its position.
    /*for(var i=0;i<=myLatLng1.length;i++){
        
    }*/                      
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var myLatLng = {lat:position.coords.latitude,lon:position.coords.longitude};
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: myLatLng.lat, lng: myLatLng.lon},
    zoom: 8
  });
    
    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: {lat: myLatLng.lat, lng: myLatLng.lon},
        title: 'Hello World!',
        icon:"image/carrin.png"
    });
    
    var myLatLng1 = [
      {lat: -12.1511485, lng: -70.531948},{lat: -15.4521485, lng: -71.532948},{lat: -16.4531485, lng: -74.533948},{lat: -15.4541485, lng: -73.534948},{lat: -16.4571485, lng: -71.532948}];
    for(var i=0;i<=myLatLng1.length;i++){
        var marker1 = new google.maps.Marker({
          map: map,
          position: myLatLng1[i],            
          title: 'Hello World!',
          icon:"image/carrin.png"
        });    
    }    
}

var car = [{"srcImg":"image/carrin.png",
            "typeCar":"Line",
            "seats":"Shared 2 riders max",
            "standbyTime":"3",
            "unitTime":"min"},
           {"srcImg":"image/carrin.png",
            "typeCar":"Lyft",
            "seats":"4 seats",
            "standbyTime":"3",
            "unitTime":"min"},
           {"srcImg":"image/car32.png",
            "typeCar":"Plus",
            "seats":"6 seats",
            "standbyTime":4,
            "unitTime":"min"},
           {"srcImg":"image/car42.png",
            "typeCar":"Premier",
            "seats":"High-end, 4 seats",
            "standbyTime":"3",
            "unitTime":"min"}
           ];
$('#yourPosition').click(function(){ 
        $('#cars').html('');
        for(var i=0;i<=car.length;i++){        
        $('ul').append('<li class="clearfix liCar">'+
               '<a href="#">'+
                    '<img src="'+car[i].srcImg+'" alt="" style="float:left;padding: 20px 0px;" class="text-center">'+            
                    '<div style="float:left;padding: 0px 10px;">'+
                        '<span>'+car[i].typeCar+'</span>'+
                        '<br>'+
                        '<span>'+car[i].seats+'</span>'+
                    '</div>' +
                    '<div style="float:right;padding: 0 10px;" class="text-center">'+
                        '<span>'+car[i].standbyTime+'</span>'+
                        '<br>'+
                        '<span>'+car[i].unitTime+'</span>'+
                    '</div>'+
               '</a>'+                 
            '</li>'); 
    }    
});

$("ul").on("click","li",selectCar);
function selectCar(){
    $("ul").html('');
}