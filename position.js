/**
 * Amy WOD
 * Created by Mary on 2/7/2017.
 */

const testArray = [1, 3, 5, 6];

function position(array, targetVal) {
  let searching = true;
  let i = 0;
  let ret;
  while (searching) {
    if (array[i] < targetVal) {
      i += 1;
    } else {
      ret = i;
      searching = false;
    }
  }
  return ret;
}

console.log(position(testArray, 5));

console.log(position(testArray, 2));

console.log(position(testArray, 7));

console.log(position(testArray, 0));
