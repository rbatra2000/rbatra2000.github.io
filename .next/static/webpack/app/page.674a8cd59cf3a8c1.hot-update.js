"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/components/ImageCrossFade.tsx":
/*!*******************************************!*\
  !*** ./app/components/ImageCrossFade.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var waait__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! waait */ \"(app-client)/./node_modules/waait/index.js\");\n/* harmony import */ var waait__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(waait__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst ImageCrossFade = (param)=>{\n    let { imgUrl } = param;\n    _s();\n    const [fadeIn, setFadeIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loadedImage, setLoadedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(imgUrl);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoaded(false);\n        setFadeIn(true);\n    }, [\n        imgUrl\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute top-0 left-0 w-full bg-black\",\n        children: [\n            fadeIn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                onLoadingComplete: ()=>{\n                    setLoaded(true);\n                    waait__WEBPACK_IMPORTED_MODULE_3___default()(1100).then(()=>{\n                        setLoadedImage(imgUrl);\n                    });\n                },\n                height: 1000,\n                width: 1000,\n                alt: \"self portrait drawing\",\n                style: {\n                    borderRadius: \"50%\",\n                    border: \"0px solid #000\",\n                    backgroundColor: \"white\",\n                    width: \"100%\",\n                    height: \"auto\",\n                    margin: \"auto\",\n                    transition: \"all 1s ease-in-out\"\n                },\n                src: imgUrl,\n                priority: true,\n                className: \"w-full absolute top-0 left-0 z-10 transition-opacity duration-1000 \".concat(loaded ? \"opacity-100\" : \"opacity-0\")\n            }, void 0, false, {\n                fileName: \"/Users/ritikbatra/Desktop/rbatra2000.github.io/app/components/ImageCrossFade.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined),\n            loadedImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                onLoadingComplete: ()=>{\n                    setFadeIn(false);\n                },\n                alt: \"\",\n                height: 1000,\n                width: 1000,\n                style: {\n                    borderRadius: \"50%\",\n                    border: \"0px solid #000\",\n                    backgroundColor: \"white\",\n                    width: \"100%\",\n                    height: \"auto\",\n                    margin: \"auto\",\n                    transition: \"all 1s ease-in-out\"\n                },\n                src: loadedImage,\n                priority: true,\n                className: \"w-full\"\n            }, void 0, false, {\n                fileName: \"/Users/ritikbatra/Desktop/rbatra2000.github.io/app/components/ImageCrossFade.tsx\",\n                lineNumber: 49,\n                columnNumber: 25\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-full absolute left-0 bottom-0 z-10\",\n                style: {\n                    background: \"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%)\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/ritikbatra/Desktop/rbatra2000.github.io/app/components/ImageCrossFade.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ritikbatra/Desktop/rbatra2000.github.io/app/components/ImageCrossFade.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageCrossFade, \"xjYmGgoiIQdI1qI6gBu3Wzu2VYE=\");\n_c = ImageCrossFade;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = react__WEBPACK_IMPORTED_MODULE_1___default().memo(ImageCrossFade));\nvar _c, _c1;\n$RefreshReg$(_c, \"ImageCrossFade\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvSW1hZ2VDcm9zc0ZhZGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0Q7QUFDcEI7QUFDTjtBQU14QixNQUFNSyxpQkFBaUI7UUFBQyxFQUFFQyxNQUFNLEVBQXVCOztJQUNyRCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQVU7SUFDOUMsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFVO0lBQzlDLE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBU0k7SUFFdkRMLGdEQUFTQSxDQUFDO1FBQ1JTLFVBQVU7UUFDVkYsVUFBVTtJQUNaLEdBQUc7UUFBQ0Y7S0FBTztJQUVYLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVOztZQUNaUCx3QkFDQyw4REFBQ0osbURBQUtBO2dCQUNKWSxtQkFBbUI7b0JBQ2pCTCxVQUFVO29CQUNWTiw0Q0FBSUEsQ0FBQyxNQUFNWSxLQUFLO3dCQUNkSixlQUFlTjtvQkFDakI7Z0JBQ0Y7Z0JBQ0FXLFFBQVE7Z0JBQ1JDLE9BQU87Z0JBQ1BDLEtBQUk7Z0JBQ0pDLE9BQU87b0JBQ0xDLGNBQWM7b0JBQ2RDLFFBQVE7b0JBQ1JDLGlCQUFpQjtvQkFDakJMLE9BQU87b0JBQ1BELFFBQVE7b0JBQ1JPLFFBQVE7b0JBQ1JDLFlBQVk7Z0JBQ2Q7Z0JBQ0FDLEtBQUtwQjtnQkFDTHFCLFFBQVE7Z0JBQ1JiLFdBQVcsc0VBQ1IsT0FEOEVMLFNBQVMsZ0JBQWdCOzs7Ozs7WUFNNUdFLDZCQUFnQiw4REFBQ1IsbURBQUtBO2dCQUNwQlksbUJBQW1CO29CQUNqQlAsVUFBVTtnQkFDWjtnQkFDQVcsS0FBSTtnQkFDSkYsUUFBUTtnQkFDUkMsT0FBTztnQkFDUEUsT0FBTztvQkFDTEMsY0FBYztvQkFDZEMsUUFBUTtvQkFDUkMsaUJBQWlCO29CQUNqQkwsT0FBTztvQkFDUEQsUUFBUTtvQkFDUk8sUUFBUTtvQkFDUkMsWUFBWTtnQkFDZDtnQkFDQUMsS0FBS2Y7Z0JBQ0xnQixRQUFRO2dCQUNSYixXQUFZOzs7Ozs7MEJBR2hCLDhEQUFDRDtnQkFDQ0MsV0FBVTtnQkFDVk0sT0FBTztvQkFDTFEsWUFDRTtnQkFDSjs7Ozs7Ozs7Ozs7O0FBSVI7R0F0RU12QjtLQUFBQTtBQXdFTixrRkFBZUwsaURBQVU2QixDQUFDeEIsZUFBZUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9JbWFnZUNyb3NzRmFkZS50c3g/ZTlhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IHdhaXQgZnJvbSBcIndhYWl0XCJcblxuaW50ZXJmYWNlIEltYWdlQ3Jvc3NGYWRlUHJvcHMge1xuICBpbWdVcmw6IHN0cmluZztcbn1cblxuY29uc3QgSW1hZ2VDcm9zc0ZhZGUgPSAoeyBpbWdVcmwgfTogSW1hZ2VDcm9zc0ZhZGVQcm9wcykgPT4ge1xuICBjb25zdCBbZmFkZUluLCBzZXRGYWRlSW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgY29uc3QgW2xvYWRlZEltYWdlLCBzZXRMb2FkZWRJbWFnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KGltZ1VybClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRlZChmYWxzZSlcbiAgICBzZXRGYWRlSW4odHJ1ZSlcbiAgfSwgW2ltZ1VybF0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgYmctYmxhY2tcIj5cbiAgICAgIHtmYWRlSW4gJiYgKFxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZT17KCkgPT4ge1xuICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpXG4gICAgICAgICAgICB3YWl0KDExMDApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBzZXRMb2FkZWRJbWFnZShpbWdVcmwpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH19XG4gICAgICAgICAgaGVpZ2h0PXsxMDAwfVxuICAgICAgICAgIHdpZHRoPXsxMDAwfVxuICAgICAgICAgIGFsdD1cInNlbGYgcG9ydHJhaXQgZHJhd2luZ1wiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCIwcHggc29saWQgIzAwMFwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDFzIGVhc2UtaW4tb3V0XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBzcmM9e2ltZ1VybH1cbiAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgei0xMCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMTAwMCAke2xvYWRlZCA/IFwib3BhY2l0eS0xMDBcIiA6IFwib3BhY2l0eS0wXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge1xuICAgICAgICBsb2FkZWRJbWFnZSAmJiAoPEltYWdlXG4gICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGU9eygpID0+IHtcbiAgICAgICAgICAgIHNldEZhZGVJbihmYWxzZSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgaGVpZ2h0PXsxMDAwfVxuICAgICAgICAgIHdpZHRoPXsxMDAwfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwiMHB4IHNvbGlkICMwMDBcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAxcyBlYXNlLWluLW91dFwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgc3JjPXtsb2FkZWRJbWFnZX1cbiAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbGB9XG4gICAgICAgIC8+KVxuICAgICAgfVxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGFic29sdXRlIGxlZnQtMCBib3R0b20tMCB6LTEwXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLDAsMCwxKSAwJSwgcmdiYSgwLDAsMCwwKSA1MCUpXCIsXG4gICAgICAgIH19XG4gICAgICA+PC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhJbWFnZUNyb3NzRmFkZSkiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwid2FpdCIsIkltYWdlQ3Jvc3NGYWRlIiwiaW1nVXJsIiwiZmFkZUluIiwic2V0RmFkZUluIiwibG9hZGVkIiwic2V0TG9hZGVkIiwibG9hZGVkSW1hZ2UiLCJzZXRMb2FkZWRJbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsIm9uTG9hZGluZ0NvbXBsZXRlIiwidGhlbiIsImhlaWdodCIsIndpZHRoIiwiYWx0Iiwic3R5bGUiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW4iLCJ0cmFuc2l0aW9uIiwic3JjIiwicHJpb3JpdHkiLCJiYWNrZ3JvdW5kIiwibWVtbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/ImageCrossFade.tsx\n"));

/***/ })

});