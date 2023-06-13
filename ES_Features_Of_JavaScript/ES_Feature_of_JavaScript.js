
var ES6_Features

var Function_Parameter_Default_Value

// function example(height = 50, width = 40) { 
//     const newH = height * 10;
//     const newW = width * 10;
//     return newH + newW;
// }

// let result = example();
// console.log(result);

var Template_Literals

// const firstName = 'Akhil';
// const lastName = 'Mondal';
// // not use template literal
// const name1 = 'Hello, My name is ' + firstName + ', ' + lastName;
// console.log(name1);
// // use template literal
// const name2 = `Hello, My name is ${firstName}, ${lastName}`;
// console.log(name2);

var Structure_assignment_of_Array
// OR
var Destructuring_assignment

// var array = ['one', 'two', 'three', 'four', 'five'];  // Declaring an Array
// var [a, b, c] = array;  //Assigning the values of the array to a, b, c .
// console.log(a); // one
// console.log(b); // two
// console.log(c); // three

// // If i want to get the first and last value of the array

// var [first, second, ,last] = array;
// console.log(first);
// console.log(second);
// console.log(last);

// We can initialise the value of multiple variables at a time

// let num1;
// let num2;
// [num1, num2] = [20, 30];
// console.log(`The value of num1 is ${num1}`);
// console.log(`The value of num2 is ${num2}`);

var structure_assignment_of_objects

// Object declaration 
// const Student = {
//     name: 'Akhil',
//     age: 24,
//     city: 'Karnataka'
// };
// console.log(Student); 

// const {a, b, c} = Student;
// console.log(a);  //undefined
// console.log(b);  //undefined
// console.log(c);  //undefined

// // We need to take the variable name same as declared inside the object
// const {name, age, city} = Student;
// console.log(name);
// console.log(age);
// console.log(city);


var Spread_Operator

// var arr1 = [1, 2, 3];
// var arr2 = ['hello', 'hi', 'how'];
// var arr3 = [...arr1, ...arr2];  // Adding all the values of arr1 and arr2 to the arr3.
// console.log(arr3);


// const obj1 = {name: 'AKhil', age: 23, gender: 'male'};
// const obj2 = {name: 'Appu', age: 24, city: 'Karnataka'};
// // To copy any of these object
// const copyObj = {...obj1};  // Here obj1 get copied into copyObj.
// console.log(copyObj);
// // To merge these two objects into one.
// const mergeObj = {...obj1, ...obj2};  // During merge, it will update the values of the attribute which have same attribute name & add the newer attribute to the merged object.
// console.log(mergeObj);  // output = { name: 'Appu', age: 24, gender: 'male', city: 'Karnataka' }


var ES7_Features

var Includes_Function

// let arr = ['hello', 'i', 'am', 'akhil'];
// if(arr.includes('hello')) {
//     console.log('The item is present in the array');
// } else {
//     console.log('The item is not present inside the array.')
// }

var index_operator

// console.log(2**10); // 1024  
// console.log(Math.pow(2, 10)) // 1024

var ES8_Features

var Object_Keys
// const obj = {name: 'akhil', age: '24', tech: 'javascript'};
// console.log(Object.keys(obj));
// // Similarly Object.values works
// console.log(Object.values(obj));

var Object_Entries
// //The Object.entries method returns an array of key value pairs of all enumerable properties of the parameter object itself
// const obj = {a: 23, b: 'hello', c: 50};
// console.log(Object.entries(obj));  // [ [ 'a', 23 ], [ 'b', 'hello' ], [ 'c', 50 ] ]
// // we can also iterate through this object
// for(let [key, value] of Object.entries(obj)) {
//     console.log(`key: ${key} value: ${value}`)
// }

// // One use of the Object.entries method is to turn an object into a real Map structure.

// var map = new Map(Object.entries(obj));
// console.log(map);

var ES9_Features

var Object_Expansion_Operator

// let a = [1,2,3];
// let b = [0, ...a, 4]; // [0,1,2,3,4]
 
// let obj = { a: 1, b: 2 };
// let obj2 = { ...obj, c: 3 }; // { a:1, b:2, c:3 }
// let obj3 = { ...obj, a: 3 }; // { a:3, b:2 }
// let object = {
//   a: '01', b: '02'
// };
 
// let newObject = {
//   c: '03',
//   ...object
// };
 
// console.log(newObject); //{c: "03", a: "01", b: "02"}

var Promise_Finally

//A Promise call chain either successfully reaches the last. then(), or fails to trigger. catch().
// In some cases, you want to run the same code no matter whether Promise runs successfully or fails,
// such as clearing, deleting conversations, closing database connections, etc.

// let example = new Promise(function (resolve, reject) {
//     // could be resolved or rejected   
//     resolve('Promise resolved'); 
// });

// // add other blocks of code
// example.finally(
//     function greet() {
//         console.log('This code is executed.');
//     }
// );

var ES10_Features

var Flat_Function

// var arr1 = [1, 2, [3, 4]];
// console.log(arr1.flat()); //[ 1, 2, 3, 4 ]
 
// var arr2 = [1, 2, [3, 4, [5, 6]]];
// console.log(arr2.flat()); // [1, 2, 3, 4, [5, 6]]

 
// var arr3 = [1, 2, [3, 4, [5, 6]]];
// console.log(arr3.flat(2)); // [1, 2, 3, 4, 5, 6]

 
// //Using Infinity as the depth, expand the nested array of any depth
// arr3.flat(Infinity); 
// // [1, 2, 3, 4, 5, 6]
 
 
// //Remove null items
// var arr4 = [1, 2, , 4, 5];
// arr4.flat();
// // [1, 2, 4, 5]

var FlatMap_Function

// var arr1 = [1, 2, 3, 4];

// console.log(arr1.map(x => [x * 2])); // After doing the operation. It gives an array which have arrays as the elements.
// // [[2], [4], [6], [8]]

// console.log(arr1.flatMap(x => [x * 2])); // After doing the operation. It gives an array.
// // [2, 4, 6, 8]

// // Only "flatten" the array returned by the function in flatMap
// arr1.flatMap(x => [[x * 2]]);
// // [[2], [4], [6], [8]]

var TrimStart_and_TrimLast

/*
String.trimStart() can be used to remove whitespace from the beginning of a string.
String.trimEnd() can be used to remove whitespace from the end of a string.
*/

// let  greeting =  "    Welcome to the BlabZ";
// console.log(greeting.trimStart());// Welcome to the BlabZ

// let greeting1 = "Welcome to the CFP217     ";
// console.log(greeting1.trimEnd());// Welcome to the CFP217
