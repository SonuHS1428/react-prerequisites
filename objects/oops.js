//lets take example where we have a program that manages employees in a company,We'll create two versions

/*In JavaScript, the concept of classes was introduced in ES6 (ECMAScript 2015). However, prior to ES6, JavaScript used 
constructor functions to create objects and achieve object-oriented programming (OOP) concepts like inheritance.*/

//1.Using Classes and Objects:
class Employee {
    constructor(name, id, department) {
        this.name = name;
        this.id = id;
        this.department = department;
    }

    getDetails() {
        return `${this.name} (ID: ${this.id}) works in ${this.department} department.`;
    }
}

let employee1 = new Employee("Alice", 101, "Engineering");
let employee2 = new Employee("Bob", 102, "Marketing");

console.log(employee1.getDetails());
console.log(employee2.getDetails());
/*In the first example, we use a class Employee to create objects representing employees. 
Each employee object has properties (name, id, department) and a method (getDetails) to retrieve information about the employee.*/

//2.Without Using Classes and Objects:
function createEmployee(name, id, department) {
    return {
        name: name,
        id: id,
        department: department,
        getDetails: function() {
            return `${this.name} (ID: ${this.id}) works in ${this.department} department.`;
        }
    };
}

let employee1 = createEmployee("Alice", 101, "Engineering");
let employee2 = createEmployee("Bob", 102, "Marketing");

console.log(employee1.getDetails());
console.log(employee2.getDetails());
/*In the second example, we use a factory function createEmployee to create employee objects. 
Each employee object is created as a plain JavaScript object with properties and a method similar to the class-based approach.*/

/*Both approaches achieve the same result, but the class-based approach is more structured, readable, and easier to
 understand, especially as the program grows larger and more complex. It also provides 
 better encapsulation and code reusability through inheritance. */

//why OOPS?

/*Objects:objects are collections of key-value pairs where keys are strings (or symbols) and values can be any 
data type,including other objects, functions, or primitive values like numbers and strings.*/

/*Classes (ES6):ES6 introduced the class keyword to create classes in JavaScript,
Classes act as blueprints for creating objects with shared properties and methods.*/

//OOP offers several advantages

/*Code reusability: OOP allows you to create classes and objects that can be reused
in different parts of your program.*/

/*Modularity: OOP promotes the concept of modular programming, where you can break down your code 
into smaller, manageable modules (classes).*/

/*Encapsulation: OOP provides encapsulation, which helps in hiding the internal state of an object
 and only exposing a controlled interface.*/

/*Inheritance: OOP supports inheritance, which allows you to create new classes based on existing classes,
 inheriting their properties and methods.*/

//Inheritance of Classes
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog("Buddy");
dog.speak(); // Output: Buddy barks.

//Inheritance of Objects (Prototype-based Inheritance):
//Each object in JavaScript has an internal property called [[Prototype]], which points to another object.
/*When you access a property or method on an object, JavaScript first checks if that property or method 
exists on the object itself. If it doesn't find it, JavaScript then looks at the object's prototype
(the [[Prototype]] object) and checks if the property or method exists there. */
/*If it still doesn't find it, JavaScript continues up the prototype chain until it either finds 
the property or method or reaches the end of the chain (Object.prototype). */

// Parent object
let animal = {
    walk() {
        console.log("The animal is walking.");
    }
};

// Child object
let dog = Object.create(animal);
dog.bark = function() {
    console.log("The dog is barking.");
};

// Grandchild object
let puppy = Object.create(dog);
puppy.wagTail = function() {
    console.log("The puppy is wagging its tail.");
};

// Using the prototype chain
puppy.walk();    // Output: The animal is walking.
puppy.bark();    // Output: The dog is barking.
puppy.wagTail(); // Output: The puppy is wagging its tail.

/*In this example, animal is the parent object, dog is the child object inheriting from animal, and puppy is 
the grandchild object inheriting from dog. The walk, bark, and wagTail methods are defined at different 
levels of the prototype chain */
//Every object in JavaScript has a prototype object, which serves as the basis for inheritance.
//Objects can inherit properties and methods from their prototype and the prototype chain.

