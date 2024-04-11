"use strict";
(() => {
var exports = {};
exports.id = 586;
exports.ids = [586];
exports.modules = {

/***/ 26262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var sharedTxt = "hi b, i love you";
var greenLed = false;
var yellowLed = false;
var redLed = false;
const allowCors = (fn)=>async (req, res)=>{
        res.setHeader("Access-Control-Allow-Credentials", true);
        res.setHeader("Access-Control-Allow-Origin", "*");
        // another common pattern
        // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
        res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
        if (req.method === "OPTIONS") {
            res.status(200).end();
            return;
        }
        return await fn(req, res);
    };
const handler = (req, res)=>{
    if (req.method === "POST") {
        // Process a POST request
        const { msg, green, yellow, red } = req.query;
        sharedTxt = msg;
        greenLed = green;
        yellowLed = yellow;
        redLed = red;
        res.json({
            msg: "MESSAGE SENT!!"
        });
    } else {
        // Handle any other HTTP method
        var dateObj = new Date();
        var time = dateObj.toLocaleTimeString([], {
            weekday: "short",
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "EST"
        });
        res.status(200).json({
            msg: sharedTxt,
            time,
            greenLed,
            yellowLed,
            redLed
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allowCors(handler));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(26262));
module.exports = __webpack_exports__;

})();