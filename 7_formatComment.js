/* Formatting and Commenting in JavaScript */

// 1. Code tells `how` and comments tells `why` 

/* Do
let p = 3.14; // Rounded value of Pi
let c = 2 * p * 10; // Calculate the circumference of a circle with radius 10
// Don't
let p = 3.14; // Initiate the value of the variable p
let c = 2 * p * 10 // Multiply the value p into 20 */

// 2. Only use the necessary level of details

// Do
/**
 * Retrieve a list users from the database
 */
async function getUsers() {
    // ...
}
// Don't
/**
 * Retrieve a list of user objects asynchronously by invoking a database query
 */
async function getUsers() {
    // ...
}

//3. Avoid Abbreviations

// Do
/**
 * regEx, in other words Regular Expressions
 */
// Don't
/**
 * regEx, viz. Regular Expressions
 */

// 4. Use comments before code

// 5. Pay extra attention to numeric values
// Dealing with numeric values can always be tricky since there are specific ranges and units used. Here, we can use comments to explain the units used and their ranges. Also, If there are any restrictions on input data, we can mention them in our comments.