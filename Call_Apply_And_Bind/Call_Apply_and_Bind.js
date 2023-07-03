// Call Function

// Object 1 with different values
let name1 = {
  firstName: "Akhil",
  lastName: "Mondal",
};

// Object 2 with different values
let name2 = {
  firstName: "Appu",
  lastName: "Mondal",
};

// Function to print full name by passing the object.
// Use regular function as it will not work with arrow functions
let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + "," + state
  );
};

printFullName.call(name1, "Malkangiri", "Odisha");
printFullName.call(name2, "Kalimela", "Odisha");

// Apply Function

// the difference between call and apply is that in call we pass argument as single entity.
// But in apply we need to pass it as an Array.

printFullName.apply(name1, ["Hello", "World"]);


//Bind Function
// It is same as a call method but it return a function as output.
let printName = printFullName.bind(name2, "Kalimela", "Odisha");
console.log(printName); // return A Function
// So call it as a function to get proper output
printName();