//class(Use the keyword class to create a class and always add a method named constructor())
//Syntax
class ClassName {
  constructor() {   }
}

//example
class Car {
    constructor(name, year) {  //The constructor method is called automatically when a new object is created.
      this.name = name;        //this keyword refers to an object,The this keyword refers to different objects depending on how it is used
      this.year = year;
    }
  }
 const myCar1 = new Car("Ford", 2014);// using the Car class to create two Car objects.
 const myCar2 = new Car("Audi", 2019);

 /*Class Getters and Setters(We can use getter and setter methods to get the value of an object and 
 set the value of an object.)*/
 class OOPs {
    constructor(name) {
        this.name = name;
    }
 
    // Getter method
    get langName() {
        return this.name;
    }
 
    // Setter method
    set langName(x) {
        this.name = x;
    }

    //class method
    hello(){
        console.log(`Hello ${this.name}`)
    }
}
 
let obj = new OOPs('JavaScript');
console.log(obj.name); 
 
obj.langName = 'Java';
console.log(obj.name);

Output:
JavaScript
Java

//Class Inheritance(To create a class inheritance, use the extends keyword.
//class created with a class inheritance inherits all the methods from another class)
class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);       //Use the "super" method to call the parent's constructor function.
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
let myCar = new Model("Ford", "Mustang");
myCar.show();  //I have a Ford, it is a Mustang