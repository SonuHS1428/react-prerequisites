//Array(enables storing a collection of multiple items under a single variable name)

//Declaration of an Array

//1. Creating an Array using Array Literal
Syntax:
let arrayName = [value1, value2, ...];

// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "Javascript", "React"];
console.log(courses);//output:[ 'HTML', 'CSS', 'Javascript', 'React' ]

//2. Creating an Array using Array Constructor (JavaScript new Keyword)
Syntax:
let arrayName = new Array();

// Creating and Initializing an array with values
let courses = new Array("HTML", "CSS", "Javascript", "React");
console.log(courses);//output:[ 'HTML', 'CSS', 'Javascript', 'React' ]

// Initializing Array while declaring
let arr = new Array(3);
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
console.log(arr);//output:[ 10, 20, 30 ]
