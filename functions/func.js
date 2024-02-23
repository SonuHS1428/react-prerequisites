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


//Recursion(A function that calls itself is called a recursive function.)

function loop(x) {
  // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
  if (x >= 10) {
    return;
  }
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);

//Nested functions(a nested function can "inherit" the arguments and variables of its containing function. 

/*The inner function can be accessed only from statements in the outer function.
The inner function forms a closure: the inner function can use the arguments and variables of the outer function,
while the outer function cannot use the arguments and variables of the inner function.*/
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addSquares(2, 3)); // 13
console.log(addSquares(3, 4)); // 25
console.log(addSquares(4, 5)); // 41

//multiple Nested functions
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // Logs 6 (which is 1 + 2 + 3) 
/*A function (A) contains a function (B), which itself contains a function (C).
Both functions B and C form closures here. So, B can access A, and C can access B*/

//name conflict(When two arguments or variables in the scopes of a closure have the same name, there is a name conflict.)
//the innermost scope takes the highest precedence, while the outermost scope takes the lowest. 
function outside() {
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

console.log(outside()(10)); // 20 (instead of 10)
/*The name conflict happens at the statement return x * 2 and is between inside's parameter x and outside's variable x. 
The scope chain here is {inside, outside, global object}. 
Therefore, inside's x takes precedences over outside's x, and 20 (inside's x) is returned instead of 10 (outside's x).*/


//A self-invoking function: is a nameless (anonymous) function that is invoked immediately after its definition.
//An anonymous function is enclosed inside a set of parentheses followed by another set of parentheses (), which does the execution.
(function(){
    console.log("This function is called immediately");
})();
//The primary benefit of self-invoking functions is that they execute only once and won’t fill the global namespace 
/*After the function has been initialized, it is being immediately invoked and it’s executed only once as after the 
execution we’ll lose the reference to the function.*/
/*A self-invoking function can have variables and methods but they cannot be accessed from outside of it.
To access them, the global window object has to be passed as a parameter.*/
(function(window){
    var pi = 3.141;
    function e() {
	return Math.E;
    }
    
    window.pi = pi;
    window.e = e;
})(window);
/*a self-invoking function below, containing the variable pi and the function e(). A global window object is passed
and both pi and e() are assigned to the global variables window.pi and window.e respectively*/
