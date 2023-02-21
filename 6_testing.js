/* Debbiging and testing */

// 1. Using console.log() 
// You can use the console.log() method to debug the code. You can pass the value you want to check into the console.log() method and verify if the data is correct. 

let a = 5;
let b = 'asdf';
let c = a + b;

// if you want to see the value of c
console.log(c);

// then do other operations
if(c) {
    // do something
}

/* 2. Using debugger
The debugger keyword stops the execution of the code and calls the debugging function.

The debugger is available in almost all JavaScript engines.

Let's see an example, */

let x = 6;
let y = 9;
let z = a * b;

// stops the execution
debugger;

console.log(z);

/*3. Setting Breakpoints
You can set breakpoints for JavaScript code in the debugger window.

JavaScript will stop executing at each breakpoint and lets you examine the values. Then, you can resume the execution of code.*/