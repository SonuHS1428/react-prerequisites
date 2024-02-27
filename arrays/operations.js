//1. Accessing Elements of an Array
//Any element in the array can be accessed using the index number. The index in the arrays starts with 0.

// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "Javascript", "React"];
// Accessing Array Elements
console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);
console.log(courses[3]);

//2.Modifying the Array Elements
//Elements in an array can be modified by assigning a new value to their corresponding index.

// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "Javascript", "React"];
console.log(courses);//[ 'HTML', 'CSS', 'Javascript', 'React' ]
courses[1]= "Bootstrap";
console.log(courses);//[ 'HTML', 'Bootstrap', 'Javascript', 'React' ]

//3. Adding Elements to the Array
//Elements can be added to the array using methods like push() and unshift().

// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "Javascript", "React"];
 
// Add Element to the end of Array
courses.push("Node.js");
 
// Add Element to the beginning
courses.unshift("Web Development");
 
console.log(courses);//[ 'Web Development', 'HTML', 'CSS', 'Javascript', 'React', 'Node.js' ]

//4. Removing Elements from an Array
//Remove elements using methods like pop(), shift(), or splice().

// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "Javascript", "React", "Node.js"];
console.log("Original Array: " + courses);
 
// Removes and returns the last element
let lastElement = courses.pop();
console.log("After Removed the last elements: " + courses);//HTML,CSS,Javascript,React
 
// Removes and returns the first element
let firstElement = courses.shift();
console.log("After Removed the First elements: " + courses);//CSS,Javascript,React
 
// Removes 2 elements starting from index 1
courses.splice(1, 2);
console.log("After Removed 2 elements starting from index 1: " + courses);//CSS

//5. Array Length
//Get the length of an array using the length property.

   
// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "Javascript", "React", "Node.js"];
let len = courses.length;
console.log("Array Length: " + len);//Output:Array Length: 5

//6. Iterating Through Array Elements
//We can iterate array and access array elements using for and forEach loop.

// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "JavaScript", "React"];
// Iterating through for loop
for (let i = 0; i < courses.length; i++) {
    console.log(courses[i])
}
/*Output
HTML
CSS
JavaScript
React */

// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "JavaScript", "React"];
// Iterating through forEach loop
courses.forEach(function myfunc(elements) {
    console.log(elements);
});
/*Output
HTML
CSS
JavaScript
React */

//7.Array Concatenation
//Combine two or more arrays using the concat() method. Ir returns new array conaining joined arrays elements.

// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "JavaScript", "React"];
let otherCourses = ["Node.js", "Expess.js"];
 
// Concatenate both arrays
let concateArray = courses.concat(otherCourses);
 
console.log("Concatenated Array: ", concateArray);// [ 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Expess.js' ]

//8.Conversion of an Array to String
//We have a builtin method toString() to converts an array to a string

// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "JavaScript", "React"];
 
// Convert array ot String
console.log(courses.toString());//Output:HTML,CSS,JavaScript,React

//9. Check the Type of an Arrays
//The JavaScript typeof operator is used ot check the type of an array. It returns “object” for arrays.

// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "JavaScript", "React"];
 
// Check type of array
console.log(typeof courses);//output:object

