/* Clean code class */


class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        alert(this.name);
    }

}

// Usage:
let user = new User("John");
user.sayHi();

class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
}

// proof: User is a function
alert(typeof User); // function

// First Apporoach 
class Dog {

    constructor(name) {
         this._name = name;
    }

    bark() {
         console.log(`hello ${this._name}`);
    }

}

// Second apporoach 
class Dog {

    constructor(name) {
         this._name = name;
    }

}

Dog.prototype.bark = function bark() {
     console.log(`hello ${this._name}`);
}