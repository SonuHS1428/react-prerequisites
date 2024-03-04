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