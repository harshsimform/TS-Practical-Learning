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

/***/ "./src/tuples/tuples.ts":
/*!******************************!*\
  !*** ./src/tuples/tuples.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tuple = void 0;
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
}
exports.tuple = tuple;


/***/ }),

/***/ "./src/typeNarrowing/typenarrowing.ts":
/*!********************************************!*\
  !*** ./src/typeNarrowing/typenarrowing.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resultNarrow = void 0;
function resultNarrow() {
    const objStud = [
        { skills: [1, 2.3] },
        { skills: [4, 5, 6], city: "SURAT" },
    ];
    function printCity(city) {
        // console.log(city);
    }
    function narrow() {
        for (const data of objStud) {
            //   printCity(data.city);
            // type narrowing
            if (data.city) {
                printCity(data.city);
            }
        }
    }
    narrow();
    //   console.log(objStud);
    //   good way to find undefined value
    function isDefined(arg) {
        return typeof arg !== "undefined";
    }
    const list = ["a", "b", undefined, "c"];
    const filtered = list.filter(isDefined);
    console.log(filtered);
}
exports.resultNarrow = resultNarrow;


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
// result();
const typenarrowing_1 = __webpack_require__(/*! ./typeNarrowing/typenarrowing */ "./src/typeNarrowing/typenarrowing.ts");
(0, typenarrowing_1.resultNarrow)();
const abstract_1 = __webpack_require__(/*! ./abstract/abstract */ "./src/abstract/abstract.ts");
(0, abstract_1.abstract)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxxREFBb0I7QUFDOUM7QUFDQSxlQUFlLG1CQUFPLENBQUMseUNBQWM7QUFDckM7QUFDQSxpQkFBaUIsbUJBQU8sQ0FBQywrQ0FBaUI7QUFDMUM7QUFDQSxlQUFlLG1CQUFPLENBQUMsdUNBQWE7QUFDcEM7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLDJFQUErQjtBQUMvRDtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHVEQUFxQjtBQUNoRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLXByYWN0aWNhbC1sZWFybmluZy8uL3NyYy9hYnN0cmFjdC9hYnN0cmFjdC50cyIsIndlYnBhY2s6Ly90cy1wcmFjdGljYWwtbGVhcm5pbmcvLi9zcmMvY2xhc3Nlcy9pbnZvaWNlLnRzIiwid2VicGFjazovL3RzLXByYWN0aWNhbC1sZWFybmluZy8uL3NyYy9jbGFzc2VzL3BheW1lbnRzLnRzIiwid2VicGFjazovL3RzLXByYWN0aWNhbC1sZWFybmluZy8uL3NyYy9lbnVtcy9lbnVtLnRzIiwid2VicGFjazovL3RzLXByYWN0aWNhbC1sZWFybmluZy8uL3NyYy9nZW5lcmljcy9nZW5lcmljLnRzIiwid2VicGFjazovL3RzLXByYWN0aWNhbC1sZWFybmluZy8uL3NyYy90ZXN0L3Rlc3QudHMiLCJ3ZWJwYWNrOi8vdHMtcHJhY3RpY2FsLWxlYXJuaW5nLy4vc3JjL3R1cGxlcy90dXBsZXMudHMiLCJ3ZWJwYWNrOi8vdHMtcHJhY3RpY2FsLWxlYXJuaW5nLy4vc3JjL3R5cGVOYXJyb3dpbmcvdHlwZW5hcnJvd2luZy50cyIsIndlYnBhY2s6Ly90cy1wcmFjdGljYWwtbGVhcm5pbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMtcHJhY3RpY2FsLWxlYXJuaW5nLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5hYnN0cmFjdCA9IHZvaWQgMDtcbi8vIFlvdSBjYW4ndCBjcmVhdGUgYW4gb2JqZWN0L2luc3RhbmNlIG9mIGFic3RyYWN0IGNsYXNzXG5mdW5jdGlvbiBhYnN0cmFjdCgpIHtcbiAgICBjbGFzcyBTdHVkZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IobmFtZSwgYWdlKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5hZ2UgPSBhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaSBjYW4gdXNlIHRoaXMgZ2V0SGVsbG8oKSBkaXJlY3RseSBmb3IgYW4gb2JqXG4gICAgICAgIGdldEhlbGxvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiSGVsbG8gdXNlclwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsYXNzIHN0dWQgZXh0ZW5kcyBTdHVkZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IobmFtZSwgYWdlLCByb2xlKSB7XG4gICAgICAgICAgICBzdXBlcihuYW1lLCBhZ2UpO1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHRoaXMuYWdlID0gYWdlO1xuICAgICAgICAgICAgdGhpcy5yb2xlID0gcm9sZTtcbiAgICAgICAgfVxuICAgICAgICBnZXREZXRhaWxzKCkge1xuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0gYW5kICR7dGhpcy5hZ2V9IGFuZCAke3RoaXMucm9sZX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG9iaiA9IG5ldyBzdHVkKFwiaGFyc2hcIiwgMjEsIFwiVHJhaW5lZVwiKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKG9iai5nZXREZXRhaWxzKCkpO1xuICAgIG9iai5nZXRIZWxsbygpO1xuICAgIC8vICAgY29uc29sZS5sb2cob2JqLmdldEhlbGxvKCkpO1xufVxuZXhwb3J0cy5hYnN0cmFjdCA9IGFic3RyYWN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBUUyBDbGFzc1xuLy8gY2xhc3MgSW52b2ljZSB7XG4vLyAgIHJlYWRvbmx5IGNsaWVudDogc3RyaW5nO1xuLy8gICBwcml2YXRlIGRldGFpbHM6IHN0cmluZztcbi8vICAgcHJpdmF0ZSBhbW91bnQ6IG51bWJlcjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSW52b2ljZSA9IHZvaWQgMDtcbmNsYXNzIEludm9pY2Uge1xuICAgIGNvbnN0cnVjdG9yKGNsaWVudCwgZGV0YWlscywgYW1vdW50KSB7XG4gICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgICAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudDtcbiAgICB9XG4gICAgZm9ybWF0KCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jbGllbnR9IG93ZXMgJCR7dGhpcy5kZXRhaWxzfSBmb3IgJHt0aGlzLmFtb3VudH1gO1xuICAgIH1cbn1cbmV4cG9ydHMuSW52b2ljZSA9IEludm9pY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGF5bWVudHMgPSB2b2lkIDA7XG5jbGFzcyBQYXltZW50cyB7XG4gICAgY29uc3RydWN0b3IocmVjaXBpZW50LCBkZXRhaWxzLCBhbW91bnQpIHtcbiAgICAgICAgdGhpcy5yZWNpcGllbnQgPSByZWNpcGllbnQ7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gICAgICAgIHRoaXMuYW1vdW50ID0gYW1vdW50O1xuICAgIH1cbiAgICBmb3JtYXQoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnJlY2lwaWVudH0gaXMgb3dlZCAkJHt0aGlzLmRldGFpbHN9IGZvciAke3RoaXMuYW1vdW50fWA7XG4gICAgfVxufVxuZXhwb3J0cy5QYXltZW50cyA9IFBheW1lbnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmVudW1UZXN0ID0gdm9pZCAwO1xuZnVuY3Rpb24gZW51bVRlc3QoKSB7XG4gICAgLy8gICBjb25zdCBkb2NPbmU6IFJlc291cmNlPG9iamVjdD4gPSB7XG4gICAgLy8gICAgIHVpZDogMSxcbiAgICAvLyAgICAgcmVzb3VyY2VUeXBlOiAyLFxuICAgIC8vICAgICBkYXRhOiB7IHRpdGxlOiBcIm5hbWUgb2YgdGhlIHdpbmRcIiB9LFxuICAgIC8vICAgfTtcbiAgICAvLyAgIGNvbnN0IGRvY1R3bzogUmVzb3VyY2U8b2JqZWN0PiA9IHtcbiAgICAvLyAgICAgdWlkOiAyLFxuICAgIC8vICAgICByZXNvdXJjZVR5cGU6IDQsXG4gICAgLy8gICAgIGRhdGE6IHsgbmFtZTogXCJKb2huXCIgfSxcbiAgICAvLyAgIH07XG4gICAgLy8gICBjb25zb2xlLmxvZyhkb2NPbmUsIGRvY1R3byk7XG4gICAgLy8gd2l0aCBlbnVtXG4gICAgbGV0IFJlc291cmNlVHlwZTtcbiAgICAoZnVuY3Rpb24gKFJlc291cmNlVHlwZSkge1xuICAgICAgICBSZXNvdXJjZVR5cGVbUmVzb3VyY2VUeXBlW1wiQk9PS1wiXSA9IDBdID0gXCJCT09LXCI7XG4gICAgICAgIFJlc291cmNlVHlwZVtSZXNvdXJjZVR5cGVbXCJBVVRIT1JcIl0gPSAxXSA9IFwiQVVUSE9SXCI7XG4gICAgICAgIFJlc291cmNlVHlwZVtSZXNvdXJjZVR5cGVbXCJGSUxNXCJdID0gMl0gPSBcIkZJTE1cIjtcbiAgICAgICAgUmVzb3VyY2VUeXBlW1Jlc291cmNlVHlwZVtcIkRJUkVDVE9SXCJdID0gM10gPSBcIkRJUkVDVE9SXCI7XG4gICAgICAgIFJlc291cmNlVHlwZVtSZXNvdXJjZVR5cGVbXCJQRVJTT05cIl0gPSA0XSA9IFwiUEVSU09OXCI7XG4gICAgfSkoUmVzb3VyY2VUeXBlIHx8IChSZXNvdXJjZVR5cGUgPSB7fSkpO1xuICAgIGNvbnN0IGRvY09uZSA9IHtcbiAgICAgICAgdWlkOiAxLFxuICAgICAgICByZXNvdXJjZVR5cGU6IFJlc291cmNlVHlwZS5GSUxNLFxuICAgICAgICBkYXRhOiB7IHRpdGxlOiBcIm5hbWUgb2YgdGhlIHdpbmRcIiB9LFxuICAgIH07XG4gICAgY29uc3QgZG9jVHdvID0ge1xuICAgICAgICB1aWQ6IDIsXG4gICAgICAgIHJlc291cmNlVHlwZTogUmVzb3VyY2VUeXBlLlBFUlNPTixcbiAgICAgICAgZGF0YTogeyBuYW1lOiBcIkpvaG5cIiB9LFxuICAgIH07XG4gICAgLy8gICBjb25zb2xlLmxvZyhkb2NPbmUsIGRvY1R3byk7XG59XG5leHBvcnRzLmVudW1UZXN0ID0gZW51bVRlc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2VuZXJpYyA9IHZvaWQgMDtcbmZ1bmN0aW9uIGdlbmVyaWMoKSB7XG4gICAgLy8gQ2FzZS0xXG4gICAgY29uc3QgYWRkVUlEID0gKG9iaikgPT4ge1xuICAgICAgICBsZXQgdWlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb2JqKSwgeyB1aWQgfSk7XG4gICAgfTtcbiAgICAvLyBsZXQgZG9jMSA9IGFkZFVJRCh7IG5hbWU6IFwiYXNoaXNoXCIsIGFnZTogMjEgfSk7XG4gICAgLy8gY29uc29sZS5sb2coZG9jMSk7XG4gICAgLy8gcHJvcGVydHkgbmFtZSBkb2Vzbid0IGV4aXN0XG4gICAgLy8gY29uc29sZS5sb2coZG9jMS5uYW1lKTtcbiAgICAvLyBDYXNlLTIgZG8gdGhpcyB0byBzb2x2ZSBhYm92ZSBsaW5lLTEyIGVycm9yXG4gICAgLy8gVCB3aWxsIGNhcHR1cmUgYWxsIHRoZSBpbmZvcm1hdGlvbiB3ZSBwYXNzIGluIGZ1bmN0aW9ucyBzbyB3aGVuIHdlIHJldHVybiwgaXQgd2lsbCBrbm93IHdoYXQgcHJvcGVydGllcyBhcmUgb24gb2JqZWN0XG4gICAgY29uc3QgYWRkVUlEMiA9IChvYmopID0+IHtcbiAgICAgICAgbGV0IHVpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9iaiksIHsgdWlkIH0pO1xuICAgIH07XG4gICAgbGV0IGRvYzEgPSBhZGRVSUQyKHsgbmFtZTogXCJoYXJzaFwiLCBhZ2U6IDIxIH0pO1xuICAgIGNvbnN0IGRvY1RocmVlID0ge1xuICAgICAgICB1aWQ6IDEsXG4gICAgICAgIHJlc291cmNlTmFtZTogXCJwZXJzb25cIixcbiAgICAgICAgZGF0YTogXCJoYXJzaFwiLFxuICAgIH07XG4gICAgY29uc3QgZG9jRm91ciA9IHtcbiAgICAgICAgdWlkOiAyLFxuICAgICAgICByZXNvdXJjZU5hbWU6IFwic2hvcGluZ0xpc3RcIixcbiAgICAgICAgZGF0YTogW1wiYnJlYWRcIiwgXCJtaWxrXCJdLFxuICAgIH07XG59XG5leHBvcnRzLmdlbmVyaWMgPSBnZW5lcmljO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnRlc3QgPSB2b2lkIDA7XG5mdW5jdGlvbiB0ZXN0KCkge1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgbmFtZTogXCJoYXJzaFwiLFxuICAgICAgICBhZ2U6IDIxLFxuICAgICAgICBjaXR5OiBcIkFITVwiLFxuICAgICAgICBjb3VudHJ5OiBcIklORFwiLFxuICAgICAgICBnZW5kZXI6IFwiTWFsZVwiLFxuICAgICAgICBza2lsbDogW1wiSlNcIiwgXCJDU1NcIiwgMTJdLFxuICAgIH07XG4gICAgLy8gICBjb25zb2xlLmxvZyhgJHtvYmoubmFtZX0gYW5kICR7b2JqLmFnZX1gKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKG9iaik7XG4gICAgLy8/LS0tLS0tLS0tLS0tIGNsYXNzXG4gICAgLy8gICBjbGFzcyBwZXJzb24ge1xuICAgIC8vICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYWdlPzogbnVtYmVyKSB7fVxuICAgIC8vICAgfVxuICAgIC8vICAgY29uc3Qgb2JqID0gbmV3IHBlcnNvbihcImhhcnNoXCIsIDIxKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKG9iaik7XG4gICAgLy8/LS0tLS0tLS0tLS0tLSB0eXBlXG4gICAgLy8gICB0eXBlIHBlcnNvbiA9IHtcbiAgICAvLyAgICAgbmFtZTogc3RyaW5nO1xuICAgIC8vICAgICBhZ2U/OiBudW1iZXI7XG4gICAgLy8gICB9O1xuICAgIC8vICAgY29uc3Qgb2JqOiBwZXJzb24gPSB7XG4gICAgLy8gICAgIG5hbWU6IFwiaGFyc2hcIixcbiAgICAvLyAgIH07XG4gICAgLy8gICBjb25zb2xlLmxvZyhvYmopO1xuICAgIC8vPy0tLS0tLS0tLS0tLS0tIEFycm93IGZ1bmN0aW9uXG4gICAgY29uc3QgYXJyID0gKG5hbWUsIGNpdHksIGNvdW50cnksIGdlbmRlciwgc2tpbGwsIGFnZSkgPT4gKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgY2l0eSxcbiAgICAgICAgY291bnRyeSxcbiAgICAgICAgZ2VuZGVyLFxuICAgICAgICBza2lsbCxcbiAgICAgICAgYWdlLFxuICAgIH0pO1xuICAgIC8vICAgY29uc29sZS5sb2coYXJyKFwiaGFyc2hcIiwgXCJESEFSSVwiLCBcIklORFwiLCBcIk1hbGVcIiwgW1wiSlNcIl0sIDI1KSk7XG4gICAgLy8gdHlwZSB3aXRoIGFycm93IGZ1bmN0aW9uXG4gICAgLy8gICB0eXBlIHVzZXIgPSB7XG4gICAgLy8gICAgIG5hbWU6IHN0cmluZztcbiAgICAvLyAgICAgYWdlOiBudW1iZXI7XG4gICAgLy8gICB9O1xuICAgIC8vICAgY29uc3QgZ3JlZXRQZXJzb24gPSAocGVyc29uMzogdXNlcik6IHN0cmluZyA9PiB7XG4gICAgLy8gICAgIHJldHVybiBgXCJIZWxsb1wiLCAke3BlcnNvbjMubmFtZX0sICR7cGVyc29uMy5hZ2V9YDtcbiAgICAvLyAgIH07XG4gICAgLy8gICBjb25zdCBicm86IHVzZXIgPSB7IG5hbWU6IFwiaGFyc2hcIiwgYWdlOiAyMSB9O1xuICAgIC8vICAgY29uc29sZS5sb2coZ3JlZXRQZXJzb24oYnJvKSk7XG4gICAgLy8/LS0tLS0tLS0tLS0tLS0tLS0gbm9ybWFsIGNsYXNzXG4gICAgY2xhc3MgY2FyIHtcbiAgICAgICAgY29uc3RydWN0b3IobmFtZSwgYWdlKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5hZ2UgPSBhZ2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8/IGV4dGVuZFxuICAgIC8vICAgY2xhc3MgY2FyMiBleHRlbmRzIGNhciB7fVxuICAgIC8vICAgY29uc3Qgb2JqMSA9IG5ldyBjYXIyKFwiSGFyc2hcIiwgMjUpO1xuICAgIC8vPyBpbXBsZW1lbnRzXG4gICAgLy8gICBjbGFzcyBjYXIyIGltcGxlbWVudHMgY2FyIHtcbiAgICAvLyAgICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGFnZTogbnVtYmVyKSB7fVxuICAgIC8vICAgfVxuICAgIC8vICAgY29uc3Qgb2JqMSA9IG5ldyBjYXIyKFwiSGFyc2hcIiwgNTQpO1xuICAgIC8vPy0tLS0tLS0tLS0gcHJvYmxlbSBjb252ZXJ0aW5nIHN0cmluZyBpbnRvIG51bWJlclxuICAgIGxldCB4O1xuICAgIHggPSBcIjQyYVwiO1xuICAgIC8vICAgY29uc29sZS5sb2codHlwZW9mIHgsIHgpO1xuICAgIGxldCB5ID0gTnVtYmVyKHgpO1xuICAgIC8vICAgY29uc29sZS5sb2codHlwZW9mIHksIHkpO1xuICAgIC8vPy0tLS0tLS0tLS0gc29sdXRpb24gdG8gYWJvdmUgcHJvYmxlbVxuICAgIC8vICAgbGV0IGE6IHN0cmluZyA9IFwiNDJcIjtcbiAgICAvLyAgIGxldCBiID0gTnVtYmVyKGEpO1xuICAgIC8vICAgaWYgKCFpc05hTihiKSkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyh0eXBlb2YgYiwgYiArIDEpO1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJpbnZhbGlkIG51bWJlclwiKTtcbiAgICAvLyAgIH1cbiAgICAvLz8tLS0tLS0tLS0tIHdyaXRlIGJldHRlciBmdW5jdGlvbnMgaW4gVFNcbiAgICAvLyBDYXNlLTEgc3BlY2lmeSB3aGF0IGtpbmQgb2YgdmFsdWUgd2FudCB0byByZXR1cm4gZnJvbSBmdW5jdGlvblxuICAgIGZ1bmN0aW9uIGEobnVtKSB7XG4gICAgICAgIC8vIHJldHVybiAobnVtICs9IDEwKTtcbiAgICAgICAgcmV0dXJuIFwiaGVsbG9cIjtcbiAgICB9XG4gICAgLy8gQ2FzZS0yIHVzZSB8IHN5bWJvbCB0byBzcGVjaWZ5IG11bHRpcGxlIHJldHVybiB0eXBlIGZvcm1hdFxuICAgIGZ1bmN0aW9uIGIobXlWYWwpIHtcbiAgICAgICAgaWYgKG15VmFsID4gNSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQ2FzZS0zIEFycm93IGZ1bmN0aW9uXG4gICAgY29uc3QgYyA9IChzdHIpID0+IHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfTtcbiAgICAvLyBDYXNlLTQgd2l0aCBBcnJheS5tYXAsIHNwZWNpZnkgd2hpY2ggdHlwZSBvZiB2YWx1ZSB5b3Ugd2FudCBybyByZXR1cm4gZnJvbSBtYXAgZnVuY3Rpb25cbiAgICBjb25zdCBhcnJWYWwgPSBbXCJqb2huXCIsIFwibWFya1wiLCBcInZhdHNhbFwiXTtcbiAgICAvLyBjb25zdCBhcnJWYWwgPSBbMSwgMiwgMywgNF07XG4gICAgYXJyVmFsLm1hcCgodmFsKSA9PiB7XG4gICAgICAgIHJldHVybiBgdmFsdWVzOiAke3ZhbH1gO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCk7XG4gICAgY29uc3Qgb2JqU3R1ZCA9IHtcbiAgICAgICAgc2tpbGxzOiBbXCJoYXJzaFwiLCAxMl0sXG4gICAgfTtcbiAgICAvLyBjb25zb2xlLmxvZyhvYmpTdHVkKTtcbiAgICAvLz8gQ2FzZS0yXG4gICAgZnVuY3Rpb24gdXNlcjIoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIC8vIHJldHVybiAoc3RyID0gdHJ1ZSk7XG4gICAgfVxuICAgIHVzZXIyKDMpO1xuICAgIC8vIHVzZXIyKHRydWUpO1xuICAgIC8vIHVzZXIyKHRydWUpO1xuICAgIC8vPyBDYXNlLTNcbiAgICBmdW5jdGlvbiB1c2VyMyhzdHIpIHtcbiAgICAgICAgcmV0dXJuIChzdHIgPSB0cnVlKTtcbiAgICB9XG4gICAgY29uc3Qgb2JqU3R1ZDEgPSB7XG4gICAgICAgIHNraWxsczE6IFtcImhhcnNoXCIsIDEsIDIsIDNdLFxuICAgICAgICBjaXR5OiBcIkFITVwiLFxuICAgIH07XG4gICAgLy8gY29uc29sZS5sb2cob2JqU3R1ZDEpO1xuICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiBvYmpTdHVkMS5za2lsbHMxKTtcbiAgICAvLz8gQ2FzZS0yXG4gICAgLy8gaW50ZXJmYWNlIFN0dWRlbnQxPFQ+IHtcbiAgICAvLyAgIHNraWxsczE6IFQ7XG4gICAgLy8gfVxuICAgIC8vIGNvbnN0IG9ialN0dWQxOiBTdHVkZW50MTxzdHJpbmdbXSB8IG51bWJlcltdPiA9IHtcbiAgICAvLyAgIHNraWxsczE6IFtcImhhcnNoXCIsIFwidmF0c2FsXCJdLFxuICAgIC8vIH07XG4gICAgLy8gY29uc29sZS5sb2cob2JqU3R1ZDEpO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tXG4gICAgbGV0IHNjb3JlID0gW107XG4gICAgc2NvcmUgPSBbMSwgMiwgMywgNCwgXCI0M1wiXTtcbiAgICAvLyBjb25zb2xlLmxvZyhzY29yZSk7XG4gICAgLy8/IENhc2UtM1xuICAgIGZ1bmN0aW9uIHVzZXI0KHN0cikge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICB1c2VyNChbMSwgMiwgMywgNCwgXCJoYXJzaFwiXSk7XG59XG5leHBvcnRzLnRlc3QgPSB0ZXN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnR1cGxlID0gdm9pZCAwO1xuZnVuY3Rpb24gdHVwbGUoKSB7XG4gICAgLy93aXRob3V0IHR1cGxlXG4gICAgbGV0IGFyciA9IFtcImhhcnNoXCIsIDIxLCB0cnVlXTtcbiAgICAvLyBhbnkgb2YgdGhlIGFib3ZlIGFycmF5IHZhbHVlcyBjYW4gYmUgaW4gYW55IHBvc2l0aW9uXG4gICAgLy8gaS5lLiBhcnJbMF0gY2FuIGJlIG51bWJlclxuICAgIGFyclswXSA9IDQ1O1xuICAgIGFyclsxXSA9IFwiYXNoaXNoXCI7XG4gICAgYXJyID0gWzIxLCBmYWxzZSwgMjFdO1xuICAgIC8vICAgY29uc29sZS5sb2coYXJyKTtcbiAgICAvL3dpdGggdHVwbGVcbiAgICBsZXQgYXJyMiA9IFtcImhhcnNoXCIsIDIxLCBmYWxzZV07XG4gICAgLy8gYW55IG9mIHRoZSBhYm92ZSBhcnJheSB2YWx1ZXMgY2FuIG5vdCBiZSBpbiBkaWZmZXJlbnQgcG9zaXRpb25cbiAgICAvLyBpLmUuIGFycjJbMF0gbXVzdCBiZSBzdHJpbmdcbiAgICBhcnIyWzBdID0gXCJ2YXRzYWxcIjtcbiAgICBhcnIyWzFdID0gNDU7XG4gICAgLy8gICBjb25zb2xlLmxvZyhhcnIyKTtcbn1cbmV4cG9ydHMudHVwbGUgPSB0dXBsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZXN1bHROYXJyb3cgPSB2b2lkIDA7XG5mdW5jdGlvbiByZXN1bHROYXJyb3coKSB7XG4gICAgY29uc3Qgb2JqU3R1ZCA9IFtcbiAgICAgICAgeyBza2lsbHM6IFsxLCAyLjNdIH0sXG4gICAgICAgIHsgc2tpbGxzOiBbNCwgNSwgNl0sIGNpdHk6IFwiU1VSQVRcIiB9LFxuICAgIF07XG4gICAgZnVuY3Rpb24gcHJpbnRDaXR5KGNpdHkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2l0eSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5hcnJvdygpIHtcbiAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIG9ialN0dWQpIHtcbiAgICAgICAgICAgIC8vICAgcHJpbnRDaXR5KGRhdGEuY2l0eSk7XG4gICAgICAgICAgICAvLyB0eXBlIG5hcnJvd2luZ1xuICAgICAgICAgICAgaWYgKGRhdGEuY2l0eSkge1xuICAgICAgICAgICAgICAgIHByaW50Q2l0eShkYXRhLmNpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG5hcnJvdygpO1xuICAgIC8vICAgY29uc29sZS5sb2cob2JqU3R1ZCk7XG4gICAgLy8gICBnb29kIHdheSB0byBmaW5kIHVuZGVmaW5lZCB2YWx1ZVxuICAgIGZ1bmN0aW9uIGlzRGVmaW5lZChhcmcpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhcmcgIT09IFwidW5kZWZpbmVkXCI7XG4gICAgfVxuICAgIGNvbnN0IGxpc3QgPSBbXCJhXCIsIFwiYlwiLCB1bmRlZmluZWQsIFwiY1wiXTtcbiAgICBjb25zdCBmaWx0ZXJlZCA9IGxpc3QuZmlsdGVyKGlzRGVmaW5lZCk7XG4gICAgY29uc29sZS5sb2coZmlsdGVyZWQpO1xufVxuZXhwb3J0cy5yZXN1bHROYXJyb3cgPSByZXN1bHROYXJyb3c7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBpbnZvaWNlXzEgPSByZXF1aXJlKFwiLi9jbGFzc2VzL2ludm9pY2VcIik7XG5jb25zdCBwYXltZW50c18xID0gcmVxdWlyZShcIi4vY2xhc3Nlcy9wYXltZW50c1wiKTtcbi8vIE9iamVjdFxuLy8gY29uc3QgaW52T25lID0gbmV3IEludm9pY2UoXCJtYXJpb1wiLCBcIndvcmsgb24gbWFyaW8gd2Vic2l0ZVwiLCAyNTApO1xuLy8gY29uc3QgaW52VHdvID0gbmV3IEludm9pY2UoXCJqb2huXCIsIFwid29yayBvbiBqb2huIHBvb2xcIiwgMTUwKTtcbi8vIGNvbnNvbGUubG9nKGludk9uZSwgaW52VHdvKTtcbi8vIHVzZSBvZiBjbGFzcyB3aXRoIGFycmF5c1xuLy8gb25seSBhcnJheXMgY3JlYXRlZCB1c2luZyBJbnZvaWNlIGNsYXNzIHdpbGwgYmUgYWxsb3dlZCBpbiBpbnZvaWNlcyBhcnJheVxuLy8gbGV0IGludm9pY2VzOiBJbnZvaWNlW10gPSBbXTtcbi8vIGludm9pY2VzLnB1c2goaW52T25lKTtcbi8vIGludm9pY2VzLnB1c2goaW52VHdvKTtcbi8vIGNvbnNvbGUubG9nKGludm9pY2VzKTtcbi8vIHdlIGNhbiBjaGFuZ2Ugb2JqZWN0IHZhbHVlcyB0byBzdG9wIHRoYXQgdXNlIEFjY2VzcyBtb2RpZmllciBwcml2YXRlIGluIGNsYXNzXG4vLyBpbnZPbmUuY2xpZW50ID0gXCJoYXJzaFwiO1xuLy8gaW52VHdvLmFtb3VudCA9IDUwMDtcbi8vIGdldCBlbGVtbnRzIGZyb20gaHRtbFxuY29uc3QgdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0TWVudVwiKTtcbmNvbnN0IHRvRnJvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRUb0Zyb21cIik7XG5jb25zdCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dERldGFpbHNcIik7XG5jb25zdCBhbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0QW1vdW50XCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1pdGVtXCIpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgY29uc29sZS5sb2codHlwZS52YWx1ZSwgdG9Gcm9tLnZhbHVlLCBkZXRhaWxzLnZhbHVlLCBhbW91bnQudmFsdWVBc051bWJlcik7XG4gICAgaWYgKHR5cGUudmFsdWUgPT09IFwiXCIgfHxcbiAgICAgICAgdG9Gcm9tLnZhbHVlID09PSBcIlwiIHx8XG4gICAgICAgIGRldGFpbHMudmFsdWUgPT09IFwiXCIgfHxcbiAgICAgICAgYW1vdW50LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGZpbGwgYWxsIHRoZSBmaWVsZHNcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgZG9jO1xuICAgICAgICBpZiAodHlwZS52YWx1ZSA9PT0gXCJpbnZvaWNlXCIpIHtcbiAgICAgICAgICAgIGRvYyA9IG5ldyBpbnZvaWNlXzEuSW52b2ljZSh0b0Zyb20udmFsdWUsIGRldGFpbHMudmFsdWUsIGFtb3VudC52YWx1ZUFzTnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRvYyA9IG5ldyBwYXltZW50c18xLlBheW1lbnRzKHRvRnJvbS52YWx1ZSwgZGV0YWlscy52YWx1ZSwgYW1vdW50LnZhbHVlQXNOdW1iZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGRvYyk7XG4gICAgfVxufSk7XG4vLyBsZXQgZG9jT25lOiBIYXNGb3JtYXR0ZXI7XG4vLyBsZXQgZG9jVHdvOiBIYXNGb3JtYXR0ZXI7XG4vLyBkb2NPbmUgPSBuZXcgSW52b2ljZShcIkhhcnNoXCIsIFwiV2ViIFByb2dyYW1taW5nXCIsIDMwMCk7XG4vLyBkb2NUd28gPSBuZXcgUGF5bWVudHMoXCJNYXJpb1wiLCBcIlBsdW1iaW5nXCIsIDE1MCk7XG4vLyBsZXQgZG9jczogSGFzRm9ybWF0dGVyW10gPSBbXTtcbi8vIGRvY3MucHVzaChkb2NPbmUpO1xuLy8gZG9jcy5wdXNoKGRvY1R3byk7XG4vLyBjb25zb2xlLmxvZyhkb2NzKTtcbmNvbnN0IGdlbmVyaWNfMSA9IHJlcXVpcmUoXCIuL2dlbmVyaWNzL2dlbmVyaWNcIik7XG4oMCwgZ2VuZXJpY18xLmdlbmVyaWMpKCk7XG5jb25zdCBlbnVtXzEgPSByZXF1aXJlKFwiLi9lbnVtcy9lbnVtXCIpO1xuKDAsIGVudW1fMS5lbnVtVGVzdCkoKTtcbmNvbnN0IHR1cGxlc18xID0gcmVxdWlyZShcIi4vdHVwbGVzL3R1cGxlc1wiKTtcbigwLCB0dXBsZXNfMS50dXBsZSkoKTtcbmNvbnN0IHRlc3RfMSA9IHJlcXVpcmUoXCIuL3Rlc3QvdGVzdFwiKTtcbigwLCB0ZXN0XzEudGVzdCkoKTtcbi8vIHJlc3VsdCgpO1xuY29uc3QgdHlwZW5hcnJvd2luZ18xID0gcmVxdWlyZShcIi4vdHlwZU5hcnJvd2luZy90eXBlbmFycm93aW5nXCIpO1xuKDAsIHR5cGVuYXJyb3dpbmdfMS5yZXN1bHROYXJyb3cpKCk7XG5jb25zdCBhYnN0cmFjdF8xID0gcmVxdWlyZShcIi4vYWJzdHJhY3QvYWJzdHJhY3RcIik7XG4oMCwgYWJzdHJhY3RfMS5hYnN0cmFjdCkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==