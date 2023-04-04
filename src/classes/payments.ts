import { HasFormatter } from "../interface/HasFormatter";

export class Payments implements HasFormatter {
  constructor(
    public recipient: string,
    public details: string,
    public amount: number
  ) {}
  format() {
    return `${this.recipient} is owed $${this.details} for ${this.amount}`;
  }
}
