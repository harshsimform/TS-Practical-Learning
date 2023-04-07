export function test2() {
  //   abstract class Student {
  //     constructor(name: string, age: number) {}
  //     abstract sayHello(): string;
  //     getName(): string {
  //       return "Hello user";
  //     }
  //   }
  interface Student {
    name: string;
    age: number;
  }
  class stud implements Student {
    constructor(public name: string, public age: number) {}
    sayHello(): string {
      return "Harsh";
    }
    getName(): string {
      return `Hello ${this.name}`;
    }
  }
  const obj = new stud("harsh", 21);
  //   console.log(obj);
  //   console.log(obj.sayHello());
  //   console.log(obj.getName());
}
