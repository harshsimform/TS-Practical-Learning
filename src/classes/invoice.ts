// TS Class
// class Invoice {
//   readonly client: string;
//   private details: string;
//   private amount: number;

//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes $${this.details} for ${this.amount}`;
//   }
// }
//-------------OR-----------
// export class Invoice {
//   constructor(
//     public client: string,
//     public details: string,
//     public amount: number
//   ) {}
//   format() {
//     return `${this.client} owes $${this.details} for ${this.amount}`;
//   }
// }

import { HasFormatter } from "../interface/HasFormatter";

export class Invoice implements HasFormatter {
  constructor(
    public client: string,
    public details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} owes $${this.details} for ${this.amount}`;
  }
}
