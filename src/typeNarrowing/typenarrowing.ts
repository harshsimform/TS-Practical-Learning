export function resultNarrow() {
  interface Student1<T, U> {
    skills: T[];
    city?: U;
  }
  const objStud: Student1<number, string>[] = [
    { skills: [1, 2.3] },
    { skills: [4, 5, 6], city: "SURAT" },
  ];

  function printCity(city: string) {
    // console.log(city);
  }

  function narrow() {
    for (const data of objStud) {
      //   printCity(data.city);
      // type narrowing
      if (data.city) {
        printCity(data.city);
      }
    }
  }
  narrow();
  //   console.log(objStud);
  //   good way to find undefined value
  function isDefined<T>(arg: T | undefined): arg is T {
    return typeof arg !== "undefined";
  }
  const list = ["a", "b", undefined, "c"];
  const filtered = list.filter(isDefined);
  console.log(filtered);
}
