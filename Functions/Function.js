
//******************Syntax*************
//Regular Functions.

// Declaring the function with 2 parameters or arguments.
// function addition(number1, number2) {  
//     return number1 + number2;
// }
//Assigning the calculated value to the variable and displaying it in the console.
// let additionResult = addition(200,50); 
// console.log("The result of the Regular function is: "+additionResult);


//Arrow Functions.
//By using arrow function we can aquire the same result with less code.


// let substractionResult = (num1, num2) => {
//     return num1 - num2;
// }
// let result = substractionResult(900,600); 
// console.log("The result of the Arrow function is: "+result);


//****************Same Parameter************************/
//Passing Same name parameters in the function.
// function sameParameter(number, number) {
//     let result =  number + number;
//     //As it is reassigning the value to the same variable, the value depends on the second parameter.
//     console.log("Method with same parameter: "+result);
// }
// sameParameter(300,400);


// let sameParameter = (num1, num1) => {
//     return num1 - num1;
// }
// let result = substractionResult(900,600); 
// console.log("The result of the Arrow function is: "+result);
//SyntaxError: Duplicate parameter name not allowed in this context


//****************************This KeyWord****************/
let hello = {
    id: "CFP 217",
    thisInRegularFunction() {
        console.log("Regular Function = My Batch Id is: " +this.id);
    },

    thisInArrowFunction: () => {
        console.log("Arrow Function = My Batch Id is: " +this.id);
    }
};
hello.thisInRegularFunction();
hello.thisInArrowFunction();  // output: undefined
