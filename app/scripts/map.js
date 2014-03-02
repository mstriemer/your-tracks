define('map', ['leaflet'], function (L) {
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('http://{s}.tile.cloudmade.com/8503485b6f7d48c0a15daa5ffcdd2956/997/256/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18
    }).addTo(map);

    var currentPositionMarker;
    var currentPath = L.polyline([]).addTo(map);

    var self = {
        setView: function (lat, lon, zoom) {
            map.setView([lat, lon], zoom || 16);
        },
        marker: function (lat, lon) {
            return L.marker([lat, lon]).addTo(map);
        },
        addToPath: function (lat, lon) {
            currentPath.addLatLng([lat, lon]);
        },
        currentPosition: function (lat, lon) {
            self.setView(lat, lon);
            if (currentPositionMarker) {
                currentPositionMarker.setLatLng([lat, lon]);
            } else {
                currentPositionMarker = self.marker(lat, lon);
            }
            self.addToPath(lat, lon);
        },
    };
    return self;
});
