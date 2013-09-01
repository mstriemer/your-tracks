/*global define */
define(['geo'], function (geo) {
    'use strict';

    var container = document.querySelector('.current-track tbody');
    var tracker = new geo.GeoTracker();

    tracker.start();
    tracker.on('change', function (position) {
        var row = document.createElement('tr');
        var time = document.createElement('td');
        var lat = document.createElement('td');
        var lon = document.createElement('td');

        time.appendChild(document.createTextNode(new Date(position.timestamp)));
        lat.appendChild(document.createTextNode(position.coords.latitude));
        lon.appendChild(document.createTextNode(position.coords.longitude));

        row.appendChild(time);
        row.appendChild(lat);
        row.appendChild(lon);
        container.appendChild(row);
    });

    return '\'Allo \'Allo!';
});
