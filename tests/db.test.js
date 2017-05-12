// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../db')

test('getPodcasts gets all podcasts', function (t) {
  // One for each letter of the alphabet!
  var expected = 8
  return db.getPodcasts(t.context.connection)
    .then(function (result) {
      var actual = result.length
      t.is(expected, actual)
    })
})
//
// test('getUsers gets a single user', function (t) {
//   var expected = 'Ambitious Aardvark'
//   return db.getUser(99901, t.context.connection)
//     .then(function (result) {
//       var actual = result[0].name
//       t.is(expected, actual)
//     })
// })
//
// test('getProfile gets a single user\'s profile', (t) => {
//   var expected = 99903
//   return db.getProfile(99903, t.context.connection)
//     .then((result) => {
//       var actual = result.users_id
//       t.is(expected, actual)
//     })
// })
