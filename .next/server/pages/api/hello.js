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
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "(api)/./src/pages/api/hello.tsx":
/*!*********************************!*\
  !*** ./src/pages/api/hello.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nvar TESTING = \"HI\";\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        // Process a POST request\n        TESTING = \"WHAT\";\n        res.status(200).json({\n            text: \"DONE\"\n        });\n    } else {\n        // Handle any other HTTP method\n        res.status(200).json({\n            text: TESTING\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2hlbGxvLnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBRUEsSUFBSUEsVUFBVTtBQUVDLFNBQVNDLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CO0lBQ3ZFLElBQUlELElBQUlFLFdBQVcsUUFBUTtRQUN6Qix5QkFBeUI7UUFDekJKLFVBQVU7UUFDVkcsSUFBSUUsT0FBTyxLQUFLQyxLQUFLO1lBQUVDLE1BQU07UUFBTztJQUN0QyxPQUFPO1FBQ0wsK0JBQStCO1FBQy9CSixJQUFJRSxPQUFPLEtBQUtDLEtBQUs7WUFBRUMsTUFBTVA7UUFBUTtJQUN2QztBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Vic2l0ZS8uL3NyYy9wYWdlcy9hcGkvaGVsbG8udHN4PzViZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcblxudmFyIFRFU1RJTkcgPSBcIkhJXCJcbiBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIC8vIFByb2Nlc3MgYSBQT1NUIHJlcXVlc3RcbiAgICBURVNUSU5HID0gXCJXSEFUXCJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRleHQ6IFwiRE9ORVwiIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIEhhbmRsZSBhbnkgb3RoZXIgSFRUUCBtZXRob2RcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHRleHQ6IFRFU1RJTkcgfSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiVEVTVElORyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/hello.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/hello.tsx"));
module.exports = __webpack_exports__;

})();