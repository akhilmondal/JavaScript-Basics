//variables with 'var' keyword
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
//console.log("Declared: inside the function, Accesing: outside the function:  "+varFunction);  
// it will throw an error =  ReferenceError: varFunction is not defined



//variables with 'let' keyword
// let letGlobal = "Akhil";  
// function variableLetFunction() {

//     console.log("Inside the function: "+letGlobal);
//     let letFunction = "JavaScript";

//     {
//         console.log("Inside the block: "+letGlobal);
//         let letBlock = "Abhishek";
//         console.log("Declared: inside the function, Accesing: inside the block:  "+letFunction); 
//     }
    
//     //console.log("Declared: inside the block, Accesing: out side of the block "+letBlock); //ReferenceError: letBlock is not defined
// }
// variableLetFunction();
// //let letGlobal = "Appu";  // here an error will come because variable with let keyword doesn't allow redeclaration.
// //console.log("Redeclared: "+letGlobal);
// letGlobal = "Mondal";  //We can reassign a variable with 'let' keyword.
// console.log("Reassigned: "+letGlobal);




//variables with 'const' keyword
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



//Hoisting
// It works only with var keyword.
// 