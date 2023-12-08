"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/ldr23";
exports.ids = ["pages/api/ldr23"];
exports.modules = {

/***/ "(api)/./src/pages/api/ldr23.tsx":
/*!*********************************!*\
  !*** ./src/pages/api/ldr23.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nvar TESTING = \"DEFAULT\";\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        // Process a POST request\n        const { msg } = req.query;\n        TESTING = msg;\n        res.status(200).json({\n            text: \"DONE\"\n        });\n    } else {\n        // Handle any other HTTP method\n        res.status(200).json({\n            text: TESTING\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xkcjIzLnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBRUEsSUFBSUEsVUFBVTtBQUVDLFNBQVNDLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CO0lBQ3ZFLElBQUlELElBQUlFLFdBQVcsUUFBUTtRQUN6Qix5QkFBeUI7UUFDekIsTUFBTSxFQUFFQyxHQUFHLEVBQUUsR0FBR0gsSUFBSUk7UUFDcEJOLFVBQVdLO1FBQ1hGLElBQUlJLE9BQU8sS0FBS0MsS0FBSztZQUFFQyxNQUFNO1FBQU87SUFDdEMsT0FBTztRQUNMLCtCQUErQjtRQUMvQk4sSUFBSUksT0FBTyxLQUFLQyxLQUFLO1lBQUVDLE1BQU1UO1FBQVE7SUFDdkM7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnNpdGUvLi9zcmMvcGFnZXMvYXBpL2xkcjIzLnRzeD82ZDRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5cbnZhciBURVNUSU5HID0gXCJERUZBVUxUXCJcbiBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIC8vIFByb2Nlc3MgYSBQT1NUIHJlcXVlc3RcbiAgICBjb25zdCB7IG1zZyB9ID0gcmVxLnF1ZXJ5XG4gICAgVEVTVElORyA9IChtc2cgYXMgc3RyaW5nKVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdGV4dDogXCJET05FXCIgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSGFuZGxlIGFueSBvdGhlciBIVFRQIG1ldGhvZFxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdGV4dDogVEVTVElORyB9KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJURVNUSU5HIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm1zZyIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/ldr23.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/ldr23.tsx"));
module.exports = __webpack_exports__;

})();