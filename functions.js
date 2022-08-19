
function redirect(){
    navigator.geolocation.getCurrentPosition(geo);
}
    
function geo(geolocationPosition){
    
    console.log(geolocationPosition);
    let coords = geolocationPosition.coords;

    window.open("https://www.google.com/maps/dir/?api=1&origin="+coords.latitude+","+coords.longitude+"&destination=32.662785919276786, -115.49542096026951");
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
