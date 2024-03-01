/* there are two main ways to create objects: using object literals (normal objects) 
and using constructor functions or ES6 classes (objects within classes concept). */
//the key differences between the two:

//1.Syntax:

//Object Literal:
let person = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
//Object within Class:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let person = new Person("Alice", 30);/*You define the properties and methods inside the class, and then 
use the new keyword to create instances of the class.*/

//2.Constructor Function:

/*Object Literals: Object literals do not have a constructor function.
 You define the properties and methods directly in the object literal.*/

/* Object within Class:have a constructor function that is called when a new instance of the class is created. 
This constructor function is used to initialize the object's properties.a constructor function that is called
when a new instance of the class is created. */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let person = new Person("Alice", 30);

//3.Instance Methods:

//Object Literal:defined as functions within the object literal, directly attached to the object's properties.
let person = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

/*Object within Class://Methods in objects within classes are defined inside the class,
These methods can then be called on instances of the class.*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person = new Person("Alice", 30);
person.greet();//Hello, my name is Alice and I am 30 years old.







