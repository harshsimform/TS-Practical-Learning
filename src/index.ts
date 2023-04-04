import { Invoice } from "./classes/invoice";
import { Payments } from "./classes/payments";
import { HasFormatter } from "./interface/HasFormatter";

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
const type = document.querySelector("#selectMenu") as HTMLSelectElement;
const toFrom = document.querySelector("#inputToFrom") as HTMLInputElement;
const details = document.querySelector("#inputDetails") as HTMLInputElement;
const amount = document.querySelector("#inputAmount") as HTMLInputElement;

const form = document.querySelector(".form-item") as HTMLFormElement;
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  //   console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
  if (
    type.value === "" ||
    toFrom.value === "" ||
    details.value === "" ||
    amount.value === ""
  ) {
    alert("Please fill all the fields");
  } else {
    let doc: HasFormatter;
    if (type.value === "invoice") {
      doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
      doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
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
