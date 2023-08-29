//IIFE-Immediately Invoked Function Expression

var globalMessage = 'hello global';
(function () {
    console.log(globalMessage); //TypeError: "hello global" is not a function
    console.log('Welcome to BlabZ.........');
    var message = 'hello blabz.......';
    console.log(message);
    setTimeout(function () {
        console.log(message);
    }, 1000);
})();

//console.log(message);  //ReferenceError: message is not defined
