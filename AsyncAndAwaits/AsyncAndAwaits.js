//Async
//-----------------------------------

// async function f1() {
//     console.log('Async function.');
//     return Promise.resolve("Resolved");
// }

// f1().then(function(result) {
//     console.log(result)
// });

// Await
//-------------------------------------

let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000);
});

async function asyncFunction() {

    console.log("Waiting for the Promise to resolve.")
    // wait until the promise resolves
    let result = await promise;

    console.log(result);
    console.log('Asynchronous Function is complete. ');
}

// calling the async function
asyncFunction();

// let hello = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("hello");
//     resolve("resolves promise.");
//   }, 3000);
// });

// async function hi() {
//   console.log("wait");
//   let result = await hello;
//   console.log(result);
// }

// hi();
