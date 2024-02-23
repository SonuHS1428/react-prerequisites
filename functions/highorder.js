/*A higher-order function is a function that takes one or more functions as arguments,
or returns a function as a result. The mainFunction in the examples above is a higher-order function 
because it takes a callback function as an argument. */

//syntax
function higherOrderFunction(callback) {
    // Perform some operations
    // Call the callback function
    callback();
}
function callbackFunction() {
    console.log("Callback function is executed.");
}
// Passing the callback function to the higher-order function
higherOrderFunction(callbackFunction);

//There are various built in HOFs, and some of the most common ones are map(), filter() and reduce().

// map() :takes an array of values and applies a transformation to each value in the array.
const arr = [1, 2, 3, 4, 5];
const output = arr.map((num) => num += 10)
console.log(arr); // [1, 2, 3, 4, 5]
console.log(output); // [11, 12, 13, 14, 15]
/*The callback function that is being passed to map uses the arrow function syntax, and it takes a single argument num. 
This function adds 10 to num (every element in the array) and returns the result.*/

// filter() :takes an array and returns a new array with only the values that meet certain criteria.
const arr = [1, 2, 3, 4, 5];
const output = arr.filter((num) => num % 2) // filter out odd numbers
console.log(arr); // [1, 2, 3, 4, 5]
console.log(output); // [1, 3, 5]
/*In the above code, arr is an array with five elements: 1, 2, 3, 4, and 5. filter is a method that is used to
create a new array with elements that pass a test specified in a provided callback function.
This callback function checks if num is odd by checking if it is not divisible by 2 (num % 2).*/

//reduce() :used it when you want to perform some operation on the elements of an array and return a single value as a result. 
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, currentValue) => {
    return total + currentValue;
}, 0)
console.log(sum); // 15
/*In this example, the reduce() method is called on the numbers array and is passed a callback function 
that takes two arguments: total and currentValue.*/

//closures
/*nesting of functions and grants the inner function full access to all the variables and functions defined inside the outer function,
the outer function does not have access to the variables and functions defined inside the inner function.*/
// A closure is created when the inner function is somehow made available to any scope outside the outer function.

// The outer function defines a variable called "name"
const pet = function (name) {
  const getName = function () {
    // The inner function has access to the "name" variable of the outer function
    return name;
  };
  return getName; // Return the inner function, thereby exposing it to outer scopes
};
const myPet = pet("Vivie");

console.log(myPet()); // "Vivie"
