// Class: Blueprint for creating objects. It defines properties and methods.
// ==========================================================================

// Example of a class
class Car {
    // The class is a blueprint for creating car objects
}

// Object: An instance created from a class. It represents a real entity.
// ==========================================================================
// Example: Building a Car from a Blueprint
// Class: The car’s blueprint defines its properties (like color, model) 
//        and actions (like drive, honk).
// Object: When you actually build a car from the blueprint, you get a real car you can use.
// It’s like hiring a factory to take the blueprint and build a car for you.


// Constructor: The setup process that runs when you create an object from a class.
// ==========================================================================
// It helps you set up the initial properties of the object, 
// giving the starting information.

class Car {
    constructor(color, model) {
        this.color = color;  // Store the car's color
        this.model = model;  // Store the car's model
    }
}

// Method: An action or behavior that an object can perform.
// ==========================================================================
// It’s a function inside a class.

// Methods example
class Room {
    ac() {
        console.log("I need blue star AC");
    }

    table() {
        console.log("I need iron table");
    }

    color() {
        console.log("I need the wall colored yellow");
    }
}

// Creating an object from the Room class
const hi = new Room();
hi.ac();
hi.table();
hi.color();


