define(['localForage'], function (localForage) {
    'use strict';

    function Track() {
        this.id = 'track-' + new Date().getTime();
        this.addedToTracks = false;
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
            localForage.setItem(this.id, this.points).then(function (tracks) {
                this.lastSaveTime = new Date();
                this.saveTimeout = null;
                console.log('updated last save');
            }.bind(this));
            if (!this.addedToTracks) {
                this.addedToTracks = true;
                // This seems like a genuinely bad idea...
                localForage.getItem('tracks').then(function (tracks) {
                    tracks = tracks || [];
                    tracks.push(this.id);
                    localForage.setItem('tracks', tracks);
                    console.log('updated tracks');
                }.bind(this));
            }
        },
    };



    return {
        Track: Track,
    };
});
