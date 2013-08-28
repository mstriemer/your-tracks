define([], function () {
    function GeoTracker () {
        this.points = [];
    }

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
        newPosition: function (position) {
            console.log(position);
            this.trackPoint(position);
        },
        positionError: function (error) {
            console.log(error);
            this.trackError(error);
        },
        trackPoint: function (point) {
            this.points.push(point);
        },
        trackError: function (error) {
            this.points.push(error);
        },
    };
    return {
        GeoTracker: GeoTracker,
    };
});
