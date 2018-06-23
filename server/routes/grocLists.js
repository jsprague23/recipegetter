var router = require('express').Router()
var GrocLists = require('../models/grocList')

//GET ALL
router.get('/api/grocLists/:id', (req, res, next) => {
  GrocLists.find({userId: req.params.id})
  .then(grocLists => {
    res.send(grocLists)
  })
  .catch(err => {
    res.status(400).send(err)
  })
})

//GET  SPECIFIC RESULTS
router.get('/api/grocLists/:id/list', (req, res, next) => {
  GrocLists.findById(req.params.id)
  .then(grocLists => {
    res.send(grocLists)
  })
  .catch(err => {
    res.status(400).send(err)
  })
})

//EDIT
router.put('/api/grocLists/:id', (req,res) => {
  GrocLists.findById(req.params.id)
  .then(grocLists => {
    grocLists.items.push(req.body.originalString)
    grocLists.save().then(() =>{
      res.send(grocLists)
    })
  })
  .catch(err => {
    res.status(400).send(err)
  })
 })

// CREATE NEW
router.post('/api/grocLists/', (req, res) => {
  GrocLists.create(req.body)
  .then(newGrocList => {
    res.send(newGrocList)
  })
  .catch(err => {
    res.status(400).send(err)
  })
})

//DELETE
router.delete('/api/grocLists/:id', (req, res) => {
  GrocLists.findByIdAndRemove(req.params.id)
  .then(() => {
    res.send("Deleted!")
  })
  .catch(err => {
    res.status(400).send(err)
  })
  
})

module.exports = {
  router
}