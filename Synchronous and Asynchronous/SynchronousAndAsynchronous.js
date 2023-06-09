
// Synchronous
//----------------
// All the function will get into the call stack sequentially and executes one by one.
// function a1() {
//     console.log("This is A1");
// }
// function a2() {
//     a1();
//     console.log("This is A2");
// }
// function a3() {
//     a2();
//     console.log("This is A3");
// }
// a3();
// console.log("All functions are finished: ")


// Asynchronous
//------------------
// WIth Browser API/ Web API
//------------------------------------
function f0() {
    console.log("Hello! this is F0");
}
function f1() {
    console.log("Hello! this is F1");
}
function f2() {
    console.log("Hi! this is F2");
    
}
function f3() {
    console.log("hey! This is F3")
    setTimeout(f0, 0);
    f2();
}
function mainFunction() {
    setTimeout(f1, 5000);  // As setTimeout is a web api/ Browser api, it will make f1 as a callback function an queue to the call back queue.
    f3();
    setTimeout(f2, 0);
}
mainFunction();


// With JavaScript Promise
//---------------------------------
// In case of promise the executer functions will get queued in job queue, not in callback queue.
const promise = new Promise((resolve, reject) =>
                resolve('I am a resolved promise')
                );
promise.then(result => console.log(result))


//The item in the callback queue is called a macro task, whereas the item in the job queue is called a micro task.