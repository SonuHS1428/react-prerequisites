//DESTRUCTING(destructing makes it easy to extract only what is needed)

//Array destructing
var x,y;
[x,y]=[10,20];
console.log(x);//10
console.log(y);//20

//Object destructing
({ x, y} = { x: 10, y: 20 });
console.log(x); // 10
console.log(y); // 20

//Examples

var [firstName, secondName] = ["alpha", "beta", "gamma", "delta"]; 	
console.log(firstName);// alpha 
console.log(secondName);// beta 

//The array elements can be skipped as well using a comma separator.
var [firstName,,thirdName] = ["alpha", "beta", "gamma", "delta"]; 
console.log(firstName);//"alpha" 
console.log(thirdName);//"gamma" 

/*In order to assign some array elements to variable and rest of the array elements to only a single 
variable can be achieved by using rest operator (…) as in below implementation.*/
var [firstName,,...lastName] = ["alpha", "beta", "gamma", "delta"];    
console.log(firstName);//"alpha" 
console.log(lastName);//"gamma, delta" 

//Values can also be swapped using destructuring assignment as below: 
var [firstName, lastName] = ["alpha", "beta", "gamma", "delta"]; 
console.log(firstName);//"alpha" 
console.log(secondName);//"beta" 
    //After swapping 
[firstName, secondName] = [secondName, firstName] 
console.log(firstName);//"beta" 
console.log(secondName);//"alpha" 

// Data can also be extracted from an array returned from a function
function NamesList() { 
    return ["alpha", "beta", "gamma", "delta"] 
} 
var[firstName, secondName] = NamesList(); 

console.log(firstName);//"alpha" 
console.log(secondName);//"beta" 

//The Nested objects can also be destructured using destructuring syntax
const marks = { 
section1: { alpha: 15, beta: 16}, 
section2: { alpha: -31, beta: 19 } 
}; 
const { section1 : { alpha: alpha1, beta: beta1 }} = marks; 
console.log(alpha1, beta1); // 15, 16 
