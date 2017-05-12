var express = require('express')
var router = express.Router()
var db = require('./db')

router.get('/', function(req, res) {
  db.getPodcasts(req.app.get('db'))
  .then((results) => {
    res.render('index.hbs', {results})
  })
  .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })

})


router.get('/add', function(req, res){ //display add form
    res.render('add.hbs')
})

router.post('/add', function(req, res){//perform insert to db
  db.addPodcast(req.body, req.app.get('db'))
  .then((result)=>{
    res.redirect('/')
  })
  .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/delete/:id', function(req, res){
  db.delPodcast(req.params.id, req.app.get('db'))
  .then((result)=>{
    res.redirect('/')
  })
  .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/edit', function(req, res){
  res.render('edit.hbs')
})





module.exports = router
