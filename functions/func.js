//syntax of function
function name(parameter1, parameter2, parameter3) {
    // code to be executed
}

//example
function myFunction(g1, g2) {
    return g1 / g2;
}
const value = myFunction(8, 2); // Calling the function
console.log(value);

//syntax for function expression
/*(It is similar to a function declaration without the function name.
 Function expressions can be stored in a variable assignment.)*/
let result= function(paramA, paramB) {
    // Set of statements
}

//example 
const square = function (number) {
    return number * number;
};
const x = square(4); // x gets the value 16
console.log(x);