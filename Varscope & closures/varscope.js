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
    var declarations are hoisted
    let and const are also hoisted but they are differently hoisted from var declarations*/

x = 8; 
console.log(x);
var x;//there is no error and that we can declare var variables after defining them.

console.log(b);
let a= 8; 
var b=100;//100

console.log(a);
let a= 8; 
var b=100;//get a reference error

/*Because let & const are in temporal dead zone for the time being
     temporal dead zone is the time from hoisting(i.e variable getting memory space)to initializing some values to the variables*/
/*the variable declared with var are in global space where let and const are not in global space
    in case of let and const ,they are allocated a memory but they are stored in a diff mem space than global
        so that u can't access those let and const declarations before u putting some values*/
/*whenever u try to access a variable inside temporal dead zone,it gives u a reference error
     in the above example,we are initializing the value for a variable i.e let a=8 at line2 ,so before to that line2 all code 
        is acts as a temporary dead zone.*/




