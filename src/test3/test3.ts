export function test3() {
  // Type casting using Generics
  function identity<T>(arg0: T): T {
    return arg0;
  }
  // let output = identity<string | number>(true)
  // console.log(output)

  // Type annotation for number to string
  let y: number | string = 124343;
  console.log(typeof y, y);
  // console.log((y as unknown as number).toString());

  // Type annotation with assertion
  let x: string = (y as unknown as number).toString();
  console.log(typeof x, x);

  // string to number
  let a: string = "42";
  let b = Number(a);
  if (!isNaN(b)) {
    console.log(typeof a, a);
    console.log(typeof b, b);
  } else {
    console.log("invalid number");
  }

  //----- Type Narrowing in TypeScript -----//
  // Type Guard to Narrowing
  function callMe(y: string | number) {
    if (typeof y === "string") {
      console.log("string");
    } else if (typeof y === "number") {
      console.log("number");
    }
  }
  // callMe(123)

  // Truthiness Narrowing
  function truthiness(x?: string) {
    if (x) {
      console.log(typeof x); // "string"
    } else {
      console.log("undefined");
    }
  }
  // truthiness(undefined)

  // Equality Narrowing
  function equality(x: string | number, y: number) {
    if (x === y) {
      // narrowed to number
      console.log(typeof x, "x and y same"); // number
    } else {
      // this is not narrowed
      console.log(typeof x); // number or string
    }
  }
  // equality("harsh",125)

  // Discriminated Unions
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Circle = {
    shape: "circle";
    radius: number;
  };

  function calculateArea(shape: Rectangle | Circle) {
    if (shape.shape === "rectangle") {
      // you can only access the properties of reactangle and not circle
      console.log("Area of reactangle: " + shape.height * shape.width);

      // typescript would throw an error if you tried to access radius
      //   console.log(shape.radius);
    }

    if (shape.shape === "circle") {
      // you can only access the properties of circle and not reactangle
      console.log("Area of circle: " + 3.14 * shape.radius * shape.radius);

      // tupescript would throw an error if you tried to access width
      //   console.log(shape.width);
    }
  }
}
