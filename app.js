function initMap() {
    var location = { lat: 56.038156, lng: 12.699196 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location
    });
}