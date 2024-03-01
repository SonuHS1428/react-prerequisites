//The shorthand property makes the code size smaller and simpler.

//Shorthand Properties
/*With Shorthand Properties, whenever you have a variable which is the same name as a 
property on an object, when constructing the object, you can omit the property name.*/

function formatMessage (name, id, avatar) {
    return {
      name: name,
      id: id,
      avatar: avatar,
      timestamp: Date.now()
    }
  }

  //can now look like this.
  
  function formatMessage (name, id, avatar) {
    return {
      name,
      id,
      avatar,
      timestamp: Date.now()
    }
  }

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