export function generic() {
  // Case-1
  const addUID = (obj: object) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
  };

  // let doc1 = addUID({ name: "ashish", age: 21 });
  // console.log(doc1);

  // property name doesn't exist
  // console.log(doc1.name);

  // Case-2 do this to solve above line-12 error
  // T will capture all the information we pass in functions so when we return, it will know what properties are on object
  const addUID2 = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
  };
  let doc1 = addUID2({ name: "harsh", age: 21 });
  //   console.log(doc1.name);

  // OR
  //   const addUID2 = <T extends { name: string }>(obj: T) => {
  //     let uid = Math.floor(Math.random() * 100);
  //     return { ...obj, uid };
  //   };
  //   let doc1 = addUID2({ name: "ashish", age: 21 });
  //   console.log(doc1.name);

  //Case-3 Generics with interfaces
  //   interface Resource {
  //     uid: number;
  //     resourceName: string;
  //     data: object;
  //   }

  //   const docThree: Resource = {
  //     uid: 1,
  //     resourceName: "person",
  //     data: { name: "harsh" },
  //   };

  // Case-3.1
  //   interface Resource<T> {
  //     uid: number;
  //     resourceName: string;
  //     data: T;
  //   }

  //   const docThree: Resource<object> = {
  //     uid: 1,
  //     resourceName: "person",
  //     data: { name: "harsh" },
  //   };

  // Case 3.2
  interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
  }

  const docThree: Resource<string> = {
    uid: 1,
    resourceName: "person",
    data: "harsh",
  };

  const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: "shopingList",
    data: ["bread", "milk"],
  };
}
