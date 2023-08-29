let revNum = function reverseNumber(number) {
  let reverseNumber = 0;
  while (number != 0) {
    reverseNumber = reverseNumber * 10 + (number % 10);
    number = Math.floor(number / 10);  // Math.floor to avoid values after '.' Ex: 6.7 = 6.0 or 6
  }
  return reverseNumber; 
}

let result = revNum(1234);
console.log(result);
