require.config({
    paths: {
        geo: 'geo',
        tracks: 'tracks',
        localForage: 'localForage',
    },
    shim: {
    }
});

require(['app'], function (app) {
    'use strict';
    // use app here
    console.log(app);
});
