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

/***/ "./src/test/test.ts":
/*!**************************!*\
  !*** ./src/test/test.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.test = void 0;
function test() {
    var obj = {
        name: "harsh",
        age: 21,
        city: "AHM",
        country: "IND",
        gender: "Male",
        skill: ["JS", "CSS", 12],
    };
    //   console.log(`${obj.name} and ${obj.age}`);
    //   console.log(obj);
    //?------------ class
    //   class person {
    //     constructor(public name: string, public age?: number) {}
    //   }
    //   const obj = new person("harsh", 21);
    //   console.log(obj);
    //?------------- type
    //   type person = {
    //     name: string;
    //     age?: number;
    //   };
    //   const obj: person = {
    //     name: "harsh",
    //   };
    //   console.log(obj);
    //?-------------- Arrow function
    var arr = function (name, city, country, gender, skill, age) { return ({
        name: name,
        city: city,
        country: country,
        gender: gender,
        skill: skill,
        age: age,
    }); };
    //   console.log(arr("harsh", "DHARI", "IND", "Male", ["JS"], 25));
    // type with arrow function
    //   type user = {
    //     name: string;
    //     age: number;
    //   };
    //   const greetPerson = (person3: user): string => {
    //     return `"Hello", ${person3.name}, ${person3.age}`;
    //   };
    //   const bro: user = { name: "harsh", age: 21 };
    //   console.log(greetPerson(bro));
    //?----------------- normal class
    var car = /** @class */ (function () {
        function car(name, age) {
            this.name = name;
            this.age = age;
        }
        return car;
    }());
    //? extend
    //   class car2 extends car {}
    //   const obj1 = new car2("Harsh", 25);
    //? implements
    //   class car2 implements car {
    //     constructor(public name: string, public age: number) {}
    //   }
    //   const obj1 = new car2("Harsh", 54);
    //?---------- problem converting string into number
    var x;
    x = "42a";
    //   console.log(typeof x, x);
    var y = Number(x);
    //   console.log(typeof y, y);
    //?---------- solution to above problem
    //   let a: string = "42";
    //   let b = Number(a);
    //   if (!isNaN(b)) {
    //     console.log(typeof b, b + 1);
    //   } else {
    //     console.log("invalid number");
    //   }
}
exports.test = test;


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
var test_1 = __webpack_require__(/*! ./test/test */ "./src/test/test.ts");
(0, test_1.test)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBZ0IsbUJBQU8sQ0FBQyxtREFBbUI7QUFDM0MsaUJBQWlCLG1CQUFPLENBQUMscURBQW9CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHFEQUFvQjtBQUM1QztBQUNBLGFBQWEsbUJBQU8sQ0FBQyx5Q0FBYztBQUNuQztBQUNBLGVBQWUsbUJBQU8sQ0FBQywrQ0FBaUI7QUFDeEM7QUFDQSxhQUFhLG1CQUFPLENBQUMsdUNBQWE7QUFDbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1wcmFjdGljYWwtbGVhcm5pbmcvLi9zcmMvY2xhc3Nlcy9pbnZvaWNlLnRzIiwid2VicGFjazovL3RzLXByYWN0aWNhbC1sZWFybmluZy8uL3NyYy9jbGFzc2VzL3BheW1lbnRzLnRzIiwid2VicGFjazovL3RzLXByYWN0aWNhbC1sZWFybmluZy8uL3NyYy9lbnVtcy9lbnVtLnRzIiwid2VicGFjazovL3RzLXByYWN0aWNhbC1sZWFybmluZy8uL3NyYy9nZW5lcmljcy9nZW5lcmljLnRzIiwid2VicGFjazovL3RzLXByYWN0aWNhbC1sZWFybmluZy8uL3NyYy90ZXN0L3Rlc3QudHMiLCJ3ZWJwYWNrOi8vdHMtcHJhY3RpY2FsLWxlYXJuaW5nLy4vc3JjL3R1cGxlcy90dXBsZXMudHMiLCJ3ZWJwYWNrOi8vdHMtcHJhY3RpY2FsLWxlYXJuaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLXByYWN0aWNhbC1sZWFybmluZy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIFRTIENsYXNzXG4vLyBjbGFzcyBJbnZvaWNlIHtcbi8vICAgcmVhZG9ubHkgY2xpZW50OiBzdHJpbmc7XG4vLyAgIHByaXZhdGUgZGV0YWlsczogc3RyaW5nO1xuLy8gICBwcml2YXRlIGFtb3VudDogbnVtYmVyO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbnZvaWNlID0gdm9pZCAwO1xudmFyIEludm9pY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW52b2ljZShjbGllbnQsIGRldGFpbHMsIGFtb3VudCkge1xuICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XG4gICAgfVxuICAgIEludm9pY2UucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHRoaXMuY2xpZW50LCBcIiBvd2VzICRcIikuY29uY2F0KHRoaXMuZGV0YWlscywgXCIgZm9yIFwiKS5jb25jYXQodGhpcy5hbW91bnQpO1xuICAgIH07XG4gICAgcmV0dXJuIEludm9pY2U7XG59KCkpO1xuZXhwb3J0cy5JbnZvaWNlID0gSW52b2ljZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QYXltZW50cyA9IHZvaWQgMDtcbnZhciBQYXltZW50cyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQYXltZW50cyhyZWNpcGllbnQsIGRldGFpbHMsIGFtb3VudCkge1xuICAgICAgICB0aGlzLnJlY2lwaWVudCA9IHJlY2lwaWVudDtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XG4gICAgfVxuICAgIFBheW1lbnRzLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh0aGlzLnJlY2lwaWVudCwgXCIgaXMgb3dlZCAkXCIpLmNvbmNhdCh0aGlzLmRldGFpbHMsIFwiIGZvciBcIikuY29uY2F0KHRoaXMuYW1vdW50KTtcbiAgICB9O1xuICAgIHJldHVybiBQYXltZW50cztcbn0oKSk7XG5leHBvcnRzLlBheW1lbnRzID0gUGF5bWVudHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZW51bVRlc3QgPSB2b2lkIDA7XG5mdW5jdGlvbiBlbnVtVGVzdCgpIHtcbiAgICAvLyAgIGNvbnN0IGRvY09uZTogUmVzb3VyY2U8b2JqZWN0PiA9IHtcbiAgICAvLyAgICAgdWlkOiAxLFxuICAgIC8vICAgICByZXNvdXJjZVR5cGU6IDIsXG4gICAgLy8gICAgIGRhdGE6IHsgdGl0bGU6IFwibmFtZSBvZiB0aGUgd2luZFwiIH0sXG4gICAgLy8gICB9O1xuICAgIC8vICAgY29uc3QgZG9jVHdvOiBSZXNvdXJjZTxvYmplY3Q+ID0ge1xuICAgIC8vICAgICB1aWQ6IDIsXG4gICAgLy8gICAgIHJlc291cmNlVHlwZTogNCxcbiAgICAvLyAgICAgZGF0YTogeyBuYW1lOiBcIkpvaG5cIiB9LFxuICAgIC8vICAgfTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGRvY09uZSwgZG9jVHdvKTtcbiAgICAvLyB3aXRoIGVudW1cbiAgICB2YXIgUmVzb3VyY2VUeXBlO1xuICAgIChmdW5jdGlvbiAoUmVzb3VyY2VUeXBlKSB7XG4gICAgICAgIFJlc291cmNlVHlwZVtSZXNvdXJjZVR5cGVbXCJCT09LXCJdID0gMF0gPSBcIkJPT0tcIjtcbiAgICAgICAgUmVzb3VyY2VUeXBlW1Jlc291cmNlVHlwZVtcIkFVVEhPUlwiXSA9IDFdID0gXCJBVVRIT1JcIjtcbiAgICAgICAgUmVzb3VyY2VUeXBlW1Jlc291cmNlVHlwZVtcIkZJTE1cIl0gPSAyXSA9IFwiRklMTVwiO1xuICAgICAgICBSZXNvdXJjZVR5cGVbUmVzb3VyY2VUeXBlW1wiRElSRUNUT1JcIl0gPSAzXSA9IFwiRElSRUNUT1JcIjtcbiAgICAgICAgUmVzb3VyY2VUeXBlW1Jlc291cmNlVHlwZVtcIlBFUlNPTlwiXSA9IDRdID0gXCJQRVJTT05cIjtcbiAgICB9KShSZXNvdXJjZVR5cGUgfHwgKFJlc291cmNlVHlwZSA9IHt9KSk7XG4gICAgdmFyIGRvY09uZSA9IHtcbiAgICAgICAgdWlkOiAxLFxuICAgICAgICByZXNvdXJjZVR5cGU6IFJlc291cmNlVHlwZS5GSUxNLFxuICAgICAgICBkYXRhOiB7IHRpdGxlOiBcIm5hbWUgb2YgdGhlIHdpbmRcIiB9LFxuICAgIH07XG4gICAgdmFyIGRvY1R3byA9IHtcbiAgICAgICAgdWlkOiAyLFxuICAgICAgICByZXNvdXJjZVR5cGU6IFJlc291cmNlVHlwZS5QRVJTT04sXG4gICAgICAgIGRhdGE6IHsgbmFtZTogXCJKb2huXCIgfSxcbiAgICB9O1xuICAgIC8vICAgY29uc29sZS5sb2coZG9jT25lLCBkb2NUd28pO1xufVxuZXhwb3J0cy5lbnVtVGVzdCA9IGVudW1UZXN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZW5lcmljID0gdm9pZCAwO1xuZnVuY3Rpb24gZ2VuZXJpYygpIHtcbiAgICAvLyBDYXNlLTFcbiAgICB2YXIgYWRkVUlEID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB2YXIgdWlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvYmopLCB7IHVpZDogdWlkIH0pO1xuICAgIH07XG4gICAgLy8gbGV0IGRvYzEgPSBhZGRVSUQoeyBuYW1lOiBcImFzaGlzaFwiLCBhZ2U6IDIxIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKGRvYzEpO1xuICAgIC8vIHByb3BlcnR5IG5hbWUgZG9lc24ndCBleGlzdFxuICAgIC8vIGNvbnNvbGUubG9nKGRvYzEubmFtZSk7XG4gICAgLy8gQ2FzZS0yIGRvIHRoaXMgdG8gc29sdmUgYWJvdmUgbGluZS0xMiBlcnJvclxuICAgIC8vIFQgd2lsbCBjYXB0dXJlIGFsbCB0aGUgaW5mb3JtYXRpb24gd2UgcGFzcyBpbiBmdW5jdGlvbnMgc28gd2hlbiB3ZSByZXR1cm4sIGl0IHdpbGwga25vdyB3aGF0IHByb3BlcnRpZXMgYXJlIG9uIG9iamVjdFxuICAgIHZhciBhZGRVSUQyID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB2YXIgdWlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvYmopLCB7IHVpZDogdWlkIH0pO1xuICAgIH07XG4gICAgdmFyIGRvYzEgPSBhZGRVSUQyKHsgbmFtZTogXCJoYXJzaFwiLCBhZ2U6IDIxIH0pO1xuICAgIHZhciBkb2NUaHJlZSA9IHtcbiAgICAgICAgdWlkOiAxLFxuICAgICAgICByZXNvdXJjZU5hbWU6IFwicGVyc29uXCIsXG4gICAgICAgIGRhdGE6IFwiaGFyc2hcIixcbiAgICB9O1xuICAgIHZhciBkb2NGb3VyID0ge1xuICAgICAgICB1aWQ6IDIsXG4gICAgICAgIHJlc291cmNlTmFtZTogXCJzaG9waW5nTGlzdFwiLFxuICAgICAgICBkYXRhOiBbXCJicmVhZFwiLCBcIm1pbGtcIl0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZ2VuZXJpYyA9IGdlbmVyaWM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudGVzdCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHRlc3QoKSB7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgICAgbmFtZTogXCJoYXJzaFwiLFxuICAgICAgICBhZ2U6IDIxLFxuICAgICAgICBjaXR5OiBcIkFITVwiLFxuICAgICAgICBjb3VudHJ5OiBcIklORFwiLFxuICAgICAgICBnZW5kZXI6IFwiTWFsZVwiLFxuICAgICAgICBza2lsbDogW1wiSlNcIiwgXCJDU1NcIiwgMTJdLFxuICAgIH07XG4gICAgLy8gICBjb25zb2xlLmxvZyhgJHtvYmoubmFtZX0gYW5kICR7b2JqLmFnZX1gKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKG9iaik7XG4gICAgLy8/LS0tLS0tLS0tLS0tIGNsYXNzXG4gICAgLy8gICBjbGFzcyBwZXJzb24ge1xuICAgIC8vICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYWdlPzogbnVtYmVyKSB7fVxuICAgIC8vICAgfVxuICAgIC8vICAgY29uc3Qgb2JqID0gbmV3IHBlcnNvbihcImhhcnNoXCIsIDIxKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKG9iaik7XG4gICAgLy8/LS0tLS0tLS0tLS0tLSB0eXBlXG4gICAgLy8gICB0eXBlIHBlcnNvbiA9IHtcbiAgICAvLyAgICAgbmFtZTogc3RyaW5nO1xuICAgIC8vICAgICBhZ2U/OiBudW1iZXI7XG4gICAgLy8gICB9O1xuICAgIC8vICAgY29uc3Qgb2JqOiBwZXJzb24gPSB7XG4gICAgLy8gICAgIG5hbWU6IFwiaGFyc2hcIixcbiAgICAvLyAgIH07XG4gICAgLy8gICBjb25zb2xlLmxvZyhvYmopO1xuICAgIC8vPy0tLS0tLS0tLS0tLS0tIEFycm93IGZ1bmN0aW9uXG4gICAgdmFyIGFyciA9IGZ1bmN0aW9uIChuYW1lLCBjaXR5LCBjb3VudHJ5LCBnZW5kZXIsIHNraWxsLCBhZ2UpIHsgcmV0dXJuICh7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGNpdHk6IGNpdHksXG4gICAgICAgIGNvdW50cnk6IGNvdW50cnksXG4gICAgICAgIGdlbmRlcjogZ2VuZGVyLFxuICAgICAgICBza2lsbDogc2tpbGwsXG4gICAgICAgIGFnZTogYWdlLFxuICAgIH0pOyB9O1xuICAgIC8vICAgY29uc29sZS5sb2coYXJyKFwiaGFyc2hcIiwgXCJESEFSSVwiLCBcIklORFwiLCBcIk1hbGVcIiwgW1wiSlNcIl0sIDI1KSk7XG4gICAgLy8gdHlwZSB3aXRoIGFycm93IGZ1bmN0aW9uXG4gICAgLy8gICB0eXBlIHVzZXIgPSB7XG4gICAgLy8gICAgIG5hbWU6IHN0cmluZztcbiAgICAvLyAgICAgYWdlOiBudW1iZXI7XG4gICAgLy8gICB9O1xuICAgIC8vICAgY29uc3QgZ3JlZXRQZXJzb24gPSAocGVyc29uMzogdXNlcik6IHN0cmluZyA9PiB7XG4gICAgLy8gICAgIHJldHVybiBgXCJIZWxsb1wiLCAke3BlcnNvbjMubmFtZX0sICR7cGVyc29uMy5hZ2V9YDtcbiAgICAvLyAgIH07XG4gICAgLy8gICBjb25zdCBicm86IHVzZXIgPSB7IG5hbWU6IFwiaGFyc2hcIiwgYWdlOiAyMSB9O1xuICAgIC8vICAgY29uc29sZS5sb2coZ3JlZXRQZXJzb24oYnJvKSk7XG4gICAgLy8/LS0tLS0tLS0tLS0tLS0tLS0gbm9ybWFsIGNsYXNzXG4gICAgdmFyIGNhciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gY2FyKG5hbWUsIGFnZSkge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHRoaXMuYWdlID0gYWdlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXI7XG4gICAgfSgpKTtcbiAgICAvLz8gZXh0ZW5kXG4gICAgLy8gICBjbGFzcyBjYXIyIGV4dGVuZHMgY2FyIHt9XG4gICAgLy8gICBjb25zdCBvYmoxID0gbmV3IGNhcjIoXCJIYXJzaFwiLCAyNSk7XG4gICAgLy8/IGltcGxlbWVudHNcbiAgICAvLyAgIGNsYXNzIGNhcjIgaW1wbGVtZW50cyBjYXIge1xuICAgIC8vICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYWdlOiBudW1iZXIpIHt9XG4gICAgLy8gICB9XG4gICAgLy8gICBjb25zdCBvYmoxID0gbmV3IGNhcjIoXCJIYXJzaFwiLCA1NCk7XG4gICAgLy8/LS0tLS0tLS0tLSBwcm9ibGVtIGNvbnZlcnRpbmcgc3RyaW5nIGludG8gbnVtYmVyXG4gICAgdmFyIHg7XG4gICAgeCA9IFwiNDJhXCI7XG4gICAgLy8gICBjb25zb2xlLmxvZyh0eXBlb2YgeCwgeCk7XG4gICAgdmFyIHkgPSBOdW1iZXIoeCk7XG4gICAgLy8gICBjb25zb2xlLmxvZyh0eXBlb2YgeSwgeSk7XG4gICAgLy8/LS0tLS0tLS0tLSBzb2x1dGlvbiB0byBhYm92ZSBwcm9ibGVtXG4gICAgLy8gICBsZXQgYTogc3RyaW5nID0gXCI0MlwiO1xuICAgIC8vICAgbGV0IGIgPSBOdW1iZXIoYSk7XG4gICAgLy8gICBpZiAoIWlzTmFOKGIpKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHR5cGVvZiBiLCBiICsgMSk7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImludmFsaWQgbnVtYmVyXCIpO1xuICAgIC8vICAgfVxufVxuZXhwb3J0cy50ZXN0ID0gdGVzdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy50dXBsZSA9IHZvaWQgMDtcbmZ1bmN0aW9uIHR1cGxlKCkge1xuICAgIC8vd2l0aG91dCB0dXBsZVxuICAgIHZhciBhcnIgPSBbXCJoYXJzaFwiLCAyMSwgdHJ1ZV07XG4gICAgLy8gYW55IG9mIHRoZSBhYm92ZSBhcnJheSB2YWx1ZXMgY2FuIGJlIGluIGFueSBwb3NpdGlvblxuICAgIC8vIGkuZS4gYXJyWzBdIGNhbiBiZSBudW1iZXJcbiAgICBhcnJbMF0gPSA0NTtcbiAgICBhcnJbMV0gPSBcImFzaGlzaFwiO1xuICAgIGFyciA9IFsyMSwgZmFsc2UsIDIxXTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGFycik7XG4gICAgLy93aXRoIHR1cGxlXG4gICAgdmFyIGFycjIgPSBbXCJoYXJzaFwiLCAyMSwgZmFsc2VdO1xuICAgIC8vIGFueSBvZiB0aGUgYWJvdmUgYXJyYXkgdmFsdWVzIGNhbiBub3QgYmUgaW4gZGlmZmVyZW50IHBvc2l0aW9uXG4gICAgLy8gaS5lLiBhcnIyWzBdIG11c3QgYmUgc3RyaW5nXG4gICAgYXJyMlswXSA9IFwidmF0c2FsXCI7XG4gICAgYXJyMlsxXSA9IDQ1O1xuICAgIC8vICAgY29uc29sZS5sb2coYXJyMik7XG59XG5leHBvcnRzLnR1cGxlID0gdHVwbGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaW52b2ljZV8xID0gcmVxdWlyZShcIi4vY2xhc3Nlcy9pbnZvaWNlXCIpO1xudmFyIHBheW1lbnRzXzEgPSByZXF1aXJlKFwiLi9jbGFzc2VzL3BheW1lbnRzXCIpO1xuLy8gT2JqZWN0XG4vLyBjb25zdCBpbnZPbmUgPSBuZXcgSW52b2ljZShcIm1hcmlvXCIsIFwid29yayBvbiBtYXJpbyB3ZWJzaXRlXCIsIDI1MCk7XG4vLyBjb25zdCBpbnZUd28gPSBuZXcgSW52b2ljZShcImpvaG5cIiwgXCJ3b3JrIG9uIGpvaG4gcG9vbFwiLCAxNTApO1xuLy8gY29uc29sZS5sb2coaW52T25lLCBpbnZUd28pO1xuLy8gdXNlIG9mIGNsYXNzIHdpdGggYXJyYXlzXG4vLyBvbmx5IGFycmF5cyBjcmVhdGVkIHVzaW5nIEludm9pY2UgY2xhc3Mgd2lsbCBiZSBhbGxvd2VkIGluIGludm9pY2VzIGFycmF5XG4vLyBsZXQgaW52b2ljZXM6IEludm9pY2VbXSA9IFtdO1xuLy8gaW52b2ljZXMucHVzaChpbnZPbmUpO1xuLy8gaW52b2ljZXMucHVzaChpbnZUd28pO1xuLy8gY29uc29sZS5sb2coaW52b2ljZXMpO1xuLy8gd2UgY2FuIGNoYW5nZSBvYmplY3QgdmFsdWVzIHRvIHN0b3AgdGhhdCB1c2UgQWNjZXNzIG1vZGlmaWVyIHByaXZhdGUgaW4gY2xhc3Ncbi8vIGludk9uZS5jbGllbnQgPSBcImhhcnNoXCI7XG4vLyBpbnZUd28uYW1vdW50ID0gNTAwO1xuLy8gZ2V0IGVsZW1udHMgZnJvbSBodG1sXG52YXIgdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0TWVudVwiKTtcbnZhciB0b0Zyb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0VG9Gcm9tXCIpO1xudmFyIGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0RGV0YWlsc1wiKTtcbnZhciBhbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0QW1vdW50XCIpO1xudmFyIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0taXRlbVwiKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHR5cGUudmFsdWUsIHRvRnJvbS52YWx1ZSwgZGV0YWlscy52YWx1ZSwgYW1vdW50LnZhbHVlQXNOdW1iZXIpO1xuICAgIGlmICh0eXBlLnZhbHVlID09PSBcIlwiIHx8XG4gICAgICAgIHRvRnJvbS52YWx1ZSA9PT0gXCJcIiB8fFxuICAgICAgICBkZXRhaWxzLnZhbHVlID09PSBcIlwiIHx8XG4gICAgICAgIGFtb3VudC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBmaWxsIGFsbCB0aGUgZmllbGRzXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGRvYyA9IHZvaWQgMDtcbiAgICAgICAgaWYgKHR5cGUudmFsdWUgPT09IFwiaW52b2ljZVwiKSB7XG4gICAgICAgICAgICBkb2MgPSBuZXcgaW52b2ljZV8xLkludm9pY2UodG9Gcm9tLnZhbHVlLCBkZXRhaWxzLnZhbHVlLCBhbW91bnQudmFsdWVBc051bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb2MgPSBuZXcgcGF5bWVudHNfMS5QYXltZW50cyh0b0Zyb20udmFsdWUsIGRldGFpbHMudmFsdWUsIGFtb3VudC52YWx1ZUFzTnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhkb2MpO1xuICAgIH1cbn0pO1xuLy8gbGV0IGRvY09uZTogSGFzRm9ybWF0dGVyO1xuLy8gbGV0IGRvY1R3bzogSGFzRm9ybWF0dGVyO1xuLy8gZG9jT25lID0gbmV3IEludm9pY2UoXCJIYXJzaFwiLCBcIldlYiBQcm9ncmFtbWluZ1wiLCAzMDApO1xuLy8gZG9jVHdvID0gbmV3IFBheW1lbnRzKFwiTWFyaW9cIiwgXCJQbHVtYmluZ1wiLCAxNTApO1xuLy8gbGV0IGRvY3M6IEhhc0Zvcm1hdHRlcltdID0gW107XG4vLyBkb2NzLnB1c2goZG9jT25lKTtcbi8vIGRvY3MucHVzaChkb2NUd28pO1xuLy8gY29uc29sZS5sb2coZG9jcyk7XG52YXIgZ2VuZXJpY18xID0gcmVxdWlyZShcIi4vZ2VuZXJpY3MvZ2VuZXJpY1wiKTtcbigwLCBnZW5lcmljXzEuZ2VuZXJpYykoKTtcbnZhciBlbnVtXzEgPSByZXF1aXJlKFwiLi9lbnVtcy9lbnVtXCIpO1xuKDAsIGVudW1fMS5lbnVtVGVzdCkoKTtcbnZhciB0dXBsZXNfMSA9IHJlcXVpcmUoXCIuL3R1cGxlcy90dXBsZXNcIik7XG4oMCwgdHVwbGVzXzEudHVwbGUpKCk7XG52YXIgdGVzdF8xID0gcmVxdWlyZShcIi4vdGVzdC90ZXN0XCIpO1xuKDAsIHRlc3RfMS50ZXN0KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9