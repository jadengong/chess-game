// Always add script at the end of the body for easier parsing when compiling, since the browser parses from top to bottom
console.log('Hello World'); // printing for js

// VARIABLES

// declare a variable

// let keyword to decalre 

let name = 'Mosh';
console.log(name); 

// cannot be a reserved keyword, such as let, var, if, else ... 
// and be meaningful
// cannot start with a number 
// cannot contain a space or hyphen
// case sensitive

// CONSTANT VARIABLES

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate); 

// now try const instead of let

const interestRateNew = 0.4; 
// interestRateNew = 1.0; 
console.log(interestRateNew);


// PRIMITIVE TYPES
// String, Number, boolean, undefined, null

// let name = 'Mosh'; is a string literal

let age = 30; // number literal

let isApproved = true; // Boolean literal

let firstName = undefined; // undefined by default, can also set explicitly to undefined

let lastName = null; // use null when we want to explicitly clear the value of a variable



// dynamic type, variable type can change at run time instead of being set forever

// in console of local website, try this:
/* 
typeof name
"string"

name = 1;
1

typeof name
"number"

*/ 


// OBJECTS, ARRAYS, FUNCTIONS


// declaring object
let person = { // curly braces signify object literal
    name: 'Roger',
    age: 30, 
}  // this is a person object with two properties, name and age

// Dot notation to change the value of a variable
person.name = 'John'; // probably better bc it's shorter

// Bracket notation to change the value of a variable
let selection = 'name'; 
person[selection] = 'Mary'; // this allows us to change the value at runtime in a dynamic way

//or

person['name'] = 'Mary'; 

// Dot notation to read the value of a property
console.log(person.name);



// arrays

let selectedColors = []; // empty array, the brackets signify an array literal

selectedColors = ['red', 'blue'];
selectedColors[2] = 'green'; // dynamic, can add whenever 
selectedColors[3] = 1; // objects are dynamic as well
selectedColors[1] = 'purple';
console.log(selectedColors);

firstColor = selectedColors[0];

console.log(firstColor);



// functions



//function greet() {
   // console.log('Hello World'); 
//}

//greet(); // call the function 

// change how the function behaves

// i want to display the name of the person instead of hello world

//function greet(name){
//console.log('Hello ' + name);

//}

//greet('John'); // argument, not a parameter (name is the parameter)
//greet('Jaden');


function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Jaden', 'Ong');


// types of functions

// the function above is perfoming a task
// ... sometimes they calculate a value

function square(n){
    return n * n;
}

console.log('The square of 4 is ' + square(4)); 

let number = square(3); 
console.log(number);


