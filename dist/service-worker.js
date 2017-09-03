"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["app.7e0a5c3cc5e168a7e31139a690a36528.css","684126647a0713e8295d5bdb76078bf5"],["fonts/MaterialIcons-Regular.012cf6a.woff","012cf6a10129e2275d79d6adac7f3b02"],["img/main-logo.18795d1.png","18795d1094941e7812e11ea93bb60cd7"],["index.html","a4f1915c3e8697ca9d1c711a058e0bb9"],["js/0.78ba9304480d84a84bec.js","93b61c5474792c6d0a08dead276b3e4b"],["js/1.daafd0942f8521ea6106.js","185250eb06fa82e4feb5e38ce15954cf"],["js/2.1d990f367554a6458c57.js","bed3b8b64b58de23cd0de3334754e453"],["js/3.7226d1272e5750bb79c0.js","8c74a7868248bbf47df92d5329f7b869"],["js/4.74882ae76c91e8e7cfb3.js","fa6d462998d71da82dc87bb14d286219"],["js/5.dc3b020bc21aeee5c6dc.js","9f8567e2ead791dd882da21e5287bb19"],["js/6.ecc4b427b6186ad13601.js","9c50b60745088b95c5773376902b5c5c"],["js/7.5efdcac1f78491a633bd.js","c805356b5511860482fe5a65da58594b"],["js/8.fd879fb762a7c910398e.js","5bfa719b6851f3eead31a033d4b7e27b"],["js/app.js","c34be5dd9f355df583340529b5be86d0"],["js/manifest.js","bc74aae7a7e92e398975fd00555d6b39"],["js/vendor.js","58ce34ddfc7f96a49a8688261e5b9c22"],["statics/icons/L.png","43bde24ac6d1fa61a4f150030a659e88"],["statics/icons/apple-icon-152x152.png","43bde24ac6d1fa61a4f150030a659e88"],["statics/icons/favicon-16x16.png","43bde24ac6d1fa61a4f150030a659e88"],["statics/icons/favicon-32x32.png","43bde24ac6d1fa61a4f150030a659e88"],["statics/icons/icon-192x192.png","43bde24ac6d1fa61a4f150030a659e88"],["statics/icons/icon-512x512.png","43bde24ac6d1fa61a4f150030a659e88"],["statics/icons/ms-icon-144x144.png","43bde24ac6d1fa61a4f150030a659e88"],["statics/manifest.json","1a8384458eff2c1248c7195478b73a1d"],["statics/quasar-logo.png","3020c8ac2c2872dec7741e5948520093"]],cacheName="sw-precache-v3-my-quasar-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,n,t){var c=new URL(e);return t&&c.pathname.match(t)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],t=new URL(a,self.location),c=createCacheKey(t,hashParamName,n,!1);return[t.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var t=new Request(n,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+n+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(n,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!a.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),a=urlsToCacheKeys.has(n));a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});