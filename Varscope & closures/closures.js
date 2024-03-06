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
    console.log(a);
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

/*when u are returning y i.e when u invoke x() it will returns y to the place where it invoked 
      and when we are trying to see what will be the returned value of this function call,we get the fun y
          and we know after returning the y,the function is vanished i.e x's EC is no longer presentin the call stack*/
/*suppose we have some lines of code here,and at some point of time if we call the function z()
      wkt z contains the function y,but x&y's EC are no longer available..so that we may think func z() can't access value of a
          but it will print 10 as output,bcz when func is returned from func,not just the fun code is returned but the
          closure(func + its lexical environment) will be returned..z will remembers the reference to the a th memory location*/

function x(){
  var a=10;
  function y(){
    console.log(a);
  }
  a=100;
  return y;
}
var z=x();
console.log(z);
z();//100

/*here,z has the reference to the variable a,not to just the value of a
     so that func z remebers the reference to that variable a*/

function z(){                                    
  var b=900;
  function x(){
       var a=7;
       function y(){
          console.log(a,b);
       }
       y();
  }
  x();
}
z();//7 900

/*Here when we run the above code ,we get o/p as 7 900..where y has the reference to both lexical environment of its parents i.e x and z
         SCOPE
         closure(x)
           a:7
         closure(z)
           b:900   */


//setTimeout() + closures
function x(){
     var i=1;
     setTimeout (function(){
          console.log(i);
     },3000);
     console.log("hello");
}
x();/*hello
      1

/* here that callback function forms a closure..that function remembers reference to i and forms a closure..whenever this func goes it 
         takes the reference of i with that*/
/*setTimeout takes the callback function and stores it in some place and attached a timer to it.once the timer expired i.e here 3000msec
      are done..then it takes that func and puts into call stack and runs it..*/
/* and mainly js doesnot wait at that point of time..it will keep executing the other code ...here in this example..first hello get printed 
       after 3000msec over the value of i is printed...*/





























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
