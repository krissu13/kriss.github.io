!function i(a,l,s){function c(t,e){if(!l[t]){if(!a[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(u)return u(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var r=l[t]={exports:{}};a[t][0].call(r.exports,function(e){return c(a[t][1][e]||e)},r,r.exports,i,a,l,s)}return l[t].exports}for(var u="function"==typeof require&&require,e=0;e<s.length;e++)c(s[e]);return c}({1:[function(e,t,o){"use strict";function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var r=function(){function i(e,t,o){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),a(this,"getRenderModel",function(){return{}}),a(this,"triggerWindowEvent",function(){n.recheckMode&&n.recheckMode()}),this.isRuntimeSite=t.isRuntimeSite,this.builderApi=e,this.currentElementWidth=0,this.checkTimeout=0;var r=!this.editor&&window.self!==window.top;this.resizeWaitTimeout=r?0:300,"undefined"!=typeof window&&(window._zoomUpdateEvents=window._zoomUpdateEvents||[],window._zoomUpdateEvents.push(this.triggerWindowEvent))}return function(e,t,o){t&&n(e.prototype,t),o&&n(e,o)}(i,[{key:"registerWindowEvent",value:function(){}},{key:"unregisterWindowEvent",value:function(){if("undefined"!=typeof window&&window._zoomUpdateEvents){var e=window._zoomUpdateEvents.indexOf(this.triggerWindowEvent);0<=e&&window._zoomUpdateEvents.splice(e,1)}}},{key:"dispose",value:function(){this.recheckMode=null,this.unregisterWindowEvent()}},{key:"afterRender",value:function(e,t){var o=this,n=t.querySelector(".navigation")||t,r=n.querySelectorAll("li");(r||r.length)&&(this.checkMobileMode(n),this.setHeaderHeight(e,t),window.addEventListener("resize",function(){o.__resizeTimeout&&window.clearTimeout(o.__resizeTimeout),o.__resizeTimeout=window.setTimeout(function(){o.checkMobileMode(n),o.setHeaderHeight(e,t)},o.resizeWaitTimeout)}),this.recheckMode=this.builderApi.debounce(function(){o.checkMobileMode(n),o.setHeaderHeight(e,t)},300))}},{key:"setHeaderHeight",value:function(e,t){if(!e.model.cover&&this.isRuntimeSite&&t.parentElement){var o=t.parentElement.querySelector(".header-container");if(o){var n=t.parentElement.querySelector(".kv-check-scroll");if(!n)return;var r,i=n.clientHeight,a=n.children[0].clientHeight;r=n===o?a:Math.max(i,a),o.style.minHeight="".concat(r,"px")}}}},{key:"getNavigationWidth",value:function(e){var t=0;return e.forEach(function(e){t+=e.offsetWidth}),t+40}},{key:"determineContainerWidth",value:function(e,t){var o=e.querySelector("nav")||e,n=e.querySelector('[data-dynamic-navigation-element="logo"]'),r=e.querySelector('[data-dynamic-navigation-element="calltoactionbutton"]'),i=r?r.offsetWidth:0,a=n?n.offsetWidth:0,l=o.offsetWidth-i;return{containerSize:l,logoWidth:a,ctaWidth:i,headerWith:e.offsetWidth,navigationToWide:t+a+i>=e.offsetWidth-20,headerToWide:l+a>=e.offsetWidth}}},{key:"shouldMinimizeMenu",value:function(e){if(window.innerWidth<991)return!0;var t=e.querySelectorAll("li");this.currentElementWidth=this.getNavigationWidth(t);var o=this.determineContainerWidth(e,this.currentElementWidth),n=o.containerSize,r=o.headerToWide,i=o.navigationToWide;return n<100||r||i}},{key:"checkMobileMode",value:function(e){var t=document.querySelector("section")||e,o=document.querySelector(".check-mobile");if(o=o||e,window.innerWidth<991)o.classList.contains("mobile")||o.classList.add("mobile");else{o.classList.remove("mobile");var n=this.shouldMinimizeMenu(t),r=o.classList;n&&r.add("mobile"),n||r.remove("mobile")}}},{key:"updateProperty",value:function(){}}]),i}();window.__features=window.__features||{},window.__features.navigation=r},{}]},{},[1]),function i(a,l,s){function c(t,e){if(!l[t]){if(!a[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(u)return u(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var r=l[t]={exports:{}};a[t][0].call(r.exports,function(e){return c(a[t][1][e]||e)},r,r.exports,i,a,l,s)}return l[t].exports}for(var u="function"==typeof require&&require,e=0;e<s.length;e++)c(s[e]);return c}({1:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={country:"United States",state:"PA",city:"Philadelphia",street:"1336 North 3rd Street",zip:"12346",isDefault:!0,coordinate:{lat:40.7127753,lng:-74.0059728}};o.default=n},{}],2:[function(e,t,o){"use strict";function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.callbackName="_GoogleMapsFeatureApi.mapLoaded",window._GoogleMapsFeatureApi=this,window._GoogleMapsFeatureApi.mapLoaded=this.mapLoaded.bind(this)}return function(e,t,o){t&&n(e.prototype,t),o&&n(e,o)}(e,[{key:"load",value:function(o){var n=this;return this.promise||(this.promise=new Promise(function(e){if(n.resolve=e,void 0===window.google&&document&&document.createElement){var t=document.createElement("script");t.src="//maps.googleapis.com/maps/api/js?key=".concat(o,"&libraries=places&callback=").concat(n.callbackName,"&v=3.35"),t.async=!0,t.defer=!0,document.body.append(t)}else n.resolve()})),this.promise}},{key:"mapLoaded",value:function(){this.resolve&&this.resolve()}}]),e}());o.default=r},{}],3:[function(e,t,o){"use strict";var b=n(e("./default-address")),s=n(e("./google-maps-api"));function n(e){return e&&e.__esModule?e:{default:e}}function _(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}window.__features=window.__features||{},window.__features.googlemaps=function(u,d){function f(){return!1!==d.model.isInteractiveMap}function p(t){return new Promise(function(n,r){if(t.coordinate)n(t.coordinate);else{var e=function(e){return((e||"").street||"").toLowerCase().split(new RegExp(["#","apt","bsmt","bldg","blvd","dept","fl","frnt","hngr","key","lbby","lot","lowr","ofc","ph","pier","rear","rm","side","slip","spc","stop","ste","trlr","unit","uppr"].join(" | "),"g"))[0]+"\n"+(e.city||"")+" "+(e.zip||"")+" "+(e.state||"")+"\n"+(e.country||"")}(t);(new a.Geocoder).geocode({address:e},function(e,t){if(t===a.GeocoderStatus.OK){var o=e[0].geometry.location.toJSON();n(o)}else r(t)})}})}function c(e,t){return t&&(e&&(e+=","),e+=t.replace(/\s/g,"+")),e}var r,m=!u.editor,e=d.view.controller.parentController,y="poi"===e.model.category||e.model.locations,t=u.storage.siteController.model.apiKeys,o=t&&t.googleMapsApiKey?t.googleMapsApiKey:"AIzaSyB9h1UbkBdHO94Lkl-3vCMCpdIDeIKP_nA",n=t&&(t.googleMapsGeoApiKey||t.googleMapsApiKey),i="https://maps.googleapis.com/maps/api/staticmap?key=".concat(o),a={},g=-1,h=function(e){var t=e.element,o="".concat(i,"&zoom=15&size=640x640&scale=2&center=").concat(b.default.coordinate.lat,",").concat(b.default.coordinate.lng),n=document.createElement("div");n.classList.add("maps-preview-image"),n.style="background-image:url('".concat(o,"');width:100%;height:100%;background-size:cover;background-position:center;"),t.replaceWith(n)},v=function(e,t,o){var n=m?0:300;r&&window.clearTimeout(r),r=window.setTimeout(function(){return l(e,t,o)},n)},l=function(e,t,o){var n="";n=c(n,e.street),n=c(n,e.zip),n=c(n,e.state),n=c(n,e.city),n=(n=c(n,e.country))||"new+york";var r=o.mapTypeEmbed||o.mapType,i=r&&"roadmap"!==r?"satellite":"roadmap",a=o.zoomLevel||14,l="https://components.mywebsitebuilder.com/extern/maps-app/embed-place-express.html?q=".concat(n,"&zoom=").concat(a,"&mapType=").concat(i,"&center=none"),s=document.createElement("iframe");s.src=l,s.style="width: 100%; height: 100%; border: none;",t.replaceWith(s)},w=function(e){if(e.hasOwnProperty("globalLocationId")&&e.global.hasOwnProperty("locations"))return e.global.locations[e.globalLocationId];if(e.global.hasOwnProperty("address")&&0<Object.keys(e.global.address).length)return e.global;if(!e.global.hasOwnProperty("globalLocationId")&&e.global.hasOwnProperty("locations"))return e.global.locations[1];if(e.global.hasOwnProperty("globalLocationId")&&e.global.hasOwnProperty("locations")){var t=e.global.locations[e.global.globalLocationId];return t&&t.address||e.global.locations[1]}};return{getLoadPromise:function(){return y&&n?new Promise(function(e){return s.default.load(n).then(function(){e(),a=window.google.maps})}):new Promise(function(e){e()})},afterRender:function(e,t,o){if(f()){e.hasOwnProperty("data")||(e.data={}),y&&!o.locations&&(o.locations=[b.default]);var n=null!==t.closest(".left-section-panel"),r=t.querySelector('*[data-type="googlemaps"]');if(e.data.minZoomLevel=null,!n&&y){var i=window._site&&window._site.partnerId||0,a="https://components.mywebsitebuilder.com/extern/maps-app/poi-express".concat(100<=i?"-"+i:"",".html"),l=o._sectionId+"_"+Date.now();r.onload=function(){(function(r,i){return new Promise(function(t,o){var n=JSON.stringify(i),e=r.data.hasOwnProperty("locations")?r.data.locations:"";n===e&&r.data.hasOwnProperty("results")?t(r.data.results):Promise.all(i.map(function(e){return p(e)})).then(function(e){t(e),r.data.results=e,r.data.locations=n}).catch(function(e){o(e)})})})(e,o.locations).then(function(e){e&&r.contentWindow.postMessage(JSON.stringify({mapData:{locations:o.locations,zoomLevel:o.zoomLevel,isRuntimeSite:m,mapType:o.mapType,grayscale:o.grayscale,zoomControl:o.zoomControl,id:l}}),"*")}).catch(function(e){console.error("GoogleMapsError",e)})},window.addEventListener("message",function(e){try{if(a.includes(e.origin)){var t=JSON.parse(e.data);t.id&&t.id===l&&t.zoomLevel&&function(e){var t;(null===(t=d.view.domElement)||void 0===t?void 0:t.closest("section").classList.contains("kv-selected"))&&g!==e&&u.editor&&u.editor.storeModelProperty("zoomLevel",e),g=e}(t.zoomLevel)}}catch(e){console.error(e)}}),r.src=a}if(d.isThumbnail)h({element:r});else if(!(o.hasOwnProperty("locations")&&0<o.locations.length)){var s=function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(e){_(t,e,o[e])})}return t}({},b.default);if(!y){var c=w(o);c&&c.address&&0<Object.keys(c.address).length&&(s=c.address)}v(s,r,o)}}},updateProperty:function(e,t,o){var n=f();if(null==o||!n)return!1;if(y){var r=e.element.querySelector('*[data-type="googlemaps"]');return!!["zoomLevel","mapType","grayscale","zoomControl"].includes(t)&&(r.contentWindow.postMessage(JSON.stringify({settings:{property:t,value:o}}),"*"),!0)}return!1}}}},{"./default-address":1,"./google-maps-api":2}]},{},[3]),function i(a,l,s){function c(t,e){if(!l[t]){if(!a[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(u)return u(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var r=l[t]={exports:{}};a[t][0].call(r.exports,function(e){return c(a[t][1][e]||e)},r,r.exports,i,a,l,s)}return l[t].exports}for(var u="function"==typeof require&&require,e=0;e<s.length;e++)c(s[e]);return c}({1:[function(e,t,o){"use strict";var n,f=(n=e("./styles/grayScale"))&&n.__esModule?n:{default:n};function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}window.__features=window.__features||{},window.__features["googlemaps-static"]=function(n,r){function i(e,t,o,n){var r=e||[];"string"==typeof r&&(r=JSON.parse(r));var i="https://maps.googleapis.com/maps/api/staticmap?size=".concat(640,"x").concat(640,"&scale=").concat(2);function a(e,t){i+="&".concat(e,"=").concat(encodeURIComponent(t))}var l=r.map(function(e){return e.coordinate.lat}),s=(Math.min.apply(null,l)+Math.max.apply(null,l))/2,c=r.map(function(e){return e.coordinate.lng});function u(e,t){return"".concat(e,",").concat(t)}return a("center",u(s,(Math.min.apply(null,c)+Math.max.apply(null,c))/2)),a("zoom",t||14),a("maptype",o||"roadmap"),n&&a("style",JSON.stringify(f.default)),r.forEach(function(e){var t="default_green"===e.marker?"green":"red";a("markers","markers=color:".concat(t,"|label:|").concat(u(e.coordinate.lat,e.coordinate.lng))),a("key",d)}),i}var e=n.storage.siteController.model.apiKeys,d=e&&e.googleMapsApiKey?e.googleMapsApiKey:"AIzaSyB9h1UbkBdHO94Lkl-3vCMCpdIDeIKP_nA";return{afterRender:function(e,t,o){!1===r.model.isInteractiveMap&&n.editor&&!r.isThumbnail&&n.editor.storeModelProperty("mapUrl",o.locations?i(o.locations,o.zoomLevel,o.mapType,o.grayscale):"")},getRenderModel:function(e){return e&&e.locations?function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(e){a(t,e,o[e])})}return t}({},e,{mapUrl:i(e.locations,e.zoom,e.mapTypeId)}):e}}}},{"./styles/grayScale":2}],2:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=[{featureType:"administrative",elementTypeelementType:"all",stylersstylers:[{saturation:"-100"}]},{featureType:"administrative.province",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"all",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",elementType:"all",stylers:[{saturation:-100},{lightness:"50"},{visibility:"simplified"}]},{featureType:"road",elementType:"all",stylers:[{saturation:"-100"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"all",stylers:[{lightness:"30"}]},{featureType:"road.local",elementType:"all",stylers:[{lightness:"40"}]},{featureType:"transit",elementType:"all",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]},{featureType:"water",elementType:"labels",stylers:[{lightness:-25},{saturation:-100}]}];o.default=n},{}]},{},[1]),window._featureSettings={navigation:{settings:{}},googlemaps:{settings:{}},"googlemaps-static":{settings:{}}};