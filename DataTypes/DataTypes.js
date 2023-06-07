//*******************************Data Types**************************//

//1. Premitive Data Types
    //Numbers
    let num = 3000;
    console.log(num); //O/P: 3000
    console.log(typeof num); // O/P: number

    //String
    let name = "Akhil";  //Also we can use single quotes('Akhil').
    console.log(name); //O/P: Akhil
    console.log(typeof name); // O/P: string

    //Boolean
    let game = true;  // same for false value
    console.log(game); //O/P: true
    console.log(typeof game); // O/P: boolean

    //Undefined
    let variable1;
    console.log(variable1); //O/P: Undefined
    console.log(typeof variable1); // O/P: Undefined

    //Null
    let firstName = null;
    console.log(firstName); //O/P: null
    console.log(typeof firstName); // O/P: object
    /* Here null is a DataType, but when you assign it to a variable that variable
        is considered as an object.
        So that the output is null but the data type is Object.
    */ 


//Object Data Type
        //Object
        let contact = {
            firstName: 'Akhil',
            lastName: 'Mondal',
            age: 24,
            student: true
        }
        //Created an object with the key and value pairs.
        console.log(contact.firstName);   
        console.log(contact.lastName);
        console.log(contact.age);
        console.log(contact.student);    
        
