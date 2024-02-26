/*An object is a collection of related data and/or functionality. 
These usually consist of several variables and functions*/
const person = {
    name: ["Bob", "Smith"], // data item, and is referred to as the object's property.
    age: 32,
    bio: function () {  // are referred to as the object's method, functions that allow the object to do something with that data
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."

//Accessing object properties and methods( getting object members)

//1.dot notation
person.age;
person.bio();
//object as object properties,An object property can itself be an object. For example,
const person = {
    name: ["Bob", "Smith"],
  };
//try changing the name member 
const person= {
    name: {
      first: "Bob",
      last: "Smith",
    },
};
//for accessing first & last name
person.name.first;
person.name.last;

//2.Bracket notation(provides an alternative way to access object properties)
person["age"];
person["name"]["first"];/*This looks very similar to how you access the items in an array,instead of using an
index number to select an item, you are using the name associated with each member's value.*/

//setting object members
person.age = 45;
person["name"]["last"] = "Cratchit";

/*Setting members doesn't just stop at updating the values of existing properties and methods; 
you can also create completely new members.*/
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};

/*using this for object reference(JavaScript has a special keyword, this,
 that you can use within a method to refer to the current object.)*/
 
 const Manager = {
    name: "Karina",
    age: 27,
    job: "Software Engineer",
  };
  const Intern = {
    name: "Tyrone",
    age: 21,
    job: "Software Engineer Intern",
  };
  
  function sayHi() {
    console.log(`Hello, my name is ${this.name}`);
  }
  
  // add sayHi function to both objects
  Manager.sayHi = sayHi;
  Intern.sayHi = sayHi;
  
  Manager.sayHi(); // Hello, my name is Karina
  Intern.sayHi(); // Hello, my name is Tyrone
