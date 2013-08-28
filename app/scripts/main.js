require.config({
    paths: {
        geo: 'geo',
    },
    shim: {
    }
});

require(['app'], function (app) {
    'use strict';
    // use app here
    console.log(app);
});
