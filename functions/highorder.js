/*A higher-order function is a function that takes one or more functions as arguments,
or returns a function as a result. The mainFunction in the examples above is a higher-order function 
because it takes a callback function as an argument. */

//syntax
function higherOrderFunction(callback) {
    // Perform some operations
    // Call the callback function
    callback();
}
function callbackFunction() {
    console.log("Callback function is executed.");
}
// Passing the callback function to the higher-order function
higherOrderFunction(callbackFunction);