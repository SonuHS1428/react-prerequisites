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

