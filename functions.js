
function redirect(){
    navigator.geolocation.getCurrentPosition(geo);
}
    
function geo(geolocationPosition){
    
    console.log(geolocationPosition);
    let coords = geolocationPosition.coords;

    window.open("https://www.google.com/maps/dir/'"+coords.latitude+","+coords.longitude+"'/'32.662785919276786,-115.49542096026951'");
}