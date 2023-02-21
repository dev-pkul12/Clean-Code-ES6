// How should I write my functions? =>

// DON'T
function getUserRouteHandler(req, res) {
    const { userId } = req.params
    // inline SQL query
    knex('user')
        .where({ id: userId })
        .first()
        .then((user) => res.json(user))
}

// DO
// User model (eg. models/user.js)
const tableName = 'user'
const User = {
    getOne(userId) {
        return knex(tableName)
            .where({ id: userId })
            .first()
    }
}

// route handler (eg. server/routes/user/get.js)
function getUserRouteHandler(req, res) {
    const { userId } = req.params
    User.getOne(userId)
        .then((user) => res.json(user))
}

//   A function name should be a verb or a verb phrase, and it needs to communicate its intent, as well as the order and intent of the arguments. 

// DON'T
/**
 * Invite a new user with its email address
 * @param {String} user email address
 */
function inv (user) { /* implementation */ }

// DO
function inviteUser (emailAddress) { /* implementation */ }  

// Use a single object parameter and destructuring assignment instead. It also makes handling optional parameters much easier.Use a single object parameter and destructuring assignment instead. It also makes handling optional parameters much easier. 

// DON'T
function getRegisteredUsers (fields, include, fromDate, toDate) { /* implementation */ }
getRegisteredUsers(['firstName', 'lastName', 'email'], ['invitedUsers'], '2016-09-26', '2016-12-13')

// DO
function getRegisteredUsers ({ fields, include, fromDate, toDate }) { /* implementation */ }
getRegisteredUsers({
  fields: ['firstName', 'lastName', 'email'],
  include: ['invitedUsers'],
  fromDate: '2016-09-26',
  toDate: '2016-12-13'
})