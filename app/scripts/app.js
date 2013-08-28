/*global define */
define(['geo'], function (geo) {
    'use strict';

    var tracker = new geo.GeoTracker();
    tracker.start();

    return '\'Allo \'Allo!';
});
