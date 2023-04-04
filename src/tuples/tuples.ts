export function tuple() {
  //without tuple
  let arr = ["harsh", 21, true];
  // any of the above array values can be in any position
  // i.e. arr[0] can be number
  arr[0] = 45;
  arr[1] = "ashish";
  arr = [21, false, 21];
  //   console.log(arr);

  //with tuple
  let arr2: [string, number, boolean] = ["harsh", 21, false];
  // any of the above array values can not be in different position
  // i.e. arr2[0] must be string
  arr2[0] = "vatsal";
  arr2[1] = 45;
  //   console.log(arr2);
}
