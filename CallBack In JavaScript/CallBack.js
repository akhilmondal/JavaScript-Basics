// Call Back
//--------------------
// The primary benifit of a call back function is that we don't need to wait for the execution of the call back function.
// Our code will not stop executing 

//Normal Function
function greet(name, callBack) {  // Here we are passing a string and a function as argument.
    setTimeout(() => {
        console.log("Operation will complete after 2 sec ")
        callBack();
    }, 2000);
    
    console.log('Hi' + ' ' + name);
     // Need to wait till completion of the above code.
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Akhil', callMe);

// console.log("Call Back operation completed.")


// function greet1(name, callback) {
//     setTimeout(() => {
//         console.log("operation will complete after 2 sec", name);
//         callback();
//     }, 2000);
//     console.log("hello world");
    
// }

// function hello() {
//     console.log("hello callback");
// }

// greet1("akhil", hello);