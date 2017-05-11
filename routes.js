var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
  db.getPodcasts(req.app.get('knex')
  .then((results) => {
    res.render('index.hbs', {results})
  })
  .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})



// router.get('/add', function(req, res) {
//   db.addPostcast(req.app.get('knex')
//   .then
//   )
// })




module.exports = router
