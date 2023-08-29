function countOccurance(array) {
  let count = {};
  array.forEach((element) => {
    count[element] = count[element] + 1 || 1;   // count[key]
  });
  return count;
}

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 4, 6, 3, 5, 6, 34, 4, 4, 2];
let result = countOccurance(numbers);
console.log(result);
