export function test() {
  //?----------- interface
  interface person {
    name: string;
    age?: number;
  }
  // redefine interface or re-opening interface
  interface person {
    country: string;
  }
  // interface person2
  interface person2 {
    gender: string;
  }
  // interface person3
  interface person3 {
    skill: Array<string | number>;
  }
  // extending person2 and person3 interface in person interface
  interface person extends person2, person3 {
    city: string;
  }
  const obj: person = {
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
  const arr = (
    name: string,
    city: string,
    country: string,
    gender: string,
    skill: Array<number | string>,
    age: number
  ): person => ({
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
    constructor(public name: string, public age: number) {}
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
  let x: unknown;
  x = "42a";
  //   console.log(typeof x, x);
  let y: number = Number(x);
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
