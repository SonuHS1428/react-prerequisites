//Arrow functions(anonymous functions i.e. 
//functions without a name but they are often assigned to any variable. They are also called Lambda Functions.)
Syntax:

const fun = () => {
    console.log( "Hello world!" );
}

//Arrow Function without Parameters
const fun1 = () => { 
    console.log( "Hi world!" ); 
} 
fun1();

//Arrow Function with Default Parameters
const func2 = ( x, y, z = 30 ) => { 
    console.log( x + " " + y + " " + z); 
} 
func2( 10, 20 );

/* In regular functions, the object that is called the function was represented by the this keyword. 
   This object could be a window, document, button, or anything else in case of regular functions.

   this is based on the enclosing lexical scope for arrow functions. In arrow functions, the standard variable lookup is used.
   They go on to the enclosing scope if they are unable to identify it in the current scope.
   
   there is no binding of this with arrow function, rather than binding their own this, the arrow functions inherit the "this" from the parent scope.
   This process is called lexical scoping. 
*/

