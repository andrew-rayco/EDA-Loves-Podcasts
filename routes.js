var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
  db.getPodcasts(req.app.get('knex'})
  .then((results) => {
    res.render('index.hbs', {results})
  })
  .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})








module.exports = router
