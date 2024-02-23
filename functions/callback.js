/*A callback is a function that is passed as an argument to another function, 
and is called after the main function has finished its execution.Callbacks allow you 
to continue executing code while the operation is being executed in the background.*/

//example
function mainFunction(callback) {
    console.log("Performing operation...");
    // Use setTimeout to simulate an asynchronous operation
    setTimeout(function() {
      callback("Operation complete");
    }, 1000);
}
   
  // Define the callback function
  function callbackFunction(result) {
    console.log("Result: " + result);
}
   
// Call the main function with the callback function
mainFunction(callbackFunction);

/*Output
  Performing operation...
  Result: Operation complete*/

