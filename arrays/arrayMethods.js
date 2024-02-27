//JavaScript Array from() Method
//The JavaScript Array from() method returns an Array object from any object with a length property or an iterable object.

// Creating array from input string
let myArr = Array.from(
    "GeeksForGeeks");
// Display output
console.log(myArr);
/*Output
[
  'G', 'e', 'e', 'k',
  's', 'F', 'o', 'r',
  'G', 'e', 'e', 'k',
  's'
]*/

//JavaScript Array isArray() Method
//The Javascript arr.isArray() method determines whether the value passed to this function is an array or not.

// JavaScript code for isArray() function
function func() {
    console.log(Array.isArray('foobar'));
}
func();
/*Output
false*/

// JavaScript code for isArray() function
function func() {
    console.log(Array.isArray(['Day', 'Night', 'Evening']));
}
func();
/*Output
true*/

//JavaScript Array of() Method
/*The Javascript array.of() method is an inbuilt method in JavaScript that 
creates a new array instance with variables present as the argument of the method.*/

Input: Array.of(10, 20, 30)
Output: Array [10, 20, 30]
/* input arguments of the array.of() method is a string converted into an array
containing the same argument shown in the output.*/
console.log(Array.of("Ram", "Geeta"));//Array ["Ram", "Geeta"]

//Javascript Array at() Method
/*The JavaScript Array at() method takes an integer value (index) as a parameter and returnsthe element of that index. 
 It allows positive and negative integers. For the negative integer, it counts back from the last element in the array. */

 const arr = [45, 32, 69, 21];
 const index = 3;
 console.log(arr.at(index));//21
 const index2=-1;
 console.log(arr.at(index2));//21
