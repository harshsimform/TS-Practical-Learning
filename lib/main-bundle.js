/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/abstract/abstract.ts":
/*!**********************************!*\
  !*** ./src/abstract/abstract.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.abstract = void 0;
// You can't create an object/instance of abstract class
function abstract() {
    class Student {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        // i can use this getHello() directly for an obj
        getHello() {
            return "Hello user";
        }
    }
    class stud extends Student {
        constructor(name, age, role) {
            super(name, age);
            this.name = name;
            this.age = age;
            this.role = role;
        }
        getDetails() {
            return `${this.name} and ${this.age} and ${this.role}`;
        }
    }
    const obj = new stud("harsh", 21, "Trainee");
    //   console.log(obj.getDetails());
    obj.getHello();
    //   console.log(obj.getHello());
}
exports.abstract = abstract;


/***/ }),

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
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.details} for ${this.amount}`;
    }
}
exports.Invoice = Invoice;


/***/ }),

/***/ "./src/classes/payments.ts":
/*!*********************************!*\
  !*** ./src/classes/payments.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Payments = void 0;
class Payments {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed $${this.details} for ${this.amount}`;
    }
}
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
    let ResourceType;
    (function (ResourceType) {
        ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
        ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
        ResourceType[ResourceType["FILM"] = 2] = "FILM";
        ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
        ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
    })(ResourceType || (ResourceType = {}));
    const docOne = {
        uid: 1,
        resourceType: ResourceType.FILM,
        data: { title: "name of the wind" },
    };
    const docTwo = {
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
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generic = void 0;
function generic() {
    // Case-1
    const addUID = (obj) => {
        let uid = Math.floor(Math.random() * 100);
        return Object.assign(Object.assign({}, obj), { uid });
    };
    // let doc1 = addUID({ name: "ashish", age: 21 });
    // console.log(doc1);
    // property name doesn't exist
    // console.log(doc1.name);
    // Case-2 do this to solve above line-12 error
    // T will capture all the information we pass in functions so when we return, it will know what properties are on object
    const addUID2 = (obj) => {
        let uid = Math.floor(Math.random() * 100);
        return Object.assign(Object.assign({}, obj), { uid });
    };
    let doc1 = addUID2({ name: "harsh", age: 21 });
    const docThree = {
        uid: 1,
        resourceName: "person",
        data: "harsh",
    };
    const docFour = {
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
    const obj = {
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
    const arr = (name, city, country, gender, skill, age) => ({
        name,
        city,
        country,
        gender,
        skill,
        age,
    });
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
    class car {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    //? extend
    //   class car2 extends car {}
    //   const obj1 = new car2("Harsh", 25);
    //? implements
    //   class car2 implements car {
    //     constructor(public name: string, public age: number) {}
    //   }
    //   const obj1 = new car2("Harsh", 54);
    //?---------- problem converting string into number
    let x;
    x = "42a";
    //   console.log(typeof x, x);
    let y = Number(x);
    //   console.log(typeof y, y);
    //?---------- solution to above problem
    //   let a: string = "42";
    //   let b = Number(a);
    //   if (!isNaN(b)) {
    //     console.log(typeof b, b + 1);
    //   } else {
    //     console.log("invalid number");
    //   }
    //?---------- write better functions in TS
    // Case-1 specify what kind of value want to return from function
    function a(num) {
        // return (num += 10);
        return "hello";
    }
    // Case-2 use | symbol to specify multiple return type format
    function b(myVal) {
        if (myVal > 5) {
            return true;
        }
        else {
            return "Invalid";
        }
    }
    // Case-3 Arrow function
    const c = (str) => {
        return "";
    };
    // Case-4 with Array.map, specify which type of value you want ro return from map function
    const arrVal = ["john", "mark", "vatsal"];
    // const arrVal = [1, 2, 3, 4];
    arrVal.map((val) => {
        return `values: ${val}`;
    });
    console.log();
    const objStud = {
        skills: ["harsh", 12],
    };
    // console.log(objStud);
    //? Case-2
    function user2(str) {
        return str;
        // return (str = true);
    }
    user2(3);
    // user2(true);
    // user2(true);
    //? Case-3
    function user3(str) {
        return (str = true);
    }
    const objStud1 = {
        skills1: ["harsh", 1, 2, 3],
        city: "AHM",
    };
    // console.log(objStud1);
    // console.log(typeof objStud1.skills1);
    //? Case-2
    // interface Student1<T> {
    //   skills1: T;
    // }
    // const objStud1: Student1<string[] | number[]> = {
    //   skills1: ["harsh", "vatsal"],
    // };
    // console.log(objStud1);
    //---------------
    let score = [];
    score = [1, 2, 3, 4, "43"];
    // console.log(score);
    //? Case-3
    function user4(str) {
        return str;
    }
    user4([1, 2, 3, 4, "harsh"]);
}
exports.test = test;


/***/ }),

/***/ "./src/test2/test2.ts":
/*!****************************!*\
  !*** ./src/test2/test2.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.test2 = void 0;
function test2() {
    class stud {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            return "Harsh";
        }
        getName() {
            return `Hello ${this.name}`;
        }
    }
    const obj = new stud("harsh", 21);
    //   console.log(obj);
    //   console.log(obj.sayHello());
    //   console.log(obj.getName());
}
exports.test2 = test2;


/***/ }),

