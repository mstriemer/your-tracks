define('map', ['leaflet'], function (L) {
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('http://{s}.tile.cloudmade.com/8503485b6f7d48c0a15daa5ffcdd2956/997/256/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18
    }).addTo(map);

    return {
        setView: map.setView.bind(map),
        marker: function (pos) {
            L.marker(pos).addTo(map);
        },
    };
});
