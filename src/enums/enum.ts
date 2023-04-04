export function enumTest() {
  // without enum
  interface Resource<T> {
    uid: number;
    resourceType: number;
    data: T;
  }

  //   const docOne: Resource<object> = {
  //     uid: 1,
  //     resourceType: 2,
  //     data: { title: "name of the wind" },
  //   };

  //   const docTwo: Resource<object> = {
  //     uid: 2,
  //     resourceType: 4,
  //     data: { name: "John" },
  //   };
  //   console.log(docOne, docTwo);

  // with enum
  enum ResourceType {
    BOOK,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON,
  }

  const docOne: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.FILM,
    data: { title: "name of the wind" },
  };

  const docTwo: Resource<object> = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: { name: "John" },
  };
  //   console.log(docOne, docTwo);
}
