!function(){define("geo",[],function(){"use strict";function a(){for(var a=Array.prototype.slice.call(arguments,0),b=a.shift(),c=b.length,d=0;c>d;d++)b[d].apply(null,a)}function b(){this.points=[],this.changeCallbacks=[],this.errorCallbacks=[]}return b.prototype={start:function(){this.watchId=navigator.geolocation.watchPosition(this.newPosition.bind(this),this.positionError.bind(this),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},newPosition:function(b){a(this.changeCallbacks,b)},positionError:function(b){a(this.errorCallbacks,b)},on:function(a,b){if("change"===a)this.changeCallbacks.push(b);else{if("error"!==a)throw new Error("unknown event "+a);this.errorCallbacks.push(b)}}},{GeoTracker:b}}),define("app",["geo"],function(a){"use strict";var b=document.querySelector(".current-track tbody"),c=new a.GeoTracker;return c.start(),c.on("change",function(a){var c=document.createElement("tr"),d=document.createElement("td"),e=document.createElement("td"),f=document.createElement("td");d.appendChild(document.createTextNode(new Date(a.timestamp))),e.appendChild(document.createTextNode(a.coords.latitude)),f.appendChild(document.createTextNode(a.coords.longitude)),c.appendChild(d),c.appendChild(e),c.appendChild(f),b.appendChild(c)}),"'Allo 'Allo!"}),require.config({paths:{geo:"geo"},shim:{}}),require(["app"],function(a){"use strict";console.log(a)}),define("main",function(){})}();