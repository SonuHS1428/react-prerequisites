/*Using var(Only use var if you MUST support old browsers.)
Using let(Only use let if you can't use const)
Using const(Always use const if the value should not be changed)*/

/*Scope(Scope is the accessibility during runtime of variables, functions, or objects in a particular part of your code.)
    var:Variables declared with var are in the global scope(When we define a variable inside a function,we can only access the variable inside the function.)
    let:Variables declared with let are in the block scope.
    const:Variables declared with const are in the block scope.*/

// Global scope
var myVar = 1;//can be accessed from anywhere in the code, including inside and outside of functions.

// Function scope
function myFunction() {
  var myVar = 2;// This variable is local to the function, so it can only be accessed from within the function.
  console.log(myVar); // 2
}

// Block scope
{
  let myVar = 3;
  console.log(myVar); // 3
}

console.log(myVar); // 1


function f1()
{
    var a=10;
}
console.log(a)//an error as a is not defined

for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i);//an error as i is not defined 


/*Hoisting (means that we can define a variable before its declaration.)
    var:allowed
    let:not allowed
    const:not allowed*/
x = 8; 
console.log(x);
var x;//there is no error and that we can declare var variables after defining them.

x = 8; 
console.log(x);
let x;//get an error as let variables do not support hoisting.same for const


/*Reassign the value
    var:allowed
    let:allowed
    const:not allowed*/

/*Redeclaration of the variable
    var:allowed
    let:not allowed
    const:not allowed*/
var v1 = 1;
var v1 = 30;
console.log(v1);//30,there is no error 

let v1 = 1;
let v1 = 30;
console.log(v1);//get an error as the let and const variables do not allow you to redeclare them again.










