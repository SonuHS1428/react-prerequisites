//SCOPE CHAIN AND LEXICAL ENVIRONMENT

/*wkt whenever we run a js program,an execution context is created..along with execution context the lexical environment is also created
     the word lexical means in heirarchy or in sequence
        lexical environment = local memory + lexical environment of its parent*/
function a(){
 var b=10;
 c();
 function c(){
  console.log(b);//10
 }
}
a();
console.log(b);
/* here in above example c is lexically sitting inside a and a is lexically inside global scope
        the lexical environment of c() = its memory space(where the var and fun are stored) + lexical environment of its parent i.e a
        the lexical environment of a() = its memory space(where the var and fun are stored) + lexical environment of its parent i.e global
        the lexical environment of global = its memory space(where the var and fun are stored) + reference to outer environment i.e to null 
          bcz it has no parent*/
/*SCOPE CHAIN:The chain of all lexical environment & parent references*/


//CLOSURES

function x(){
  var a=10;
  function y(){
    console.log(a);//10
  }
  y();
}
x();
/*As we know thw concept of lexical environment and scope chain,when u are trying to access the value of b inside fun y,
      js engine first tries to find a in local memory of y and it does't find it,
           then it goes to its lexical parent there it find x,hence print the value 10*/
//and this is what the closure is...CLOSURE is a function bundled with its lexical environment

//the existence of CLOSURE concept when we returning a function from a function
function x(){
  var a=10;
  function y(){
    console.log(a);//10
  }
return y;
}
var z=x();
console.log(z);/*   y(){
                     console.log(a);
                    }
/*.........
...........
...........*/
z();//10

























//closures in javascript
/*a closure is a combination of a function and the lexical environment within which that function was declared.
 This lexical environment consists of any local variables that were in scope at the time of the closure's creation.*/
/*Closures are created whenever a function is defined within another function, and the inner function references 
variables from the outer function.*/

function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer function
    }

    return innerFunction;
}

let closure = outerFunction();
closure(); // Outputs: "I am from the outer function"

/*In this example, innerFunction is a closure because it is defined within outerFunction and accesses outerVariable,
a variable from the outer function's scope. Even though outerFunction has finished executing by the time closure is
called, the closure maintains a reference to outerVariable, allowing it to still access and use the variable. */