/***/ "./src/test3/test3.ts":
/*!****************************!*\
  !*** ./src/test3/test3.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.test3 = void 0;
function test3() {
    // Type casting using Generics
    function identity(arg0) {
        return arg0;
    }
    // let output = identity<string | number>(true)
    // console.log(output)
    // Type annotation for number to string
    let y = 124343;
    console.log(typeof y, y);
    // console.log((y as unknown as number).toString());
    // Type annotation with assertion
    let x = y.toString();
    console.log(typeof x, x);
    // string to number
    let a = "42";
    let b = Number(a);
    if (!isNaN(b)) {
        console.log(typeof a, a);
        console.log(typeof b, b);
    }
    else {
        console.log("invalid number");
    }
    //----- Type Narrowing in TypeScript -----//
    // Type Guard to Narrowing
    function callMe(y) {
        if (typeof y === "string") {
            console.log("string");
        }
        else if (typeof y === "number") {
            console.log("number");
        }
    }
    // callMe(123)
    // Truthiness Narrowing
    function truthiness(x) {
        if (x) {
            console.log(typeof x); // "string"
        }
        else {
            console.log("undefined");
        }
    }
    // truthiness(undefined)
    // Equality Narrowing
    function equality(x, y) {
        if (x === y) {
            // narrowed to number
            console.log(typeof x, "x and y same"); // number
        }
        else {
            // this is not narrowed
            console.log(typeof x); // number or string
        }
    }
    function calculateArea(shape) {
        if (shape.shape === "rectangle") {
            // you can only access the properties of reactangle and not circle
            console.log("Area of reactangle: " + shape.height * shape.width);
            // typescript would throw an error if you tried to access radius
            //   console.log(shape.radius);
        }
        if (shape.shape === "circle") {
            // you can only access the properties of circle and not reactangle
            console.log("Area of circle: " + 3.14 * shape.radius * shape.radius);
            // tupescript would throw an error if you tried to access width
            //   console.log(shape.width);
        }
    }
}
exports.test3 = test3;


/***/ }),

