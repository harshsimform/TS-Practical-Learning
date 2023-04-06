// You can't create an object/instance of abstract class
export function abstract() {
  abstract class Student {
    constructor(public name: string, public age: number) {}
    // the class that extends abstract class must implement getDetails() method
    abstract getDetails(): void;
    // i can use this getHello() directly for an obj
    getHello(): string {
      return "Hello user";
    }
  }
  class stud extends Student {
    constructor(public name: string, public age: number, public role: string) {
      super(name, age);
    }
    getDetails(): string {
      return `${this.name} and ${this.age} and ${this.role}`;
    }
    // ovrriding getHello() method
    // getHello(): string {
    //   return `Hello ${this.name}`;
    // }
  }
  const obj = new stud("harsh", 21, "Trainee");
  //   console.log(obj.getDetails());
  obj.getHello();
  //   console.log(obj.getHello());
}
