/*Using object literals is fine when you only need to create one object, but if you have to create more than one,
We have to write out the same code for every object we create, and if we want to change some properties of the 
object then we have to remember to update every object.*/

function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
  }//This function creates and returns a new object each time we call it. The object will have two members

//Now we can create as many objects as we like, reusing the definition
const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();
// "Hi! I'm Frankie."

//A better way is to use a constructor. A constructor is just a function called using the new keyword.
/*When you call a constructor, it will:

create a new object
bind this to the new object, so you can refer to this in your constructor code
run the code in the constructor
return the new object.*/
function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
  }
//To call Person() as a constructor, we use new
const salva = new Person("Salva");
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = new Person("Frankie");
frankie.name;
frankie.introduceSelf();
// "Hi! I'm Frankie."

//object.create() method to create objects
/*Objects can also be created using the Object.create() method. This method can be very useful, because it 
allows you to choose the prototype object for the object you want to create, without having to define a constructor function.*/

// Animal properties and method encapsulation
const Animal = {
    type: "Invertebrates", // Default value of properties
    displayType() {
      // Method which will display type of Animal
      console.log(this.type);
    },
  };
  
  // Create new animal type called animal1
  const animal1 = Object.create(Animal);
  animal1.displayType(); // Logs: Invertebrates
  
  // Create new animal type called fish
  const fish = Object.create(Animal);
  fish.type = "Fishes";
  fish.displayType(); // Logs: Fishes

//deleting objects(You can remove a non-inherited property using the delete operator.)
// Creates a new object, myobj, with two properties, a and b.
const myobj = new Object();
myobj.a = 5;
myobj.b = 12;

// Removes the a property, leaving myobj with only the b property.
delete myobj.a;
console.log("a" in myobj); // false