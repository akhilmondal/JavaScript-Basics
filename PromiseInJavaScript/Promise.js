// JavaScript Promise
//------------------------------------------

// let value = true;

// let checkValue = new Promise(function (resolve, reject) {
//     if (value) {
//         resolve("The Promise is resolved. ");
//     } else {
//         reject("The Promise isn't resolved. ");
//     }
// });

// console.log(checkValue);


// let hi = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("promise is resolved.");
//     }, 3000);
//     console.log("hello");

// })
// hi.then((result) => {
//     console.log(result);
// });

// Promise chaining
//----------------------------------
// Then()
//-----------------------

// let examplePromise = new Promise(function(resolve, reject) {
//     resolve("Promise Resolved");
// });

// examplePromise.then(function resolvedValue(result) {
//     console.log(result);
// });

// Catch()
//-------------------------------------

// let exPromise = new Promise(function (resolve, reject) {
//     reject('Promise rejected'); 
//  });
 
//  // executes when promise is resolved successfully
//  exPromise.then(
//      function successValue(result) {
//          console.log(result);
//      },
//   )

//    // executes if there is an error
//   .catch(
//     function errorValue(result) {
//         console.log(result);
//     }
//   );

// Finally()
//-------------------------------------

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

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("hello promise");
//         resolve("Promise resolved")
//     }, 3000);
// });

// promise.then((result) => {
//     console.log(result)
// });

let promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        const data = Note.Find(id);
        resolve("Data found");
    }, 2000);
})

promise.then((result) => {
    console.log("The data is found", result);

});

promise.catch((result) => {
    console.log("the error is ", result);
})