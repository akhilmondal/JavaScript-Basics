//variables with 'var' keyword
//----------------------------------------

// It have function scope or global scope based on the declaration.

// var varGlobal = "Akhil";  
// function variableVarFunction() {
//     //Variables declared with var inside a function are locally scoped to that function.
//     //They are accessible within the function and any nested functions or blocks inside that function.
//     console.log("Inside the function: "+varGlobal);
//     var varFunction = "JavaScript";

//     {
//         console.log("Inside the block: "+varGlobal);
//         var varBlock = "Abhishek";
//         console.log("Declared: inside the function, Accesing: inside the block:  "+varFunction); 
//     }
    
//     console.log("Declared: inside the block, Accesing: out side of the block "+varBlock);
// }
// variableVarFunction();
// var varGlobal = "Appu";  //We can redeclare and reassign a variable with var keyword
// console.log("Redeclared: "+varGlobal);
// varGlobal = "Mondal";
// console.log("Reassigned: "+varGlobal);
// console.log("Declared: inside the function, Accesing: outside the function:  "+varFunction);  // it will throw an error =  ReferenceError: varFunction is not defined




//variables with 'let' keyword
//---------------------------------------------------
// Variables declared with 'let' are block-scoped.

// let letGlobal = "Akhil";  
// function variableLetFunction() {

//     console.log("Inside the function: "+letGlobal);
//     let letFunction = "JavaScript";

//     {
//         console.log("Inside the block: "+letGlobal);
//         console.log("Declared: inside the function, Accesing: inside the block:  "+letFunction);
//         let letBlock = "Abhishek";
//     }
    
//     //console.log("Declared: inside the block, Accesing: out side of the block "+letBlock); //ReferenceError: letBlock is not defined
// }
// variableLetFunction();
// //let letGlobal = "Appu";  // here an error will come because variable with let keyword doesn't allow redeclaration.
// //console.log("Redeclared: "+letGlobal);
// letGlobal = "Mondal";  //We can reassign a variable with 'let' keyword.
// console.log("Reassigned: "+letGlobal);



//variables with 'const' keyword
//------------------------------------------

// const constGlobal = "Akhil";  
// function variableConstFunction() {

//     console.log("Inside the function: "+constGlobal);
//     const constFunction = "JavaScript";

//     {
//         console.log("Inside the block: "+constGlobal);
//         const constBlock = "Abhishek";
//         console.log("Declared: inside the function, Accesing: inside the block:  "+constFunction); 
//     }
    
//     //console.log("Declared: inside the block, Accesing: out side of the block "+constBlock); //ReferenceError: constBlock is not defined
// }
// variableConstFunction();
//const constGlobal = "Appu";  // It will throw an error because variable with const keyword doesn't allow redeclaration.
//console.log("Redeclared: "+constGlobal);
//constGlobal = "Mondal";  //We can't reassign a variable with 'const' keyword. it will throw an error (TypeError: Assignment to constant variable.)
//console.log("Reassigned: "+constGlobal);



// Hoisting
//--------------------------------------------------
// JavaScript only stores function and variable declarations in the memory, not their assignments (value).


// helloAkhil();
// // helloMondal();  // TypeError: helloMondal is not a function
// function helloAkhil() {
//     console.log("hello Akhil Mondal");
// }

// var helloMondal = function helloAkhil() {  //function assignment will not going to be store in lexical Environment. so it will not work here.
//     console.log("Hello Mondal akhil");
// }


// Hoisting with 'var' variables
//------------------------------
// var a;  // here we declared the variable but without initialisation, So it will get initialised by the JavaSCript Engine as undefined.
// console.log(a);  // output: undefined.
// var a = 30;
// console.log(a);  // output: 30


//Hoisting with 'let' keyword
//-----------------------------

// For the 'let' and 'const' variable declaration, it get stored in the Lexical Environment but not get  initialised by the JavaSCript Engine.
// console.log(b);  // output: ReferenceError: Cannot access 'b' before initialization
// let b = "Akhil";
// let b; //During compilation the JS engine try to fetch the value of this variable. 
// //But still here we are not initialising it so engine will initialise it with undefined. 
// console.log(b);  // output: undefined

// console.log(c);  // output: ReferenceError: Cannot access 'c' before initialization
// const c = "Mondal";


// Function call after declaring and initialising the variable.
//-------------------------------------------------------------

// function test() {
//     console.log(firstName);
// }
// let firstName;
// firstName = 'Akhil';
// test();



// Hoisting Class Declaration
//---------------------------

// let akhil = new Person('Akhil', 'Mondal', 25); 
// console.log(akhil);                                  
// class Person {
//   constructor(firstName, lastName,  age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
// }
// let abhilash = new Person('Abhilash', 'Mondal', 25); 
// console.log(abhilash);