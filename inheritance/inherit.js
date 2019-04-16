// function Surrogate() {};

// Function.prototype.inherits = function(parent) {
//     Surrogate.prototype = parent.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this 
// }

Function.prototype.inherits = function(parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
}



function MovingObject() {
    
 }

MovingObject.prototype.move = function() {
    console.log("I am moving!");
}

function Ship() { }
// Ship.inherits(MovingObject);

function Asteroid() { }
// Asteroid.inherits(MovingObject);

