/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/invoice.ts":
/*!********************************!*\
  !*** ./src/classes/invoice.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


// TS Class
// class Invoice {
//   readonly client: string;
//   private details: string;
//   private amount: number;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes $").concat(this.details, " for ").concat(this.amount);
    };
    return Invoice;
}());
exports.Invoice = Invoice;


/***/ }),

/***/ "./src/classes/payments.ts":
/*!*********************************!*\
  !*** ./src/classes/payments.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Payments = void 0;
var Payments = /** @class */ (function () {
    function Payments(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    Payments.prototype.format = function () {
        return "".concat(this.recipient, " is owed $").concat(this.details, " for ").concat(this.amount);
    };
    return Payments;
}());
exports.Payments = Payments;


/***/ }),

/***/ "./src/enums/enum.ts":
/*!***************************!*\
  !*** ./src/enums/enum.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.enumTest = void 0;
function enumTest() {
    //   const docOne: Resource<object> = {
    //     uid: 1,
    //     resourceType: 2,
    //     data: { title: "name of the wind" },
    //   };
    //   const docTwo: Resource<object> = {
    //     uid: 2,
    //     resourceType: 4,
    //     data: { name: "John" },
    //   };
    //   console.log(docOne, docTwo);
    // with enum
    var ResourceType;
    (function (ResourceType) {
        ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
        ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
        ResourceType[ResourceType["FILM"] = 2] = "FILM";
        ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
        ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
    })(ResourceType || (ResourceType = {}));
    var docOne = {
        uid: 1,
        resourceType: ResourceType.FILM,
        data: { title: "name of the wind" },
    };
    var docTwo = {
        uid: 2,
        resourceType: ResourceType.PERSON,
        data: { name: "John" },
    };
    //   console.log(docOne, docTwo);
}
exports.enumTest = enumTest;


/***/ }),

/***/ "./src/generics/generic.ts":
/*!*********************************!*\
  !*** ./src/generics/generic.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generic = void 0;
function generic() {
    // Case-1
    var addUID = function (obj) {
        var uid = Math.floor(Math.random() * 100);
        return __assign(__assign({}, obj), { uid: uid });
    };
    // let doc1 = addUID({ name: "ashish", age: 21 });
    // console.log(doc1);
    // property name doesn't exist
    // console.log(doc1.name);
    // Case-2 do this to solve above line-12 error
    // T will capture all the information we pass in functions so when we return, it will know what properties are on object
    var addUID2 = function (obj) {
        var uid = Math.floor(Math.random() * 100);
        return __assign(__assign({}, obj), { uid: uid });
    };
    var doc1 = addUID2({ name: "harsh", age: 21 });
    var docThree = {
        uid: 1,
        resourceName: "person",
        data: "harsh",
    };
    var docFour = {
        uid: 2,
        resourceName: "shopingList",
        data: ["bread", "milk"],
    };
}
exports.generic = generic;


/***/ }),

