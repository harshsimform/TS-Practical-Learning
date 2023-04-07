//? A tuple type is an array with a predefined length and predefined types in each index position in the array. The types inside this array do not have to be the same, could be a mixture of different types.
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
  // with tuple Case-2
  async function apiCall1() {
    return "";
  }

  async function apiCall2() {
    return 1;
  }

  async function apiCall3() {
    return false;
  }

  async function main() {
    // destructure the above Promise.all() as follows, with each variable getting assigned the correct types.
    const [string, number, boolean] = await Promise.all([
      apiCall1(),
      apiCall2(),
      apiCall3(),
    ]);
  }
}
