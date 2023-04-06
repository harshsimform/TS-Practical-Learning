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
  //?---------- write better functions in TS
  // Case-1 specify what kind of value want to return from function
  function a(num: number): string {
    // return (num += 10);
    return "hello";
  }
  // Case-2 use | symbol to specify multiple return type format
  function b(myVal: number): string | boolean {
    if (myVal > 5) {
      return true;
    } else {
      return "Invalid";
    }
  }
  // Case-3 Arrow function
  const c = (str: string): string => {
    return "";
  };
  // Case-4 with Array.map, specify which type of value you want ro return from map function
  const arrVal = ["john", "mark", "vatsal"];
  // const arrVal = [1, 2, 3, 4];
  arrVal.map((val): string => {
    return `values: ${val}`;
  });
  console.log();
  //?---------- interface without generics
  //? Case-1
  interface Student {
    skills: {};
  }
  const objStud: Student = {
    skills: ["harsh", 12],
  };
  // console.log(objStud);
  //? Case-2
  function user2(str: number | string): number | string {
    return str;
    // return (str = true);
  }
  user2(3);
  // user2(true);
  // user2(true);
  //? Case-3
  function user3(str: any): any {
    return (str = true);
  }
  // user3(true);
  //?---------- interface with single generics
  //? Case-1
  // interface Student1<T> {
  //   skills1: T[];
  // }
  // const objStud1: Student1<string | number> = {
  //   skills1: ["harsh", 1],
  // };
  // console.log(objStud1);
  //? Case 1.1 multiple generics
  interface Student1<T, U> {
    skills1: T[];
    city: U;
  }
  const objStud1: Student1<string | number, string> = {
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
  let score: Array<number | string> = [];
  score = [1, 2, 3, 4, "43"];
  // console.log(score);
  //? Case-3
  function user4<T>(str: T): T {
    return str;
  }
  user4([1, 2, 3, 4, "harsh"]);
}
