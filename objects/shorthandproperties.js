//The shorthand property makes the code size smaller and simpler.

//This example displaying the details of the object without using shorthand Syntax for object property value.

// Object property shorthand 
const name = 'Raj'
const age = 20 
const location = 'India'
  
// User without ES6  
// shorthand property  
const user = { 
    name: name,       
    age: age, 
    location: location 
} 
  
console.log(user) //{name:'Raj',age:20,location:'India'}

//This example displaying the details of object using shorthand Syntax for object property value in ES6.
 
// Object property shorthand 
const name = 'Raj'
const age = 20 
const location = 'India'
  
// User with ES6 shorthand 
// property  
const user = { 
    name,       
    age, 
    location 
} 
  
console.log(user)  //{name:'Raj',age:20,location:'India'}
/*With Shorthand Properties, whenever you have a variable which is the same name as a 
property on an object, when constructing the object, you can omit the property name.*/
























//Shorthand Method Names 
/*what if one of those properties was a function?  you can omit the function keyword completely.*/

function formatMessage (name, id, avatar) {
    return {
      name,
      id,
      avatar,
      timestamp: Date.now(),
      save: function () {
        // save message
      }
    }
  }
  
//can now look like this
  
  function formatMessage (name, id, avatar) {
    return {
      name,
      id,
      avatar,
      timestamp: Date.now(),
      save () {
        //save message
      }
    }
  }
