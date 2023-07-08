"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 97783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 28530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 54426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 40252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 32196:
/***/ ((module) => {

module.exports = require("next/dist/compiled/ua-parser-js");

/***/ }),

/***/ 14021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 37677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./app/favicon.ico?__next_metadata__
var favicon_next_metadata_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_namespaceObject);
__webpack_require__.d(favicon_next_metadata_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(14664);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./app/favicon.ico?__next_metadata__


const contentType = "image/x-icon"
const buffer = Buffer.from("AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAABILAAASCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAKAAAAGoAAACqAAAA1wAAAPEAAAD7AAAA+wAAAPEAAADXAAAAqgAAAGoAAAAoAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAANQAAAJUAAADeAAAA+wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+wAAAN4AAACVAAAANQAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQAAAIcAAADpAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADpAAAAhwAAABkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAAADBAAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAAwQAAADQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AAAA2AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA2AAAAD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAANcAAAD/AAAA/wAAAP8AAAD/CAgI/xEREf8RERH/EBAQ/wwMDP8LCwv/IyMj/ykpKf8eHh7/CwsL/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA1wAAADQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkAAADAAAAA/wAAAP8AAAD/AAAA/wAAAP9gYGD/0dHR/8/Pz//R0dH/kpKS/1NTU/+5ubn/oqKi/7i4uP/CwsL/a2tr/w4ODv8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAwAAAABkAAAAAAAAAAAAAAAAAAAACAAAAhwAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/3Z2dv////////////////+4uLj/Gxsb/xsbG/8ICAj/JiYm/7W1tf/8/Pz/oqKi/xgYGP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAhwAAAAIAAAAAAAAAAAAAADYAAADoAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/dnZ2/////////////////7m5uf8HBwf/AAAA/wAAAP8AAAD/ODg4/+/v7///////np6e/woKCv8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADoAAAANgAAAAAAAAACAAAAlQAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP91dXX/////////////////ubm5/wcHB/8AAAD/AAAA/wAAAP8hISH/4+Pj///////39/f/WVlZ/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAACVAAAAAgAAACgAAADdAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/3Z2dv////////////////+5ubn/BwcH/wAAAP8AAAD/AAAA/yEhIf/i4uL///////////+4uLj/CgoK/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAN0AAAAoAAAAagAAAPsAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/dnZ2/////////////////7m5uf8HBwf/AAAA/wAAAP8AAAD/IiIi/+Tk5P///////////+jo6P8rKyv/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+wAAAGoAAACqAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP92dnb/////////////////ubm5/wcHB/8AAAD/AAAA/wAAAP8iIiL/4+Pj////////////+Pj4/0ZGRv8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAqgAAANcAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/3Z2dv////////////////+5ubn/BwcH/wAAAP8AAAD/AAAA/x4eHv+ioqL/g4OD/5iYmP/f39//QkJC/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADXAAAA8AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/dnZ2/////////////////7m5uf8HBwf/AAAA/wAAAP8AAAD/BAQE/0RERP+Pj4//fX19/2JiYv8dHR3/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPAAAAD7AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP92dnb/////////////////ubm5/wcHB/8AAAD/AAAA/wAAAP8ZGRn/z8/P////////////e3t7/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+wAAAPsAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/3Z2dv////////////////+5ubn/BwcH/wAAAP8AAAD/AAAA/y0tLf/s7Oz///////39/f9oaGj/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD7AAAA8AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/dnZ2/////////////////8TExP8NDQ3/AAAA/wAAAP8AAAD/QEBA//X19f//////srKy/xMTE/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPAAAADXAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP92dnb////////////+/v7/9PT0/2hoaP8FBQX/AAAA/w0NDf+UlJT//////76+vv8kJCT/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA1wAAAKoAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/Hx8f/7Kysv//////5eXl/4KCgv+QkJD/1tbW/6qqqv+Pj4//v7+//+bm5v+bm5v/Hh4e/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAACqAAAAagAAAPsAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8gICD/bm5u/2pqav9OTk7/gICA/3x8fP8sLCz/WFhY/2xsbP9kZGT/MjIy/wYGBv8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+wAAAGoAAAAoAAAA3QAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP9JSUn/xMTE/9nZ2f//////w8PD/wsLC/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADdAAAAKAAAAAIAAACVAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/19fX/////////////////+7u7v/BwcH/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAJUAAAACAAAAAAAAADYAAADoAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/X19f/////////////////5+fn/8BAQH/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADoAAAANgAAAAAAAAAAAAAAAgAAAIcAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP9fX1/////////////r6+v/RUVF/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAIcAAAACAAAAAAAAAAAAAAAAAAAAGQAAAMAAAAD/AAAA/wAAAP8AAAD/AAAA/1ZWVv/i4uL/wcHB/1VVVf8CAgL/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADAAAAAGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAANcAAAD/AAAA/wAAAP8AAAD/Dg4O/yEhIf8NDQ3/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA1wAAADQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPwAAANgAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAANgAAAA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAMEAAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAADBAAAANAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQAAAIcAAADpAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADpAAAAhwAAABkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAADUAAACVAAAA3gAAAPsAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPsAAADeAAAAlQAAADUAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAoAAAAagAAAKoAAADXAAAA8QAAAPsAAAD7AAAA8QAAANcAAACqAAAAagAAACgAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4AB//4AAH/8AAA/+AAAH/AAAA/gAAAHwAAAA4AAAAGAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAABgAAAAcAAAAPgAAAH8AAAD/gAAB/8AAA//gAAf/+AAf8=", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=%2FUsers%2Fritikbatra%2FDesktop%2Frbatra2000.github.io%2Fapp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/favicon.ico/route","pathname":"/favicon.ico","filename":"favicon","bundlePath":"app/favicon.ico/route"},"resolvedPagePath":"next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!/Users/ritikbatra/Desktop/rbatra2000.github.io/app/favicon.ico?__next_metadata__","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: favicon_next_metadata_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/favicon.ico/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [381,572], () => (__webpack_exec__(37677)));
module.exports = __webpack_exports__;

})();