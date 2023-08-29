function countDigit(number) {
  let count = 0;
  while (number >= 1) {
    number = Math.floor(number / 10);
    console.log(number);
    count++;
  }

  console.log("The digits of the number is ", count);
}
countDigit(237455);