/***/ "./src/tuples/tuples.ts":
/*!******************************!*\
  !*** ./src/tuples/tuples.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tuple = void 0;
//? A tuple type is an array with a predefined length and predefined types in each index position in the array. The types inside this array do not have to be the same, could be a mixture of different types.
function tuple() {
    //without tuple
    let arr = ["harsh", 21, true];
    // any of the above array values can be in any position
    // i.e. arr[0] can be number
    arr[0] = 45;
    arr[1] = "ashish";
    arr = [21, false, 21];
    //   console.log(arr);
    //with tuple
    let arr2 = ["harsh", 21, false];
    // any of the above array values can not be in different position
    // i.e. arr2[0] must be string
    arr2[0] = "vatsal";
    arr2[1] = 45;
    //   console.log(arr2);
    // with tuple Case-2
    function apiCall1() {
        return __awaiter(this, void 0, void 0, function* () {
            return "";
        });
    }
    function apiCall2() {
        return __awaiter(this, void 0, void 0, function* () {
            return 1;
        });
    }
    function apiCall3() {
        return __awaiter(this, void 0, void 0, function* () {
            return false;
        });
    }
    function main() {
        return __awaiter(this, void 0, void 0, function* () {
            // destructure the above Promise.all() as follows, with each variable getting assigned the correct types.
            const [string, number, boolean] = yield Promise.all([
                apiCall1(),
                apiCall2(),
                apiCall3(),
            ]);
        });
    }
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
const invoice_1 = __webpack_require__(/*! ./classes/invoice */ "./src/classes/invoice.ts");
const payments_1 = __webpack_require__(/*! ./classes/payments */ "./src/classes/payments.ts");
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
const type = document.querySelector("#selectMenu");
const toFrom = document.querySelector("#inputToFrom");
const details = document.querySelector("#inputDetails");
const amount = document.querySelector("#inputAmount");
const form = document.querySelector(".form-item");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //   console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
    if (type.value === "" ||
        toFrom.value === "" ||
        details.value === "" ||
        amount.value === "") {
        alert("Please fill all the fields");
    }
    else {
        let doc;
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
const generic_1 = __webpack_require__(/*! ./generics/generic */ "./src/generics/generic.ts");
(0, generic_1.generic)();
const enum_1 = __webpack_require__(/*! ./enums/enum */ "./src/enums/enum.ts");
(0, enum_1.enumTest)();
const tuples_1 = __webpack_require__(/*! ./tuples/tuples */ "./src/tuples/tuples.ts");
(0, tuples_1.tuple)();
const test_1 = __webpack_require__(/*! ./test/test */ "./src/test/test.ts");
(0, test_1.test)();
// resultNarrow();
const abstract_1 = __webpack_require__(/*! ./abstract/abstract */ "./src/abstract/abstract.ts");
(0, abstract_1.abstract)();
const test2_1 = __webpack_require__(/*! ./test2/test2 */ "./src/test2/test2.ts");
(0, test2_1.test2)();
const test3_1 = __webpack_require__(/*! ./test3/test3 */ "./src/test3/test3.ts");
(0, test3_1.test3)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3JDO0FBQ0EsaUJBQWlCLG1CQUFPLENBQUMsK0NBQWlCO0FBQzFDO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLHVDQUFhO0FBQ3BDO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyx1REFBcUI7QUFDaEQ7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQywyQ0FBZTtBQUN2QztBQUNBLGdCQUFnQixtQkFBTyxDQUFDLDJDQUFlO0FBQ3ZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtcHJhY3RpY2FsLWxlYXJuaW5nLy4vc3JjL2Fic3RyYWN0L2Fic3RyYWN0LnRzIiwid2VicGFjazovL3RzLXByYWN0aWNhbC1sZWFybmluZy8uL3NyYy9jbGFzc2VzL2ludm9pY2UudHMiLCJ3ZWJwYWNrOi8vdHMtcHJhY3RpY2FsLWxlYXJuaW5nLy4vc3JjL2NsYXNzZXMvcGF5bWVudHMudHMiLCJ3ZWJwYWNrOi8vdHMtcHJhY3RpY2FsLWxlYXJuaW5nLy4vc3JjL2VudW1zL2VudW0udHMiLCJ3ZWJwYWNrOi8vdHMtcHJhY3RpY2FsLWxlYXJuaW5nLy4vc3JjL2dlbmVyaWNzL2dlbmVyaWMudHMiLCJ3ZWJwYWNrOi8vdHMtcHJhY3RpY2FsLWxlYXJuaW5nLy4vc3JjL3Rlc3QvdGVzdC50cyIsIndlYnBhY2s6Ly90cy1wcmFjdGljYWwtbGVhcm5pbmcvLi9zcmMvdGVzdDIvdGVzdDIudHMiLCJ3ZWJwYWNrOi8vdHMtcHJhY3RpY2FsLWxlYXJuaW5nLy4vc3JjL3Rlc3QzL3Rlc3QzLnRzIiwid2VicGFjazovL3RzLXByYWN0aWNhbC1sZWFybmluZy8uL3NyYy90dXBsZXMvdHVwbGVzLnRzIiwid2VicGFjazovL3RzLXByYWN0aWNhbC1sZWFybmluZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy1wcmFjdGljYWwtbGVhcm5pbmcvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFic3RyYWN0ID0gdm9pZCAwO1xuLy8gWW91IGNhbid0IGNyZWF0ZSBhbiBvYmplY3QvaW5zdGFuY2Ugb2YgYWJzdHJhY3QgY2xhc3NcbmZ1bmN0aW9uIGFic3RyYWN0KCkge1xuICAgIGNsYXNzIFN0dWRlbnQge1xuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lLCBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB0aGlzLmFnZSA9IGFnZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpIGNhbiB1c2UgdGhpcyBnZXRIZWxsbygpIGRpcmVjdGx5IGZvciBhbiBvYmpcbiAgICAgICAgZ2V0SGVsbG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJIZWxsbyB1c2VyXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xhc3Mgc3R1ZCBleHRlbmRzIFN0dWRlbnQge1xuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lLCBhZ2UsIHJvbGUpIHtcbiAgICAgICAgICAgIHN1cGVyKG5hbWUsIGFnZSk7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5hZ2UgPSBhZ2U7XG4gICAgICAgICAgICB0aGlzLnJvbGUgPSByb2xlO1xuICAgICAgICB9XG4gICAgICAgIGdldERldGFpbHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5uYW1lfSBhbmQgJHt0aGlzLmFnZX0gYW5kICR7dGhpcy5yb2xlfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgb2JqID0gbmV3IHN0dWQoXCJoYXJzaFwiLCAyMSwgXCJUcmFpbmVlXCIpO1xuICAgIC8vICAgY29uc29sZS5sb2cob2JqLmdldERldGFpbHMoKSk7XG4gICAgb2JqLmdldEhlbGxvKCk7XG4gICAgLy8gICBjb25zb2xlLmxvZyhvYmouZ2V0SGVsbG8oKSk7XG59XG5leHBvcnRzLmFic3RyYWN0ID0gYWJzdHJhY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIFRTIENsYXNzXG4vLyBjbGFzcyBJbnZvaWNlIHtcbi8vICAgcmVhZG9ubHkgY2xpZW50OiBzdHJpbmc7XG4vLyAgIHByaXZhdGUgZGV0YWlsczogc3RyaW5nO1xuLy8gICBwcml2YXRlIGFtb3VudDogbnVtYmVyO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbnZvaWNlID0gdm9pZCAwO1xuY2xhc3MgSW52b2ljZSB7XG4gICAgY29uc3RydWN0b3IoY2xpZW50LCBkZXRhaWxzLCBhbW91bnQpIHtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gICAgICAgIHRoaXMuYW1vdW50ID0gYW1vdW50O1xuICAgIH1cbiAgICBmb3JtYXQoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNsaWVudH0gb3dlcyAkJHt0aGlzLmRldGFpbHN9IGZvciAke3RoaXMuYW1vdW50fWA7XG4gICAgfVxufVxuZXhwb3J0cy5JbnZvaWNlID0gSW52b2ljZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QYXltZW50cyA9IHZvaWQgMDtcbmNsYXNzIFBheW1lbnRzIHtcbiAgICBjb25zdHJ1Y3RvcihyZWNpcGllbnQsIGRldGFpbHMsIGFtb3VudCkge1xuICAgICAgICB0aGlzLnJlY2lwaWVudCA9IHJlY2lwaWVudDtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XG4gICAgfVxuICAgIGZvcm1hdCgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMucmVjaXBpZW50fSBpcyBvd2VkICQke3RoaXMuZGV0YWlsc30gZm9yICR7dGhpcy5hbW91bnR9YDtcbiAgICB9XG59XG5leHBvcnRzLlBheW1lbnRzID0gUGF5bWVudHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZW51bVRlc3QgPSB2b2lkIDA7XG5mdW5jdGlvbiBlbnVtVGVzdCgpIHtcbiAgICAvLyAgIGNvbnN0IGRvY09uZTogUmVzb3VyY2U8b2JqZWN0PiA9IHtcbiAgICAvLyAgICAgdWlkOiAxLFxuICAgIC8vICAgICByZXNvdXJjZVR5cGU6IDIsXG4gICAgLy8gICAgIGRhdGE6IHsgdGl0bGU6IFwibmFtZSBvZiB0aGUgd2luZFwiIH0sXG4gICAgLy8gICB9O1xuICAgIC8vICAgY29uc3QgZG9jVHdvOiBSZXNvdXJjZTxvYmplY3Q+ID0ge1xuICAgIC8vICAgICB1aWQ6IDIsXG4gICAgLy8gICAgIHJlc291cmNlVHlwZTogNCxcbiAgICAvLyAgICAgZGF0YTogeyBuYW1lOiBcIkpvaG5cIiB9LFxuICAgIC8vICAgfTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGRvY09uZSwgZG9jVHdvKTtcbiAgICAvLyB3aXRoIGVudW1cbiAgICBsZXQgUmVzb3VyY2VUeXBlO1xuICAgIChmdW5jdGlvbiAoUmVzb3VyY2VUeXBlKSB7XG4gICAgICAgIFJlc291cmNlVHlwZVtSZXNvdXJjZVR5cGVbXCJCT09LXCJdID0gMF0gPSBcIkJPT0tcIjtcbiAgICAgICAgUmVzb3VyY2VUeXBlW1Jlc291cmNlVHlwZVtcIkFVVEhPUlwiXSA9IDFdID0gXCJBVVRIT1JcIjtcbiAgICAgICAgUmVzb3VyY2VUeXBlW1Jlc291cmNlVHlwZVtcIkZJTE1cIl0gPSAyXSA9IFwiRklMTVwiO1xuICAgICAgICBSZXNvdXJjZVR5cGVbUmVzb3VyY2VUeXBlW1wiRElSRUNUT1JcIl0gPSAzXSA9IFwiRElSRUNUT1JcIjtcbiAgICAgICAgUmVzb3VyY2VUeXBlW1Jlc291cmNlVHlwZVtcIlBFUlNPTlwiXSA9IDRdID0gXCJQRVJTT05cIjtcbiAgICB9KShSZXNvdXJjZVR5cGUgfHwgKFJlc291cmNlVHlwZSA9IHt9KSk7XG4gICAgY29uc3QgZG9jT25lID0ge1xuICAgICAgICB1aWQ6IDEsXG4gICAgICAgIHJlc291cmNlVHlwZTogUmVzb3VyY2VUeXBlLkZJTE0sXG4gICAgICAgIGRhdGE6IHsgdGl0bGU6IFwibmFtZSBvZiB0aGUgd2luZFwiIH0sXG4gICAgfTtcbiAgICBjb25zdCBkb2NUd28gPSB7XG4gICAgICAgIHVpZDogMixcbiAgICAgICAgcmVzb3VyY2VUeXBlOiBSZXNvdXJjZVR5cGUuUEVSU09OLFxuICAgICAgICBkYXRhOiB7IG5hbWU6IFwiSm9oblwiIH0sXG4gICAgfTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGRvY09uZSwgZG9jVHdvKTtcbn1cbmV4cG9ydHMuZW51bVRlc3QgPSBlbnVtVGVzdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZW5lcmljID0gdm9pZCAwO1xuZnVuY3Rpb24gZ2VuZXJpYygpIHtcbiAgICAvLyBDYXNlLTFcbiAgICBjb25zdCBhZGRVSUQgPSAob2JqKSA9PiB7XG4gICAgICAgIGxldCB1aWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBvYmopLCB7IHVpZCB9KTtcbiAgICB9O1xuICAgIC8vIGxldCBkb2MxID0gYWRkVUlEKHsgbmFtZTogXCJhc2hpc2hcIiwgYWdlOiAyMSB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyhkb2MxKTtcbiAgICAvLyBwcm9wZXJ0eSBuYW1lIGRvZXNuJ3QgZXhpc3RcbiAgICAvLyBjb25zb2xlLmxvZyhkb2MxLm5hbWUpO1xuICAgIC8vIENhc2UtMiBkbyB0aGlzIHRvIHNvbHZlIGFib3ZlIGxpbmUtMTIgZXJyb3JcbiAgICAvLyBUIHdpbGwgY2FwdHVyZSBhbGwgdGhlIGluZm9ybWF0aW9uIHdlIHBhc3MgaW4gZnVuY3Rpb25zIHNvIHdoZW4gd2UgcmV0dXJuLCBpdCB3aWxsIGtub3cgd2hhdCBwcm9wZXJ0aWVzIGFyZSBvbiBvYmplY3RcbiAgICBjb25zdCBhZGRVSUQyID0gKG9iaikgPT4ge1xuICAgICAgICBsZXQgdWlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb2JqKSwgeyB1aWQgfSk7XG4gICAgfTtcbiAgICBsZXQgZG9jMSA9IGFkZFVJRDIoeyBuYW1lOiBcImhhcnNoXCIsIGFnZTogMjEgfSk7XG4gICAgY29uc3QgZG9jVGhyZWUgPSB7XG4gICAgICAgIHVpZDogMSxcbiAgICAgICAgcmVzb3VyY2VOYW1lOiBcInBlcnNvblwiLFxuICAgICAgICBkYXRhOiBcImhhcnNoXCIsXG4gICAgfTtcbiAgICBjb25zdCBkb2NGb3VyID0ge1xuICAgICAgICB1aWQ6IDIsXG4gICAgICAgIHJlc291cmNlTmFtZTogXCJzaG9waW5nTGlzdFwiLFxuICAgICAgICBkYXRhOiBbXCJicmVhZFwiLCBcIm1pbGtcIl0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZ2VuZXJpYyA9IGdlbmVyaWM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudGVzdCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHRlc3QoKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgICBuYW1lOiBcImhhcnNoXCIsXG4gICAgICAgIGFnZTogMjEsXG4gICAgICAgIGNpdHk6IFwiQUhNXCIsXG4gICAgICAgIGNvdW50cnk6IFwiSU5EXCIsXG4gICAgICAgIGdlbmRlcjogXCJNYWxlXCIsXG4gICAgICAgIHNraWxsOiBbXCJKU1wiLCBcIkNTU1wiLCAxMl0sXG4gICAgfTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGAke29iai5uYW1lfSBhbmQgJHtvYmouYWdlfWApO1xuICAgIC8vICAgY29uc29sZS5sb2cob2JqKTtcbiAgICAvLz8tLS0tLS0tLS0tLS0gY2xhc3NcbiAgICAvLyAgIGNsYXNzIHBlcnNvbiB7XG4gICAgLy8gICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhZ2U/OiBudW1iZXIpIHt9XG4gICAgLy8gICB9XG4gICAgLy8gICBjb25zdCBvYmogPSBuZXcgcGVyc29uKFwiaGFyc2hcIiwgMjEpO1xuICAgIC8vICAgY29uc29sZS5sb2cob2JqKTtcbiAgICAvLz8tLS0tLS0tLS0tLS0tIHR5cGVcbiAgICAvLyAgIHR5cGUgcGVyc29uID0ge1xuICAgIC8vICAgICBuYW1lOiBzdHJpbmc7XG4gICAgLy8gICAgIGFnZT86IG51bWJlcjtcbiAgICAvLyAgIH07XG4gICAgLy8gICBjb25zdCBvYmo6IHBlcnNvbiA9IHtcbiAgICAvLyAgICAgbmFtZTogXCJoYXJzaFwiLFxuICAgIC8vICAgfTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKG9iaik7XG4gICAgLy8/LS0tLS0tLS0tLS0tLS0gQXJyb3cgZnVuY3Rpb25cbiAgICBjb25zdCBhcnIgPSAobmFtZSwgY2l0eSwgY291bnRyeSwgZ2VuZGVyLCBza2lsbCwgYWdlKSA9PiAoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBjaXR5LFxuICAgICAgICBjb3VudHJ5LFxuICAgICAgICBnZW5kZXIsXG4gICAgICAgIHNraWxsLFxuICAgICAgICBhZ2UsXG4gICAgfSk7XG4gICAgLy8gICBjb25zb2xlLmxvZyhhcnIoXCJoYXJzaFwiLCBcIkRIQVJJXCIsIFwiSU5EXCIsIFwiTWFsZVwiLCBbXCJKU1wiXSwgMjUpKTtcbiAgICAvLyB0eXBlIHdpdGggYXJyb3cgZnVuY3Rpb25cbiAgICAvLyAgIHR5cGUgdXNlciA9IHtcbiAgICAvLyAgICAgbmFtZTogc3RyaW5nO1xuICAgIC8vICAgICBhZ2U6IG51bWJlcjtcbiAgICAvLyAgIH07XG4gICAgLy8gICBjb25zdCBncmVldFBlcnNvbiA9IChwZXJzb24zOiB1c2VyKTogc3RyaW5nID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIGBcIkhlbGxvXCIsICR7cGVyc29uMy5uYW1lfSwgJHtwZXJzb24zLmFnZX1gO1xuICAgIC8vICAgfTtcbiAgICAvLyAgIGNvbnN0IGJybzogdXNlciA9IHsgbmFtZTogXCJoYXJzaFwiLCBhZ2U6IDIxIH07XG4gICAgLy8gICBjb25zb2xlLmxvZyhncmVldFBlcnNvbihicm8pKTtcbiAgICAvLz8tLS0tLS0tLS0tLS0tLS0tLSBub3JtYWwgY2xhc3NcbiAgICBjbGFzcyBjYXIge1xuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lLCBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB0aGlzLmFnZSA9IGFnZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLz8gZXh0ZW5kXG4gICAgLy8gICBjbGFzcyBjYXIyIGV4dGVuZHMgY2FyIHt9XG4gICAgLy8gICBjb25zdCBvYmoxID0gbmV3IGNhcjIoXCJIYXJzaFwiLCAyNSk7XG4gICAgLy8/IGltcGxlbWVudHNcbiAgICAvLyAgIGNsYXNzIGNhcjIgaW1wbGVtZW50cyBjYXIge1xuICAgIC8vICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYWdlOiBudW1iZXIpIHt9XG4gICAgLy8gICB9XG4gICAgLy8gICBjb25zdCBvYmoxID0gbmV3IGNhcjIoXCJIYXJzaFwiLCA1NCk7XG4gICAgLy8/LS0tLS0tLS0tLSBwcm9ibGVtIGNvbnZlcnRpbmcgc3RyaW5nIGludG8gbnVtYmVyXG4gICAgbGV0IHg7XG4gICAgeCA9IFwiNDJhXCI7XG4gICAgLy8gICBjb25zb2xlLmxvZyh0eXBlb2YgeCwgeCk7XG4gICAgbGV0IHkgPSBOdW1iZXIoeCk7XG4gICAgLy8gICBjb25zb2xlLmxvZyh0eXBlb2YgeSwgeSk7XG4gICAgLy8/LS0tLS0tLS0tLSBzb2x1dGlvbiB0byBhYm92ZSBwcm9ibGVtXG4gICAgLy8gICBsZXQgYTogc3RyaW5nID0gXCI0MlwiO1xuICAgIC8vICAgbGV0IGIgPSBOdW1iZXIoYSk7XG4gICAgLy8gICBpZiAoIWlzTmFOKGIpKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHR5cGVvZiBiLCBiICsgMSk7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImludmFsaWQgbnVtYmVyXCIpO1xuICAgIC8vICAgfVxuICAgIC8vPy0tLS0tLS0tLS0gd3JpdGUgYmV0dGVyIGZ1bmN0aW9ucyBpbiBUU1xuICAgIC8vIENhc2UtMSBzcGVjaWZ5IHdoYXQga2luZCBvZiB2YWx1ZSB3YW50IHRvIHJldHVybiBmcm9tIGZ1bmN0aW9uXG4gICAgZnVuY3Rpb24gYShudW0pIHtcbiAgICAgICAgLy8gcmV0dXJuIChudW0gKz0gMTApO1xuICAgICAgICByZXR1cm4gXCJoZWxsb1wiO1xuICAgIH1cbiAgICAvLyBDYXNlLTIgdXNlIHwgc3ltYm9sIHRvIHNwZWNpZnkgbXVsdGlwbGUgcmV0dXJuIHR5cGUgZm9ybWF0XG4gICAgZnVuY3Rpb24gYihteVZhbCkge1xuICAgICAgICBpZiAobXlWYWwgPiA1KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIkludmFsaWRcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBDYXNlLTMgQXJyb3cgZnVuY3Rpb25cbiAgICBjb25zdCBjID0gKHN0cikgPT4ge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9O1xuICAgIC8vIENhc2UtNCB3aXRoIEFycmF5Lm1hcCwgc3BlY2lmeSB3aGljaCB0eXBlIG9mIHZhbHVlIHlvdSB3YW50IHJvIHJldHVybiBmcm9tIG1hcCBmdW5jdGlvblxuICAgIGNvbnN0IGFyclZhbCA9IFtcImpvaG5cIiwgXCJtYXJrXCIsIFwidmF0c2FsXCJdO1xuICAgIC8vIGNvbnN0IGFyclZhbCA9IFsxLCAyLCAzLCA0XTtcbiAgICBhcnJWYWwubWFwKCh2YWwpID0+IHtcbiAgICAgICAgcmV0dXJuIGB2YWx1ZXM6ICR7dmFsfWA7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coKTtcbiAgICBjb25zdCBvYmpTdHVkID0ge1xuICAgICAgICBza2lsbHM6IFtcImhhcnNoXCIsIDEyXSxcbiAgICB9O1xuICAgIC8vIGNvbnNvbGUubG9nKG9ialN0dWQpO1xuICAgIC8vPyBDYXNlLTJcbiAgICBmdW5jdGlvbiB1c2VyMihzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgLy8gcmV0dXJuIChzdHIgPSB0cnVlKTtcbiAgICB9XG4gICAgdXNlcjIoMyk7XG4gICAgLy8gdXNlcjIodHJ1ZSk7XG4gICAgLy8gdXNlcjIodHJ1ZSk7XG4gICAgLy8/IENhc2UtM1xuICAgIGZ1bmN0aW9uIHVzZXIzKHN0cikge1xuICAgICAgICByZXR1cm4gKHN0ciA9IHRydWUpO1xuICAgIH1cbiAgICBjb25zdCBvYmpTdHVkMSA9IHtcbiAgICAgICAgc2tpbGxzMTogW1wiaGFyc2hcIiwgMSwgMiwgM10sXG4gICAgICAgIGNpdHk6IFwiQUhNXCIsXG4gICAgfTtcbiAgICAvLyBjb25zb2xlLmxvZyhvYmpTdHVkMSk7XG4gICAgLy8gY29uc29sZS5sb2codHlwZW9mIG9ialN0dWQxLnNraWxsczEpO1xuICAgIC8vPyBDYXNlLTJcbiAgICAvLyBpbnRlcmZhY2UgU3R1ZGVudDE8VD4ge1xuICAgIC8vICAgc2tpbGxzMTogVDtcbiAgICAvLyB9XG4gICAgLy8gY29uc3Qgb2JqU3R1ZDE6IFN0dWRlbnQxPHN0cmluZ1tdIHwgbnVtYmVyW10+ID0ge1xuICAgIC8vICAgc2tpbGxzMTogW1wiaGFyc2hcIiwgXCJ2YXRzYWxcIl0sXG4gICAgLy8gfTtcbiAgICAvLyBjb25zb2xlLmxvZyhvYmpTdHVkMSk7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS1cbiAgICBsZXQgc2NvcmUgPSBbXTtcbiAgICBzY29yZSA9IFsxLCAyLCAzLCA0LCBcIjQzXCJdO1xuICAgIC8vIGNvbnNvbGUubG9nKHNjb3JlKTtcbiAgICAvLz8gQ2FzZS0zXG4gICAgZnVuY3Rpb24gdXNlcjQoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIHVzZXI0KFsxLCAyLCAzLCA0LCBcImhhcnNoXCJdKTtcbn1cbmV4cG9ydHMudGVzdCA9IHRlc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudGVzdDIgPSB2b2lkIDA7XG5mdW5jdGlvbiB0ZXN0MigpIHtcbiAgICBjbGFzcyBzdHVkIHtcbiAgICAgICAgY29uc3RydWN0b3IobmFtZSwgYWdlKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5hZ2UgPSBhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgc2F5SGVsbG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJIYXJzaFwiO1xuICAgICAgICB9XG4gICAgICAgIGdldE5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gYEhlbGxvICR7dGhpcy5uYW1lfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgb2JqID0gbmV3IHN0dWQoXCJoYXJzaFwiLCAyMSk7XG4gICAgLy8gICBjb25zb2xlLmxvZyhvYmopO1xuICAgIC8vICAgY29uc29sZS5sb2cob2JqLnNheUhlbGxvKCkpO1xuICAgIC8vICAgY29uc29sZS5sb2cob2JqLmdldE5hbWUoKSk7XG59XG5leHBvcnRzLnRlc3QyID0gdGVzdDI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudGVzdDMgPSB2b2lkIDA7XG5mdW5jdGlvbiB0ZXN0MygpIHtcbiAgICAvLyBUeXBlIGNhc3RpbmcgdXNpbmcgR2VuZXJpY3NcbiAgICBmdW5jdGlvbiBpZGVudGl0eShhcmcwKSB7XG4gICAgICAgIHJldHVybiBhcmcwO1xuICAgIH1cbiAgICAvLyBsZXQgb3V0cHV0ID0gaWRlbnRpdHk8c3RyaW5nIHwgbnVtYmVyPih0cnVlKVxuICAgIC8vIGNvbnNvbGUubG9nKG91dHB1dClcbiAgICAvLyBUeXBlIGFubm90YXRpb24gZm9yIG51bWJlciB0byBzdHJpbmdcbiAgICBsZXQgeSA9IDEyNDM0MztcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgeSwgeSk7XG4gICAgLy8gY29uc29sZS5sb2coKHkgYXMgdW5rbm93biBhcyBudW1iZXIpLnRvU3RyaW5nKCkpO1xuICAgIC8vIFR5cGUgYW5ub3RhdGlvbiB3aXRoIGFzc2VydGlvblxuICAgIGxldCB4ID0geS50b1N0cmluZygpO1xuICAgIGNvbnNvbGUubG9nKHR5cGVvZiB4LCB4KTtcbiAgICAvLyBzdHJpbmcgdG8gbnVtYmVyXG4gICAgbGV0IGEgPSBcIjQyXCI7XG4gICAgbGV0IGIgPSBOdW1iZXIoYSk7XG4gICAgaWYgKCFpc05hTihiKSkge1xuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgYSwgYSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBiLCBiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW52YWxpZCBudW1iZXJcIik7XG4gICAgfVxuICAgIC8vLS0tLS0gVHlwZSBOYXJyb3dpbmcgaW4gVHlwZVNjcmlwdCAtLS0tLS8vXG4gICAgLy8gVHlwZSBHdWFyZCB0byBOYXJyb3dpbmdcbiAgICBmdW5jdGlvbiBjYWxsTWUoeSkge1xuICAgICAgICBpZiAodHlwZW9mIHkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RyaW5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB5ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm51bWJlclwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjYWxsTWUoMTIzKVxuICAgIC8vIFRydXRoaW5lc3MgTmFycm93aW5nXG4gICAgZnVuY3Rpb24gdHJ1dGhpbmVzcyh4KSB7XG4gICAgICAgIGlmICh4KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgeCk7IC8vIFwic3RyaW5nXCJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidW5kZWZpbmVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHRydXRoaW5lc3ModW5kZWZpbmVkKVxuICAgIC8vIEVxdWFsaXR5IE5hcnJvd2luZ1xuICAgIGZ1bmN0aW9uIGVxdWFsaXR5KHgsIHkpIHtcbiAgICAgICAgaWYgKHggPT09IHkpIHtcbiAgICAgICAgICAgIC8vIG5hcnJvd2VkIHRvIG51bWJlclxuICAgICAgICAgICAgY29uc29sZS5sb2codHlwZW9mIHgsIFwieCBhbmQgeSBzYW1lXCIpOyAvLyBudW1iZXJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgbm90IG5hcnJvd2VkXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgeCk7IC8vIG51bWJlciBvciBzdHJpbmdcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVBcmVhKHNoYXBlKSB7XG4gICAgICAgIGlmIChzaGFwZS5zaGFwZSA9PT0gXCJyZWN0YW5nbGVcIikge1xuICAgICAgICAgICAgLy8geW91IGNhbiBvbmx5IGFjY2VzcyB0aGUgcHJvcGVydGllcyBvZiByZWFjdGFuZ2xlIGFuZCBub3QgY2lyY2xlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFyZWEgb2YgcmVhY3RhbmdsZTogXCIgKyBzaGFwZS5oZWlnaHQgKiBzaGFwZS53aWR0aCk7XG4gICAgICAgICAgICAvLyB0eXBlc2NyaXB0IHdvdWxkIHRocm93IGFuIGVycm9yIGlmIHlvdSB0cmllZCB0byBhY2Nlc3MgcmFkaXVzXG4gICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHNoYXBlLnJhZGl1cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoYXBlLnNoYXBlID09PSBcImNpcmNsZVwiKSB7XG4gICAgICAgICAgICAvLyB5b3UgY2FuIG9ubHkgYWNjZXNzIHRoZSBwcm9wZXJ0aWVzIG9mIGNpcmNsZSBhbmQgbm90IHJlYWN0YW5nbGVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXJlYSBvZiBjaXJjbGU6IFwiICsgMy4xNCAqIHNoYXBlLnJhZGl1cyAqIHNoYXBlLnJhZGl1cyk7XG4gICAgICAgICAgICAvLyB0dXBlc2NyaXB0IHdvdWxkIHRocm93IGFuIGVycm9yIGlmIHlvdSB0cmllZCB0byBhY2Nlc3Mgd2lkdGhcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coc2hhcGUud2lkdGgpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy50ZXN0MyA9IHRlc3QzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudHVwbGUgPSB2b2lkIDA7XG4vLz8gQSB0dXBsZSB0eXBlIGlzIGFuIGFycmF5IHdpdGggYSBwcmVkZWZpbmVkIGxlbmd0aCBhbmQgcHJlZGVmaW5lZCB0eXBlcyBpbiBlYWNoIGluZGV4IHBvc2l0aW9uIGluIHRoZSBhcnJheS4gVGhlIHR5cGVzIGluc2lkZSB0aGlzIGFycmF5IGRvIG5vdCBoYXZlIHRvIGJlIHRoZSBzYW1lLCBjb3VsZCBiZSBhIG1peHR1cmUgb2YgZGlmZmVyZW50IHR5cGVzLlxuZnVuY3Rpb24gdHVwbGUoKSB7XG4gICAgLy93aXRob3V0IHR1cGxlXG4gICAgbGV0IGFyciA9IFtcImhhcnNoXCIsIDIxLCB0cnVlXTtcbiAgICAvLyBhbnkgb2YgdGhlIGFib3ZlIGFycmF5IHZhbHVlcyBjYW4gYmUgaW4gYW55IHBvc2l0aW9uXG4gICAgLy8gaS5lLiBhcnJbMF0gY2FuIGJlIG51bWJlclxuICAgIGFyclswXSA9IDQ1O1xuICAgIGFyclsxXSA9IFwiYXNoaXNoXCI7XG4gICAgYXJyID0gWzIxLCBmYWxzZSwgMjFdO1xuICAgIC8vICAgY29uc29sZS5sb2coYXJyKTtcbiAgICAvL3dpdGggdHVwbGVcbiAgICBsZXQgYXJyMiA9IFtcImhhcnNoXCIsIDIxLCBmYWxzZV07XG4gICAgLy8gYW55IG9mIHRoZSBhYm92ZSBhcnJheSB2YWx1ZXMgY2FuIG5vdCBiZSBpbiBkaWZmZXJlbnQgcG9zaXRpb25cbiAgICAvLyBpLmUuIGFycjJbMF0gbXVzdCBiZSBzdHJpbmdcbiAgICBhcnIyWzBdID0gXCJ2YXRzYWxcIjtcbiAgICBhcnIyWzFdID0gNDU7XG4gICAgLy8gICBjb25zb2xlLmxvZyhhcnIyKTtcbiAgICAvLyB3aXRoIHR1cGxlIENhc2UtMlxuICAgIGZ1bmN0aW9uIGFwaUNhbGwxKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhcGlDYWxsMigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXBpQ2FsbDMoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtYWluKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgLy8gZGVzdHJ1Y3R1cmUgdGhlIGFib3ZlIFByb21pc2UuYWxsKCkgYXMgZm9sbG93cywgd2l0aCBlYWNoIHZhcmlhYmxlIGdldHRpbmcgYXNzaWduZWQgdGhlIGNvcnJlY3QgdHlwZXMuXG4gICAgICAgICAgICBjb25zdCBbc3RyaW5nLCBudW1iZXIsIGJvb2xlYW5dID0geWllbGQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIGFwaUNhbGwxKCksXG4gICAgICAgICAgICAgICAgYXBpQ2FsbDIoKSxcbiAgICAgICAgICAgICAgICBhcGlDYWxsMygpLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMudHVwbGUgPSB0dXBsZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGludm9pY2VfMSA9IHJlcXVpcmUoXCIuL2NsYXNzZXMvaW52b2ljZVwiKTtcbmNvbnN0IHBheW1lbnRzXzEgPSByZXF1aXJlKFwiLi9jbGFzc2VzL3BheW1lbnRzXCIpO1xuLy8gT2JqZWN0XG4vLyBjb25zdCBpbnZPbmUgPSBuZXcgSW52b2ljZShcIm1hcmlvXCIsIFwid29yayBvbiBtYXJpbyB3ZWJzaXRlXCIsIDI1MCk7XG4vLyBjb25zdCBpbnZUd28gPSBuZXcgSW52b2ljZShcImpvaG5cIiwgXCJ3b3JrIG9uIGpvaG4gcG9vbFwiLCAxNTApO1xuLy8gY29uc29sZS5sb2coaW52T25lLCBpbnZUd28pO1xuLy8gdXNlIG9mIGNsYXNzIHdpdGggYXJyYXlzXG4vLyBvbmx5IGFycmF5cyBjcmVhdGVkIHVzaW5nIEludm9pY2UgY2xhc3Mgd2lsbCBiZSBhbGxvd2VkIGluIGludm9pY2VzIGFycmF5XG4vLyBsZXQgaW52b2ljZXM6IEludm9pY2VbXSA9IFtdO1xuLy8gaW52b2ljZXMucHVzaChpbnZPbmUpO1xuLy8gaW52b2ljZXMucHVzaChpbnZUd28pO1xuLy8gY29uc29sZS5sb2coaW52b2ljZXMpO1xuLy8gd2UgY2FuIGNoYW5nZSBvYmplY3QgdmFsdWVzIHRvIHN0b3AgdGhhdCB1c2UgQWNjZXNzIG1vZGlmaWVyIHByaXZhdGUgaW4gY2xhc3Ncbi8vIGludk9uZS5jbGllbnQgPSBcImhhcnNoXCI7XG4vLyBpbnZUd28uYW1vdW50ID0gNTAwO1xuLy8gZ2V0IGVsZW1udHMgZnJvbSBodG1sXG5jb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RNZW51XCIpO1xuY29uc3QgdG9Gcm9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dFRvRnJvbVwiKTtcbmNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0RGV0YWlsc1wiKTtcbmNvbnN0IGFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRBbW91bnRcIik7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWl0ZW1cIik7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICBjb25zb2xlLmxvZyh0eXBlLnZhbHVlLCB0b0Zyb20udmFsdWUsIGRldGFpbHMudmFsdWUsIGFtb3VudC52YWx1ZUFzTnVtYmVyKTtcbiAgICBpZiAodHlwZS52YWx1ZSA9PT0gXCJcIiB8fFxuICAgICAgICB0b0Zyb20udmFsdWUgPT09IFwiXCIgfHxcbiAgICAgICAgZGV0YWlscy52YWx1ZSA9PT0gXCJcIiB8fFxuICAgICAgICBhbW91bnQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZmlsbCBhbGwgdGhlIGZpZWxkc1wiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBkb2M7XG4gICAgICAgIGlmICh0eXBlLnZhbHVlID09PSBcImludm9pY2VcIikge1xuICAgICAgICAgICAgZG9jID0gbmV3IGludm9pY2VfMS5JbnZvaWNlKHRvRnJvbS52YWx1ZSwgZGV0YWlscy52YWx1ZSwgYW1vdW50LnZhbHVlQXNOdW1iZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9jID0gbmV3IHBheW1lbnRzXzEuUGF5bWVudHModG9Gcm9tLnZhbHVlLCBkZXRhaWxzLnZhbHVlLCBhbW91bnQudmFsdWVBc051bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZG9jKTtcbiAgICB9XG59KTtcbi8vIGxldCBkb2NPbmU6IEhhc0Zvcm1hdHRlcjtcbi8vIGxldCBkb2NUd286IEhhc0Zvcm1hdHRlcjtcbi8vIGRvY09uZSA9IG5ldyBJbnZvaWNlKFwiSGFyc2hcIiwgXCJXZWIgUHJvZ3JhbW1pbmdcIiwgMzAwKTtcbi8vIGRvY1R3byA9IG5ldyBQYXltZW50cyhcIk1hcmlvXCIsIFwiUGx1bWJpbmdcIiwgMTUwKTtcbi8vIGxldCBkb2NzOiBIYXNGb3JtYXR0ZXJbXSA9IFtdO1xuLy8gZG9jcy5wdXNoKGRvY09uZSk7XG4vLyBkb2NzLnB1c2goZG9jVHdvKTtcbi8vIGNvbnNvbGUubG9nKGRvY3MpO1xuY29uc3QgZ2VuZXJpY18xID0gcmVxdWlyZShcIi4vZ2VuZXJpY3MvZ2VuZXJpY1wiKTtcbigwLCBnZW5lcmljXzEuZ2VuZXJpYykoKTtcbmNvbnN0IGVudW1fMSA9IHJlcXVpcmUoXCIuL2VudW1zL2VudW1cIik7XG4oMCwgZW51bV8xLmVudW1UZXN0KSgpO1xuY29uc3QgdHVwbGVzXzEgPSByZXF1aXJlKFwiLi90dXBsZXMvdHVwbGVzXCIpO1xuKDAsIHR1cGxlc18xLnR1cGxlKSgpO1xuY29uc3QgdGVzdF8xID0gcmVxdWlyZShcIi4vdGVzdC90ZXN0XCIpO1xuKDAsIHRlc3RfMS50ZXN0KSgpO1xuLy8gcmVzdWx0TmFycm93KCk7XG5jb25zdCBhYnN0cmFjdF8xID0gcmVxdWlyZShcIi4vYWJzdHJhY3QvYWJzdHJhY3RcIik7XG4oMCwgYWJzdHJhY3RfMS5hYnN0cmFjdCkoKTtcbmNvbnN0IHRlc3QyXzEgPSByZXF1aXJlKFwiLi90ZXN0Mi90ZXN0MlwiKTtcbigwLCB0ZXN0Ml8xLnRlc3QyKSgpO1xuY29uc3QgdGVzdDNfMSA9IHJlcXVpcmUoXCIuL3Rlc3QzL3Rlc3QzXCIpO1xuKDAsIHRlc3QzXzEudGVzdDMpKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=