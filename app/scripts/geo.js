/*global define */
define([], function () {
    'use strict';

    function notify() {
        var args = Array.prototype.slice.call(arguments, 0);
        var callbacks = args.shift();
        var count = callbacks.length;
        for (var i = 0; i < count; i++) {
            callbacks[i].apply(null, args);
        }
    }

    function GeoTracker () {
        this.points = [];
        this.changeCallbacks = [];
        this.errorCallbacks = [];
    }

    var exports = {};

    GeoTracker.prototype = {
        start: function () {
            this.watchId = navigator.geolocation.watchPosition(
                this.newPosition.bind(this),
                this.positionError.bind(this),
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0,
                });
        },
        stop: function () {
            navigator.geolocation.clearWatch(this.watchId);
            this.watchId = null;
        },
        newPosition: function (position) {
            exports.currentPosition = position;
            notify(this.changeCallbacks, position);
        },
        positionError: function (error) {
            notify(this.errorCallbacks, error);
        },
        on: function(name, callback) {
            if (name === 'change') {
                this.changeCallbacks.push(callback);
            } else if (name === 'error') {
                this.errorCallbacks.push(callback);
            } else {
                throw new Error('unknown event ' + name);
            }
        },
    };

    exports.GeoTracker = GeoTracker;

    return exports;
});
