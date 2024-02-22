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

//Function Return(When JavaScript reaches a return statement, the function will stop executing.)

// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}

//Functions Used as Variable Values

//Instead of using a variable to store the return value of a function:
let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";
//You can use the function directly, as a variable value:
let text = "The temperature is " + toCelsius(77) + " Celsius";

//Local Variables
/*Variables declared within a JavaScript function, become LOCAL to the function.
Local variables can only be accessed from within the function.*/

// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
