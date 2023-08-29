function removeDuplicate(array) {
  let updatedArray = [];
  array.forEach((element) => {
    if (!updatedArray.includes(element)) {
      updatedArray.push(element);
    }
  });
  console.log(updatedArray);
}

numbers = [1, 2, 2, 3, 3, 4, 2, 4, 5, 6, 6, 54];
removeDuplicate(numbers);