/***/ "./src/tuples/tuples.ts":
/*!******************************!*\
  !*** ./src/tuples/tuples.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tuple = void 0;
function tuple() {
    //without tuple
    var arr = ["harsh", 21, true];
    // any of the above array values can be in any position
    // i.e. arr[0] can be number
    arr[0] = 45;
    arr[1] = "ashish";
    arr = [21, false, 21];
    //   console.log(arr);
    //with tuple
    var arr2 = ["harsh", 21, false];
    // any of the above array values can not be in different position
    // i.e. arr2[0] must be string
    arr2[0] = "vatsal";
    arr2[1] = 45;
    //   console.log(arr2);
}
exports.tuple = tuple;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var invoice_1 = __webpack_require__(/*! ./classes/invoice */ "./src/classes/invoice.ts");
var payments_1 = __webpack_require__(/*! ./classes/payments */ "./src/classes/payments.ts");
// Object
// const invOne = new Invoice("mario", "work on mario website", 250);
// const invTwo = new Invoice("john", "work on john pool", 150);
// console.log(invOne, invTwo);
// use of class with arrays
// only arrays created using Invoice class will be allowed in invoices array
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);
// we can change object values to stop that use Access modifier private in class
// invOne.client = "harsh";
// invTwo.amount = 500;
// get elemnts from html
var type = document.querySelector("#selectMenu");
var toFrom = document.querySelector("#inputToFrom");
var details = document.querySelector("#inputDetails");
var amount = document.querySelector("#inputAmount");
var form = document.querySelector(".form-item");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    //   console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
    if (type.value === "" ||
        toFrom.value === "" ||
        details.value === "" ||
        amount.value === "") {
        alert("Please fill all the fields");
    }
    else {
        var doc = void 0;
        if (type.value === "invoice") {
            doc = new invoice_1.Invoice(toFrom.value, details.value, amount.valueAsNumber);
        }
        else {
            doc = new payments_1.Payments(toFrom.value, details.value, amount.valueAsNumber);
        }
        console.log(doc);
    }
});
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("Harsh", "Web Programming", 300);
// docTwo = new Payments("Mario", "Plumbing", 150);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
var generic_1 = __webpack_require__(/*! ./generics/generic */ "./src/generics/generic.ts");
(0, generic_1.generic)();
var enum_1 = __webpack_require__(/*! ./enums/enum */ "./src/enums/enum.ts");
(0, enum_1.enumTest)();
var tuples_1 = __webpack_require__(/*! ./tuples/tuples */ "./src/tuples/tuples.ts");
(0, tuples_1.tuple)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsZUFBZTs7Ozs7Ozs7Ozs7QUNuQkY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGdCQUFnQjs7Ozs7Ozs7Ozs7QUNkSDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLG9DQUFvQztBQUN6QztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkJBQTJCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGNBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOzs7Ozs7Ozs7OztBQ3BDSDtBQUNiO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxVQUFVLFVBQVU7QUFDdkQ7QUFDQSwyQkFBMkIseUJBQXlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFVBQVUsVUFBVTtBQUN2RDtBQUNBLHlCQUF5Qix3QkFBd0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7Ozs7Ozs7Ozs7O0FDMUNGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7Ozs7OztVQ3BCYjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQixtQkFBTyxDQUFDLG1EQUFtQjtBQUMzQyxpQkFBaUIsbUJBQU8sQ0FBQyxxREFBb0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMscURBQW9CO0FBQzVDO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLHlDQUFjO0FBQ25DO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLCtDQUFpQjtBQUN4QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLXByYWN0aWNhbC1sZWFybmluZy8uL3NyYy9jbGFzc2VzL2ludm9pY2UudHMiLCJ3ZWJwYWNrOi8vdHMtcHJhY3RpY2FsLWxlYXJuaW5nLy4vc3JjL2NsYXNzZXMvcGF5bWVudHMudHMiLCJ3ZWJwYWNrOi8vdHMtcHJhY3RpY2FsLWxlYXJuaW5nLy4vc3JjL2VudW1zL2VudW0udHMiLCJ3ZWJwYWNrOi8vdHMtcHJhY3RpY2FsLWxlYXJuaW5nLy4vc3JjL2dlbmVyaWNzL2dlbmVyaWMudHMiLCJ3ZWJwYWNrOi8vdHMtcHJhY3RpY2FsLWxlYXJuaW5nLy4vc3JjL3R1cGxlcy90dXBsZXMudHMiLCJ3ZWJwYWNrOi8vdHMtcHJhY3RpY2FsLWxlYXJuaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLXByYWN0aWNhbC1sZWFybmluZy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIFRTIENsYXNzXG4vLyBjbGFzcyBJbnZvaWNlIHtcbi8vICAgcmVhZG9ubHkgY2xpZW50OiBzdHJpbmc7XG4vLyAgIHByaXZhdGUgZGV0YWlsczogc3RyaW5nO1xuLy8gICBwcml2YXRlIGFtb3VudDogbnVtYmVyO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbnZvaWNlID0gdm9pZCAwO1xudmFyIEludm9pY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW52b2ljZShjbGllbnQsIGRldGFpbHMsIGFtb3VudCkge1xuICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XG4gICAgfVxuICAgIEludm9pY2UucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHRoaXMuY2xpZW50LCBcIiBvd2VzICRcIikuY29uY2F0KHRoaXMuZGV0YWlscywgXCIgZm9yIFwiKS5jb25jYXQodGhpcy5hbW91bnQpO1xuICAgIH07XG4gICAgcmV0dXJuIEludm9pY2U7XG59KCkpO1xuZXhwb3J0cy5JbnZvaWNlID0gSW52b2ljZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QYXltZW50cyA9IHZvaWQgMDtcbnZhciBQYXltZW50cyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQYXltZW50cyhyZWNpcGllbnQsIGRldGFpbHMsIGFtb3VudCkge1xuICAgICAgICB0aGlzLnJlY2lwaWVudCA9IHJlY2lwaWVudDtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XG4gICAgfVxuICAgIFBheW1lbnRzLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh0aGlzLnJlY2lwaWVudCwgXCIgaXMgb3dlZCAkXCIpLmNvbmNhdCh0aGlzLmRldGFpbHMsIFwiIGZvciBcIikuY29uY2F0KHRoaXMuYW1vdW50KTtcbiAgICB9O1xuICAgIHJldHVybiBQYXltZW50cztcbn0oKSk7XG5leHBvcnRzLlBheW1lbnRzID0gUGF5bWVudHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZW51bVRlc3QgPSB2b2lkIDA7XG5mdW5jdGlvbiBlbnVtVGVzdCgpIHtcbiAgICAvLyAgIGNvbnN0IGRvY09uZTogUmVzb3VyY2U8b2JqZWN0PiA9IHtcbiAgICAvLyAgICAgdWlkOiAxLFxuICAgIC8vICAgICByZXNvdXJjZVR5cGU6IDIsXG4gICAgLy8gICAgIGRhdGE6IHsgdGl0bGU6IFwibmFtZSBvZiB0aGUgd2luZFwiIH0sXG4gICAgLy8gICB9O1xuICAgIC8vICAgY29uc3QgZG9jVHdvOiBSZXNvdXJjZTxvYmplY3Q+ID0ge1xuICAgIC8vICAgICB1aWQ6IDIsXG4gICAgLy8gICAgIHJlc291cmNlVHlwZTogNCxcbiAgICAvLyAgICAgZGF0YTogeyBuYW1lOiBcIkpvaG5cIiB9LFxuICAgIC8vICAgfTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGRvY09uZSwgZG9jVHdvKTtcbiAgICAvLyB3aXRoIGVudW1cbiAgICB2YXIgUmVzb3VyY2VUeXBlO1xuICAgIChmdW5jdGlvbiAoUmVzb3VyY2VUeXBlKSB7XG4gICAgICAgIFJlc291cmNlVHlwZVtSZXNvdXJjZVR5cGVbXCJCT09LXCJdID0gMF0gPSBcIkJPT0tcIjtcbiAgICAgICAgUmVzb3VyY2VUeXBlW1Jlc291cmNlVHlwZVtcIkFVVEhPUlwiXSA9IDFdID0gXCJBVVRIT1JcIjtcbiAgICAgICAgUmVzb3VyY2VUeXBlW1Jlc291cmNlVHlwZVtcIkZJTE1cIl0gPSAyXSA9IFwiRklMTVwiO1xuICAgICAgICBSZXNvdXJjZVR5cGVbUmVzb3VyY2VUeXBlW1wiRElSRUNUT1JcIl0gPSAzXSA9IFwiRElSRUNUT1JcIjtcbiAgICAgICAgUmVzb3VyY2VUeXBlW1Jlc291cmNlVHlwZVtcIlBFUlNPTlwiXSA9IDRdID0gXCJQRVJTT05cIjtcbiAgICB9KShSZXNvdXJjZVR5cGUgfHwgKFJlc291cmNlVHlwZSA9IHt9KSk7XG4gICAgdmFyIGRvY09uZSA9IHtcbiAgICAgICAgdWlkOiAxLFxuICAgICAgICByZXNvdXJjZVR5cGU6IFJlc291cmNlVHlwZS5GSUxNLFxuICAgICAgICBkYXRhOiB7IHRpdGxlOiBcIm5hbWUgb2YgdGhlIHdpbmRcIiB9LFxuICAgIH07XG4gICAgdmFyIGRvY1R3byA9IHtcbiAgICAgICAgdWlkOiAyLFxuICAgICAgICByZXNvdXJjZVR5cGU6IFJlc291cmNlVHlwZS5QRVJTT04sXG4gICAgICAgIGRhdGE6IHsgbmFtZTogXCJKb2huXCIgfSxcbiAgICB9O1xuICAgIC8vICAgY29uc29sZS5sb2coZG9jT25lLCBkb2NUd28pO1xufVxuZXhwb3J0cy5lbnVtVGVzdCA9IGVudW1UZXN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZW5lcmljID0gdm9pZCAwO1xuZnVuY3Rpb24gZ2VuZXJpYygpIHtcbiAgICAvLyBDYXNlLTFcbiAgICB2YXIgYWRkVUlEID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB2YXIgdWlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvYmopLCB7IHVpZDogdWlkIH0pO1xuICAgIH07XG4gICAgLy8gbGV0IGRvYzEgPSBhZGRVSUQoeyBuYW1lOiBcImFzaGlzaFwiLCBhZ2U6IDIxIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKGRvYzEpO1xuICAgIC8vIHByb3BlcnR5IG5hbWUgZG9lc24ndCBleGlzdFxuICAgIC8vIGNvbnNvbGUubG9nKGRvYzEubmFtZSk7XG4gICAgLy8gQ2FzZS0yIGRvIHRoaXMgdG8gc29sdmUgYWJvdmUgbGluZS0xMiBlcnJvclxuICAgIC8vIFQgd2lsbCBjYXB0dXJlIGFsbCB0aGUgaW5mb3JtYXRpb24gd2UgcGFzcyBpbiBmdW5jdGlvbnMgc28gd2hlbiB3ZSByZXR1cm4sIGl0IHdpbGwga25vdyB3aGF0IHByb3BlcnRpZXMgYXJlIG9uIG9iamVjdFxuICAgIHZhciBhZGRVSUQyID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB2YXIgdWlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvYmopLCB7IHVpZDogdWlkIH0pO1xuICAgIH07XG4gICAgdmFyIGRvYzEgPSBhZGRVSUQyKHsgbmFtZTogXCJoYXJzaFwiLCBhZ2U6IDIxIH0pO1xuICAgIHZhciBkb2NUaHJlZSA9IHtcbiAgICAgICAgdWlkOiAxLFxuICAgICAgICByZXNvdXJjZU5hbWU6IFwicGVyc29uXCIsXG4gICAgICAgIGRhdGE6IFwiaGFyc2hcIixcbiAgICB9O1xuICAgIHZhciBkb2NGb3VyID0ge1xuICAgICAgICB1aWQ6IDIsXG4gICAgICAgIHJlc291cmNlTmFtZTogXCJzaG9waW5nTGlzdFwiLFxuICAgICAgICBkYXRhOiBbXCJicmVhZFwiLCBcIm1pbGtcIl0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZ2VuZXJpYyA9IGdlbmVyaWM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudHVwbGUgPSB2b2lkIDA7XG5mdW5jdGlvbiB0dXBsZSgpIHtcbiAgICAvL3dpdGhvdXQgdHVwbGVcbiAgICB2YXIgYXJyID0gW1wiaGFyc2hcIiwgMjEsIHRydWVdO1xuICAgIC8vIGFueSBvZiB0aGUgYWJvdmUgYXJyYXkgdmFsdWVzIGNhbiBiZSBpbiBhbnkgcG9zaXRpb25cbiAgICAvLyBpLmUuIGFyclswXSBjYW4gYmUgbnVtYmVyXG4gICAgYXJyWzBdID0gNDU7XG4gICAgYXJyWzFdID0gXCJhc2hpc2hcIjtcbiAgICBhcnIgPSBbMjEsIGZhbHNlLCAyMV07XG4gICAgLy8gICBjb25zb2xlLmxvZyhhcnIpO1xuICAgIC8vd2l0aCB0dXBsZVxuICAgIHZhciBhcnIyID0gW1wiaGFyc2hcIiwgMjEsIGZhbHNlXTtcbiAgICAvLyBhbnkgb2YgdGhlIGFib3ZlIGFycmF5IHZhbHVlcyBjYW4gbm90IGJlIGluIGRpZmZlcmVudCBwb3NpdGlvblxuICAgIC8vIGkuZS4gYXJyMlswXSBtdXN0IGJlIHN0cmluZ1xuICAgIGFycjJbMF0gPSBcInZhdHNhbFwiO1xuICAgIGFycjJbMV0gPSA0NTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGFycjIpO1xufVxuZXhwb3J0cy50dXBsZSA9IHR1cGxlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGludm9pY2VfMSA9IHJlcXVpcmUoXCIuL2NsYXNzZXMvaW52b2ljZVwiKTtcbnZhciBwYXltZW50c18xID0gcmVxdWlyZShcIi4vY2xhc3Nlcy9wYXltZW50c1wiKTtcbi8vIE9iamVjdFxuLy8gY29uc3QgaW52T25lID0gbmV3IEludm9pY2UoXCJtYXJpb1wiLCBcIndvcmsgb24gbWFyaW8gd2Vic2l0ZVwiLCAyNTApO1xuLy8gY29uc3QgaW52VHdvID0gbmV3IEludm9pY2UoXCJqb2huXCIsIFwid29yayBvbiBqb2huIHBvb2xcIiwgMTUwKTtcbi8vIGNvbnNvbGUubG9nKGludk9uZSwgaW52VHdvKTtcbi8vIHVzZSBvZiBjbGFzcyB3aXRoIGFycmF5c1xuLy8gb25seSBhcnJheXMgY3JlYXRlZCB1c2luZyBJbnZvaWNlIGNsYXNzIHdpbGwgYmUgYWxsb3dlZCBpbiBpbnZvaWNlcyBhcnJheVxuLy8gbGV0IGludm9pY2VzOiBJbnZvaWNlW10gPSBbXTtcbi8vIGludm9pY2VzLnB1c2goaW52T25lKTtcbi8vIGludm9pY2VzLnB1c2goaW52VHdvKTtcbi8vIGNvbnNvbGUubG9nKGludm9pY2VzKTtcbi8vIHdlIGNhbiBjaGFuZ2Ugb2JqZWN0IHZhbHVlcyB0byBzdG9wIHRoYXQgdXNlIEFjY2VzcyBtb2RpZmllciBwcml2YXRlIGluIGNsYXNzXG4vLyBpbnZPbmUuY2xpZW50ID0gXCJoYXJzaFwiO1xuLy8gaW52VHdvLmFtb3VudCA9IDUwMDtcbi8vIGdldCBlbGVtbnRzIGZyb20gaHRtbFxudmFyIHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdE1lbnVcIik7XG52YXIgdG9Gcm9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dFRvRnJvbVwiKTtcbnZhciBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dERldGFpbHNcIik7XG52YXIgYW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dEFtb3VudFwiKTtcbnZhciBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWl0ZW1cIik7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICBjb25zb2xlLmxvZyh0eXBlLnZhbHVlLCB0b0Zyb20udmFsdWUsIGRldGFpbHMudmFsdWUsIGFtb3VudC52YWx1ZUFzTnVtYmVyKTtcbiAgICBpZiAodHlwZS52YWx1ZSA9PT0gXCJcIiB8fFxuICAgICAgICB0b0Zyb20udmFsdWUgPT09IFwiXCIgfHxcbiAgICAgICAgZGV0YWlscy52YWx1ZSA9PT0gXCJcIiB8fFxuICAgICAgICBhbW91bnQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZmlsbCBhbGwgdGhlIGZpZWxkc1wiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBkb2MgPSB2b2lkIDA7XG4gICAgICAgIGlmICh0eXBlLnZhbHVlID09PSBcImludm9pY2VcIikge1xuICAgICAgICAgICAgZG9jID0gbmV3IGludm9pY2VfMS5JbnZvaWNlKHRvRnJvbS52YWx1ZSwgZGV0YWlscy52YWx1ZSwgYW1vdW50LnZhbHVlQXNOdW1iZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9jID0gbmV3IHBheW1lbnRzXzEuUGF5bWVudHModG9Gcm9tLnZhbHVlLCBkZXRhaWxzLnZhbHVlLCBhbW91bnQudmFsdWVBc051bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZG9jKTtcbiAgICB9XG59KTtcbi8vIGxldCBkb2NPbmU6IEhhc0Zvcm1hdHRlcjtcbi8vIGxldCBkb2NUd286IEhhc0Zvcm1hdHRlcjtcbi8vIGRvY09uZSA9IG5ldyBJbnZvaWNlKFwiSGFyc2hcIiwgXCJXZWIgUHJvZ3JhbW1pbmdcIiwgMzAwKTtcbi8vIGRvY1R3byA9IG5ldyBQYXltZW50cyhcIk1hcmlvXCIsIFwiUGx1bWJpbmdcIiwgMTUwKTtcbi8vIGxldCBkb2NzOiBIYXNGb3JtYXR0ZXJbXSA9IFtdO1xuLy8gZG9jcy5wdXNoKGRvY09uZSk7XG4vLyBkb2NzLnB1c2goZG9jVHdvKTtcbi8vIGNvbnNvbGUubG9nKGRvY3MpO1xudmFyIGdlbmVyaWNfMSA9IHJlcXVpcmUoXCIuL2dlbmVyaWNzL2dlbmVyaWNcIik7XG4oMCwgZ2VuZXJpY18xLmdlbmVyaWMpKCk7XG52YXIgZW51bV8xID0gcmVxdWlyZShcIi4vZW51bXMvZW51bVwiKTtcbigwLCBlbnVtXzEuZW51bVRlc3QpKCk7XG52YXIgdHVwbGVzXzEgPSByZXF1aXJlKFwiLi90dXBsZXMvdHVwbGVzXCIpO1xuKDAsIHR1cGxlc18xLnR1cGxlKSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9