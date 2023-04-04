// interface
interface IsPerson {
  // meaning every object that describes it self as IsPerson should have below properties
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

// object one
const person1: IsPerson = {
  name: "harsh",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent", amount);
    return amount;
  },
};

// object two
const person2: IsPerson = {
  name: "harsh",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent", amount);
    return amount;
  },
};
console.log(person1, person2);

// arrow function
const greetPerson = (person3: IsPerson) => {
  console.log("Hello", person3.name);
};
greetPerson(person1);
