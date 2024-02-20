/*Spread & rest operators
(both the spread operator and rest parameter have the same syntax which is three dots(…) but they differ in functions.)
while the spread operator expands elements of an iterable, the rest operator compresses them.*/

//spread operator(operator helps us expand an iterable such as an array where multiple arguments are needed)

//1.appending an element to a given iterable
var array1 = [10, 20, 30, 40, 50];
var array2 = [...array1, 60];
console.log(array2);

/*Output:
[10, 20, 30, 40, 50, 60]*/

//2.copy objects using the spread operator
const obj = {
    firstname: "Divit",
    lastname: "Patidar",
};
const obj2 = { ...obj };
console.log(obj2);

/*Output:
    firstname: "Divit",
    lastname: "Patidar"*/

// 3.two arrays are defined and they’re merged into one using the spread operator (…)
var array1 = [10, 20, 30, 40, 50];
var array2 = [60, 70, 80, 90, 100];
var array3 = [...array1, ...array2];
console.log(array3);

/*Output:
[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]*/


//Rest operator(There must be only one rest operator in javascript functions.)
/*The rest parameter has to be the last argument, as its job is to collect all the remaining arguments into an array*/

function fun(a, b, ...c) {
    console.log(`${a} ${b}`); //Mukul Latiyan
    console.log(c);  //[ 'Lionel', 'Messi', 'Barcelona' ]
    console.log(c[0]); //Lionel
    console.log(c.length); //3
    console.log(c.indexOf('Lionel')); //0
}
fun('Mukul', 'Latiyan', 'Lionel', 'Messi', 'Barcelona');
/*we passed the rest parameter as the third parameter, and then we basically called the function fun() with five arguments 
the first two were treated normally and the rest were all collected by the rest parameter  */