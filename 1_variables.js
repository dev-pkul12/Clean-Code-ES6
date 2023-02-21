/* Clean Code Variables */

// How should Name my variables? =>
// DON'T
let d
let elapsed
const ages = arr.map((i) => i.age)

// DO
let daysSinceModification
const agesOfUsers = users.map((user) => user.age)


// make meaningful distinctions and don’t add extra, unnecessary nouns to the variable names, like its type 
// DON'T
let nameString
let theUsers

// DO
let name
let users

// Make your variable names easy to pronounce, because for the human mind it takes less effort to process.

// DON'T
let fName, lName
let cntr

let full = false
if (cart.size > 100) {
    full = true
}

// DO
let firstName, lastName
let counter

const MAX_CART_SIZE = 100
// ...
const isFull = cart.size > MAX_CART_SIZE
