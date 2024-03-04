//ARRAY METHODS(static and instance methods)

//Static methods(If the method is called using the array class itself then it is called a static method.)

//JavaScript Array from() Method
//The JavaScript Array from() method returns an Array object from any object with a length property or an iterable object.

// Creating array from input string
let myArr = Array.from(
    "GeeksForGeeks");
// Display output
console.log(myArr);
/*Output
[
  'G', 'e', 'e', 'k',
  's', 'F', 'o', 'r',
  'G', 'e', 'e', 'k',
  's'
]*/

//JavaScript Array isArray() Method
//The Javascript arr.isArray() method determines whether the value passed to this function is an array or not.

// JavaScript code for isArray() function
function func() {
    console.log(Array.isArray('foobar'));
}
func();
/*Output
false*/

// JavaScript code for isArray() function
function func() {
    console.log(Array.isArray(['Day', 'Night', 'Evening']));
}
func();
/*Output
true*/

//JavaScript Array of() Method
/*The Javascript array.of() method is an inbuilt method in JavaScript that 
creates a new array instance with variables present as the argument of the method.*/

Input: Array.of(10, 20, 30)
Output: Array [10, 20, 30]
/* input arguments of the array.of() method is a string converted into an array
containing the same argument shown in the output.*/
console.log(Array.of("Ram", "Geeta"));//Array ["Ram", "Geeta"]

//Instance methods(If the method is called on an instance of a array then it is called an instance method.)

//Javascript Array at() Method
/*The JavaScript Array at() method takes an integer value (index) as a parameter and returnsthe element of that index. 
 It allows positive and negative integers. For the negative integer, it counts back from the last element in the array. */

 const arr = [45, 32, 69, 21];
 const index = 3;
 console.log(arr.at(index));//21
 const index2=-1;
 console.log(arr.at(index2));//21

//Javascript concat() Method
//Combine two or more arrays using the concat() method. Ir returns new array containing joined arrays elements.

// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "JavaScript", "React"];
let otherCourses = ["Node.js", "Expess.js"];
 
// Concatenate both arrays
let concateArray = courses.concat(otherCourses);
 
console.log("Concatenated Array: ", concateArray);// [ 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Expess.js' ]

//filter() method
/*JavaScript Array filter() Method is used to create a new array from a given array consisting of only those elements from 
the given array that satisfy a condition set by the argument method.*/

function isPositive(value) {
    return value > 0;
}
 
let filtered = [112, 52, 0, -1, 944].filter(isPositive);
console.log(filtered);//[112,52,944]
//method filter() creates a new array consisting of only those elements that satisfy the condition checked by isPositive() function.

//map() method
//JavaScript map() method iterates over an array, applying a callback function to each element, and returns a new array with the results

const numbers = [1, 4, 9, 16, 25];
const squareRoots = numbers.map(num => Math.sqrt(num));
 
console.log(squareRoots); // Output: [1, 2, 3, 4, 5]
// the map() method to create a new array containing the square roots of each number in the original array.

//reduce() method
/*The Javascript arr.reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function
for each value of the array (from left to right) and the return value of the function is stored in an accumulator. */

// Input array
let arr = [10, 20, 30, 40, 50, 60];
// Callback function for reduce method
function sumofArray(sum, num) {
    return sum + num;
}
//Fucntion to execute reduce method 
function myGeeks(item) {
    // Display output
    console.log(arr.reduce(sumofArray));
}
myGeeks();//210
//This example uses reduce() method to return the sum of all array elements.
