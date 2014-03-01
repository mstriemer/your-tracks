require.config({
    paths: {},
    shim: {}
});

require(['app'], function (app) {
    'use strict';
    // use app here
    console.log(app);
});
