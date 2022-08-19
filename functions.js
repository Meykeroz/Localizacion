
navigator.geolocation.getCurrentPosition(geo);

function geo(geolocationPosition){
    
    console.log(geolocationPosition);
    window.coords = geolocationPosition.coords;

    document.getElementById("location").innerHTML = coords.latitude+","+coords.longitude;
}

function search(){
    let destination = document.getElementById("search").value;

    window.open("https://www.google.com/maps/search/?api=1&query="+destination+"mexicali");
}
    
function ingresar_ubicacion(){
   document.getElementById("origin").value = coords.latitude+","+coords.longitude;
}
function route(){
    let origin = document.getElementById("origin").value;
    let destination = document.getElementById("destination").value;

    window.open("https://www.google.com/maps/dir/?api=1&origin="+origin+"&destination="+destination);
}

    if(navigator.userAgent.match(/Android/i) ||
       navigator.userAgent.match(/webOS/i) ||
       navigator.userAgent.match(/iPhone/i) || 
       navigator.userAgent.match(/iPad/i) ||
       navigator.userAgent.match(/BlackBerry/i) ||
       navigator.userAgent.match(/iPod/i) ||
       navigator.userAgent.match(/Windows Phone/i))
       {
        document.getElementById("divice").innerHTML = "Estas utilizando un dispositivo movil.";
       }else{
        document.getElementById("divice").innerHTML = "Estas utilizando un dispositivo de escritorio.";
       }
