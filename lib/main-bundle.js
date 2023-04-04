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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsZUFBZTs7Ozs7Ozs7Ozs7QUNuQkY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGdCQUFnQjs7Ozs7OztVQ2RoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQixtQkFBTyxDQUFDLG1EQUFtQjtBQUMzQyxpQkFBaUIsbUJBQU8sQ0FBQyxxREFBb0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtcHJhY3RpY2FsLWxlYXJuaW5nLy4vc3JjL2NsYXNzZXMvaW52b2ljZS50cyIsIndlYnBhY2s6Ly90cy1wcmFjdGljYWwtbGVhcm5pbmcvLi9zcmMvY2xhc3Nlcy9wYXltZW50cy50cyIsIndlYnBhY2s6Ly90cy1wcmFjdGljYWwtbGVhcm5pbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMtcHJhY3RpY2FsLWxlYXJuaW5nLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gVFMgQ2xhc3Ncbi8vIGNsYXNzIEludm9pY2Uge1xuLy8gICByZWFkb25seSBjbGllbnQ6IHN0cmluZztcbi8vICAgcHJpdmF0ZSBkZXRhaWxzOiBzdHJpbmc7XG4vLyAgIHByaXZhdGUgYW1vdW50OiBudW1iZXI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkludm9pY2UgPSB2b2lkIDA7XG52YXIgSW52b2ljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbnZvaWNlKGNsaWVudCwgZGV0YWlscywgYW1vdW50KSB7XG4gICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgICAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudDtcbiAgICB9XG4gICAgSW52b2ljZS5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodGhpcy5jbGllbnQsIFwiIG93ZXMgJFwiKS5jb25jYXQodGhpcy5kZXRhaWxzLCBcIiBmb3IgXCIpLmNvbmNhdCh0aGlzLmFtb3VudCk7XG4gICAgfTtcbiAgICByZXR1cm4gSW52b2ljZTtcbn0oKSk7XG5leHBvcnRzLkludm9pY2UgPSBJbnZvaWNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBheW1lbnRzID0gdm9pZCAwO1xudmFyIFBheW1lbnRzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBheW1lbnRzKHJlY2lwaWVudCwgZGV0YWlscywgYW1vdW50KSB7XG4gICAgICAgIHRoaXMucmVjaXBpZW50ID0gcmVjaXBpZW50O1xuICAgICAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudDtcbiAgICB9XG4gICAgUGF5bWVudHMucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHRoaXMucmVjaXBpZW50LCBcIiBpcyBvd2VkICRcIikuY29uY2F0KHRoaXMuZGV0YWlscywgXCIgZm9yIFwiKS5jb25jYXQodGhpcy5hbW91bnQpO1xuICAgIH07XG4gICAgcmV0dXJuIFBheW1lbnRzO1xufSgpKTtcbmV4cG9ydHMuUGF5bWVudHMgPSBQYXltZW50cztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpbnZvaWNlXzEgPSByZXF1aXJlKFwiLi9jbGFzc2VzL2ludm9pY2VcIik7XG52YXIgcGF5bWVudHNfMSA9IHJlcXVpcmUoXCIuL2NsYXNzZXMvcGF5bWVudHNcIik7XG4vLyBPYmplY3Rcbi8vIGNvbnN0IGludk9uZSA9IG5ldyBJbnZvaWNlKFwibWFyaW9cIiwgXCJ3b3JrIG9uIG1hcmlvIHdlYnNpdGVcIiwgMjUwKTtcbi8vIGNvbnN0IGludlR3byA9IG5ldyBJbnZvaWNlKFwiam9oblwiLCBcIndvcmsgb24gam9obiBwb29sXCIsIDE1MCk7XG4vLyBjb25zb2xlLmxvZyhpbnZPbmUsIGludlR3byk7XG4vLyB1c2Ugb2YgY2xhc3Mgd2l0aCBhcnJheXNcbi8vIG9ubHkgYXJyYXlzIGNyZWF0ZWQgdXNpbmcgSW52b2ljZSBjbGFzcyB3aWxsIGJlIGFsbG93ZWQgaW4gaW52b2ljZXMgYXJyYXlcbi8vIGxldCBpbnZvaWNlczogSW52b2ljZVtdID0gW107XG4vLyBpbnZvaWNlcy5wdXNoKGludk9uZSk7XG4vLyBpbnZvaWNlcy5wdXNoKGludlR3byk7XG4vLyBjb25zb2xlLmxvZyhpbnZvaWNlcyk7XG4vLyB3ZSBjYW4gY2hhbmdlIG9iamVjdCB2YWx1ZXMgdG8gc3RvcCB0aGF0IHVzZSBBY2Nlc3MgbW9kaWZpZXIgcHJpdmF0ZSBpbiBjbGFzc1xuLy8gaW52T25lLmNsaWVudCA9IFwiaGFyc2hcIjtcbi8vIGludlR3by5hbW91bnQgPSA1MDA7XG4vLyBnZXQgZWxlbW50cyBmcm9tIGh0bWxcbnZhciB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3RNZW51XCIpO1xudmFyIHRvRnJvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRUb0Zyb21cIik7XG52YXIgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXREZXRhaWxzXCIpO1xudmFyIGFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRBbW91bnRcIik7XG52YXIgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1pdGVtXCIpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgY29uc29sZS5sb2codHlwZS52YWx1ZSwgdG9Gcm9tLnZhbHVlLCBkZXRhaWxzLnZhbHVlLCBhbW91bnQudmFsdWVBc051bWJlcik7XG4gICAgaWYgKHR5cGUudmFsdWUgPT09IFwiXCIgfHxcbiAgICAgICAgdG9Gcm9tLnZhbHVlID09PSBcIlwiIHx8XG4gICAgICAgIGRldGFpbHMudmFsdWUgPT09IFwiXCIgfHxcbiAgICAgICAgYW1vdW50LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGZpbGwgYWxsIHRoZSBmaWVsZHNcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZG9jID0gdm9pZCAwO1xuICAgICAgICBpZiAodHlwZS52YWx1ZSA9PT0gXCJpbnZvaWNlXCIpIHtcbiAgICAgICAgICAgIGRvYyA9IG5ldyBpbnZvaWNlXzEuSW52b2ljZSh0b0Zyb20udmFsdWUsIGRldGFpbHMudmFsdWUsIGFtb3VudC52YWx1ZUFzTnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRvYyA9IG5ldyBwYXltZW50c18xLlBheW1lbnRzKHRvRnJvbS52YWx1ZSwgZGV0YWlscy52YWx1ZSwgYW1vdW50LnZhbHVlQXNOdW1iZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGRvYyk7XG4gICAgfVxufSk7XG4vLyBsZXQgZG9jT25lOiBIYXNGb3JtYXR0ZXI7XG4vLyBsZXQgZG9jVHdvOiBIYXNGb3JtYXR0ZXI7XG4vLyBkb2NPbmUgPSBuZXcgSW52b2ljZShcIkhhcnNoXCIsIFwiV2ViIFByb2dyYW1taW5nXCIsIDMwMCk7XG4vLyBkb2NUd28gPSBuZXcgUGF5bWVudHMoXCJNYXJpb1wiLCBcIlBsdW1iaW5nXCIsIDE1MCk7XG4vLyBsZXQgZG9jczogSGFzRm9ybWF0dGVyW10gPSBbXTtcbi8vIGRvY3MucHVzaChkb2NPbmUpO1xuLy8gZG9jcy5wdXNoKGRvY1R3byk7XG4vLyBjb25zb2xlLmxvZyhkb2NzKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==