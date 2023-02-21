/* Object Clean code tips */

// Object destructuring allows you to take specific fields from an object and assign them to a variable instantly. It reduces the number of code lines we need to extract the object properties and makes your code easier to understand.

//with destucturing
const { name, email, phone } = employee;

/* without destucturing
const name = employee.name;
const email = employee.email;
const phone = employee.phone; */

/* When we create new objects, we should use the object literal syntax instead of the Object constructor. It’s much shorter and does the same thing.*/

// They both create objects that inherit from the Object constructor.

// Using Computed Property Names with Creating Dynamic Property Names 
// Since ES6, we can have dynamic property names in the objects we define. We define computed property keys with brackets around our computed key. 

const getKey = (k) => {
    return `foo ${k}`;
}
const obj = {
    [getKey('bar')]: 1
}

//   Use the Object Method Shorthand
//   Another great ES6 feature is the object method shorthand. It allows us to create a method without using the function keyword. 
const cat = {
    name: 'james',
    greet() {
        return `hi ${this.name}`;
    }
}