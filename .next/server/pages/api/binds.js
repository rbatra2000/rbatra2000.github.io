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
exports.id = "pages/api/binds";
exports.ids = ["pages/api/binds"];
exports.modules = {

/***/ "(api)/./src/pages/api/binds.tsx":
/*!*********************************!*\
  !*** ./src/pages/api/binds.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nvar sharedTxt = \"hi b, i love you\";\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        // Process a POST request\n        const { msg } = req.query;\n        sharedTxt = msg;\n        res.status(200).json({\n            msg: \"MESSAGE SENT!!\"\n        });\n    } else {\n        // Handle any other HTTP method\n        var dateObj = new Date();\n        var time = dateObj.toLocaleTimeString([], {\n            weekday: \"short\",\n            hour: \"2-digit\",\n            minute: \"2-digit\",\n            timeZone: \"EST\"\n        });\n        res.status(200).json({\n            msg: sharedTxt,\n            time\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2JpbmRzLnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBRUEsSUFBSUEsWUFBWTtBQUVELFNBQVNDLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CO0lBQ3ZFLElBQUlELElBQUlFLFdBQVcsUUFBUTtRQUN6Qix5QkFBeUI7UUFDekIsTUFBTSxFQUFFQyxHQUFHLEVBQUUsR0FBR0gsSUFBSUk7UUFDcEJOLFlBQWFLO1FBQ2JGLElBQUlJLE9BQU8sS0FBS0MsS0FBSztZQUFFSCxLQUFLO1FBQWlCO0lBQy9DLE9BQU87UUFDTCwrQkFBK0I7UUFDL0IsSUFBSUksVUFBVSxJQUFJQztRQUNsQixJQUFJQyxPQUFPRixRQUFRRyxtQkFBbUIsRUFBRSxFQUFFO1lBQUNDLFNBQVM7WUFBU0MsTUFBTTtZQUFXQyxRQUFRO1lBQVdDLFVBQVU7UUFBSztRQUNoSGIsSUFBSUksT0FBTyxLQUFLQyxLQUFLO1lBQUVILEtBQUtMO1lBQVdXO1FBQUs7SUFDOUM7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnNpdGUvLi9zcmMvcGFnZXMvYXBpL2JpbmRzLnRzeD85NDJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5cbnZhciBzaGFyZWRUeHQgPSBcImhpIGIsIGkgbG92ZSB5b3VcIlxuIFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgLy8gUHJvY2VzcyBhIFBPU1QgcmVxdWVzdFxuICAgIGNvbnN0IHsgbXNnIH0gPSByZXEucXVlcnlcbiAgICBzaGFyZWRUeHQgPSAobXNnIGFzIHN0cmluZylcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1zZzogXCJNRVNTQUdFIFNFTlQhIVwiIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIEhhbmRsZSBhbnkgb3RoZXIgSFRUUCBtZXRob2RcbiAgICB2YXIgZGF0ZU9iaiA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIHRpbWUgPSBkYXRlT2JqLnRvTG9jYWxlVGltZVN0cmluZyhbXSwge3dlZWtkYXk6ICdzaG9ydCcsIGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcsIHRpbWVab25lOiBcIkVTVFwifSlcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1zZzogc2hhcmVkVHh0LCB0aW1lIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbInNoYXJlZFR4dCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJtc2ciLCJxdWVyeSIsInN0YXR1cyIsImpzb24iLCJkYXRlT2JqIiwiRGF0ZSIsInRpbWUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJ3ZWVrZGF5IiwiaG91ciIsIm1pbnV0ZSIsInRpbWVab25lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/binds.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/binds.tsx"));
module.exports = __webpack_exports__;

})();