"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/binds",{

/***/ "./src/pages/binds.tsx":
/*!*****************************!*\
  !*** ./src/pages/binds.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Switch/Switch.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/styled.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/system/esm/colorManipulator.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/colors */ \"./node_modules/@mui/material/colors/yellow.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst label = {\n    inputProps: {\n        \"aria-label\": \"Switch demo\"\n    }\n};\nconst YellowSwitch = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((param)=>{\n    let { theme } = param;\n    return {\n        \"& .MuiSwitch-switchBase.Mui-checked\": {\n            color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__[\"default\"][600],\n            \"&:hover\": {\n                backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.alpha)(_mui_material_colors__WEBPACK_IMPORTED_MODULE_4__[\"default\"][600], theme.palette.action.hoverOpacity)\n            }\n        },\n        \"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track\": {\n            backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_4__[\"default\"][600]\n        }\n    };\n});\n_c = YellowSwitch;\nfunction Profile() {\n    _s();\n    const [green, handleGreen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [yellow, handleYellow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [red, handleREd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        container: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                xs: 12,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    paragraph: true,\n                    children: \"hey dum, i miss you a lot so i made this really lame website lol. and ngl i just wanted another way to be on your wall ❤️\"\n                }, void 0, false, {\n                    fileName: \"/Users/ritikbatra/Desktop/rbatra2000.github.io/src/pages/binds.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ritikbatra/Desktop/rbatra2000.github.io/src/pages/binds.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        id: \"standard-basic\",\n                        label: \"message\",\n                        variant: \"standard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ritikbatra/Desktop/rbatra2000.github.io/src/pages/binds.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        ...label,\n                        color: \"success\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/ritikbatra/Desktop/rbatra2000.github.io/src/pages/binds.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(YellowSwitch, {\n                        ...label,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/ritikbatra/Desktop/rbatra2000.github.io/src/pages/binds.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        ...label,\n                        color: \"error\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/ritikbatra/Desktop/rbatra2000.github.io/src/pages/binds.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ritikbatra/Desktop/rbatra2000.github.io/src/pages/binds.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    variant: \"contained\",\n                    children: \"send!!\"\n                }, void 0, false, {\n                    fileName: \"/Users/ritikbatra/Desktop/rbatra2000.github.io/src/pages/binds.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ritikbatra/Desktop/rbatra2000.github.io/src/pages/binds.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ritikbatra/Desktop/rbatra2000.github.io/src/pages/binds.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Profile, \"n13eoNaEI2eBuyXn6IYCkxw/HHY=\");\n_c1 = Profile;\nvar _c, _c1;\n$RefreshReg$(_c, \"YellowSwitch\");\n$RefreshReg$(_c1, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmluZHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRFO0FBQ3ZCO0FBQ1A7QUFDZjtBQUUvQixNQUFNUyxRQUFRO0lBQUVDLFlBQVk7UUFBRSxjQUFjO0lBQWM7QUFBRTtBQUU1RCxNQUFNQyxlQUFlTCxnRUFBTUEsQ0FBQ0YscURBQU1BLEVBQUU7UUFBQyxFQUFFUSxLQUFLLEVBQUU7V0FBTTtRQUNoRCx1Q0FBdUM7WUFDckNDLE9BQU9OLDREQUFNLENBQUMsSUFBSTtZQUNsQixXQUFXO2dCQUNUTyxpQkFBaUJULDJEQUFLQSxDQUFDRSw0REFBTSxDQUFDLElBQUksRUFBRUssTUFBTUcsUUFBUUMsT0FBT0M7WUFDM0Q7UUFDRjtRQUNBLDBEQUEwRDtZQUN4REgsaUJBQWlCUCw0REFBTSxDQUFDLElBQUk7UUFDOUI7SUFDRjtBQUFBO0tBVklJO0FBWVMsU0FBU087O0lBQ3BCLE1BQU0sQ0FBQ0MsT0FBT0MsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUN0QyxNQUFNLENBQUNELFFBQVFjLGFBQWEsR0FBR2IsK0NBQVFBLENBQUM7SUFDeEMsTUFBTSxDQUFDYyxLQUFLQyxVQUFVLEdBQUdmLCtDQUFRQSxDQUFDO0lBRXBDLHFCQUNFLDhEQUFDTCxxREFBSUE7UUFBQ3FCLFNBQVM7OzBCQUNiLDhEQUFDckIscURBQUlBO2dCQUFDc0IsSUFBSTswQkFDUiw0RUFBQ3ZCLHFEQUFVQTtvQkFBQ3dCLFNBQVM7OEJBQUM7Ozs7Ozs7Ozs7OzBCQU14Qiw4REFBQ3ZCLHFEQUFJQTs7a0NBQ0gsOERBQUNGLHFEQUFTQTt3QkFBQzBCLElBQUc7d0JBQWlCbEIsT0FBTTt3QkFBVW1CLFNBQVE7Ozs7OztrQ0FDdkQsOERBQUN4QixxREFBTUE7d0JBQUUsR0FBR0ssS0FBSzt3QkFBRUksT0FBTTt3QkFBVWdCLFVBQVVDOzs7Ozs7a0NBQzdDLDhEQUFDbkI7d0JBQWMsR0FBR0YsS0FBSzt3QkFBSW9CLFVBQVVDOzs7Ozs7a0NBQ3JDLDhEQUFDMUIscURBQU1BO3dCQUFFLEdBQUdLLEtBQUs7d0JBQUVJLE9BQU07d0JBQVFnQixVQUFVQzs7Ozs7Ozs7Ozs7OzBCQU03Qyw4REFBQzNCLHFEQUFJQTswQkFDSCw0RUFBQ0gscURBQU1BO29CQUFDNEIsU0FBUTs4QkFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcEM7R0E3QndCVjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYmluZHMudHN4P2ZjNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBUZXh0RmllbGQsIFR5cG9ncmFwaHksIEdyaWQsIFN3aXRjaCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBhbHBoYSwgc3R5bGVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IHsgeWVsbG93IH0gZnJvbSAnQG11aS9tYXRlcmlhbC9jb2xvcnMnO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBsYWJlbCA9IHsgaW5wdXRQcm9wczogeyAnYXJpYS1sYWJlbCc6ICdTd2l0Y2ggZGVtbycgfSB9O1xuXG5jb25zdCBZZWxsb3dTd2l0Y2ggPSBzdHlsZWQoU3dpdGNoKSgoeyB0aGVtZSB9KSA9PiAoe1xuICAgICcmIC5NdWlTd2l0Y2gtc3dpdGNoQmFzZS5NdWktY2hlY2tlZCc6IHtcbiAgICAgIGNvbG9yOiB5ZWxsb3dbNjAwXSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFscGhhKHllbGxvd1s2MDBdLCB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3Zlck9wYWNpdHkpLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcmIC5NdWlTd2l0Y2gtc3dpdGNoQmFzZS5NdWktY2hlY2tlZCArIC5NdWlTd2l0Y2gtdHJhY2snOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHllbGxvd1s2MDBdLFxuICAgIH0sXG4gIH0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgICBjb25zdCBbZ3JlZW4sIGhhbmRsZUdyZWVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbeWVsbG93LCBoYW5kbGVZZWxsb3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtyZWQsIGhhbmRsZVJFZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICA8R3JpZCB4cz17MTJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBwYXJhZ3JhcGg+XG4gICAgICAgICAgaGV5IGR1bSwgaSBtaXNzIHlvdSBhIGxvdCBzbyBpIG1hZGUgdGhpcyByZWFsbHkgbGFtZSB3ZWJzaXRlIGxvbC4gYW5kXG4gICAgICAgICAgbmdsIGkganVzdCB3YW50ZWQgYW5vdGhlciB3YXkgdG8gYmUgb24geW91ciB3YWxsIOKdpO+4j1xuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0dyaWQ+XG5cbiAgICAgIDxHcmlkPlxuICAgICAgICA8VGV4dEZpZWxkIGlkPVwic3RhbmRhcmQtYmFzaWNcIiBsYWJlbD1cIm1lc3NhZ2VcIiB2YXJpYW50PVwic3RhbmRhcmRcIiAvPlxuICAgICAgICA8U3dpdGNoIHsuLi5sYWJlbH0gY29sb3I9XCJzdWNjZXNzXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICA8WWVsbG93U3dpdGNoIHsuLi5sYWJlbH0gICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgIDxTd2l0Y2ggey4uLmxhYmVsfSBjb2xvcj1cImVycm9yXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuXG4gICAgICA8L0dyaWQ+XG5cbiAgICAgIFxuXG4gICAgICA8R3JpZD5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCI+c2VuZCEhPC9CdXR0b24+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIlRleHRGaWVsZCIsIlR5cG9ncmFwaHkiLCJHcmlkIiwiU3dpdGNoIiwiYWxwaGEiLCJzdHlsZWQiLCJ5ZWxsb3ciLCJ1c2VTdGF0ZSIsImxhYmVsIiwiaW5wdXRQcm9wcyIsIlllbGxvd1N3aXRjaCIsInRoZW1lIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYWN0aW9uIiwiaG92ZXJPcGFjaXR5IiwiUHJvZmlsZSIsImdyZWVuIiwiaGFuZGxlR3JlZW4iLCJoYW5kbGVZZWxsb3ciLCJyZWQiLCJoYW5kbGVSRWQiLCJjb250YWluZXIiLCJ4cyIsInBhcmFncmFwaCIsImlkIiwidmFyaWFudCIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/binds.tsx\n"));

/***/ })

});