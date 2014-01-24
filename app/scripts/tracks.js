define(['localForage'], function (localForage) {
    'use strict';

    function Track() {
        this.id = 'track-' + new Date().getTime();
        this.saveTimeout = null;
        this.lastSaveTime = null;
        this.points = [];
    };

    Track.prototype = {
        addPoint: function (lat, lon, time) {
            this.points.push({lat: lat, lon: lon, time: time});
            this.setSave();
        },
        setSave: function () {
            if (this.saveTimeout == null) {
                this.saveTimeout = setTimeout(this.save.bind(this), 1000);
            }
        },
        save: function () {
            console.log('saving track ' + this.id);
            localForage.setItem(this.id, this.points).then(function () {
                this.lastSaveTime = new Date();
                this.saveTimeout = null;
            });
        },
    };



    return {
        Track: Track,
    };
});
