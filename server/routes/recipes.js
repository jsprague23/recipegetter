var router = require('express').Router()
var Recipes = require('../models/recipe')

//GET ALL
router.get('/api/recipes/:id', (req, res, next) => {
  Recipes.find({userId: req.params.id})
  .then(recipes => {
    res.send(recipes)
  })
  .catch(err => {
    res.status(400).send(err)
  })
})

//TO DO: GET SPECIFIC RESULTS

// //EDIT
// router.put('/api/recipes/:id', (req,res) => {
//   Recipes.findByIdAndUpdate(req.params.id, req.body, {new:true})
//   .then(recipes => {
//     res.send(recipes)
//   })
//   .catch(err => {
//     res.status(400).send(err)
//   })
//  })

// //CREATE NEW
// router.post('/api/recipes/', (req, res) => {
//   Recipes.create(req.body)
//   .then(newRecipe => {
//     res.send(newRecipe)
//   })
//   .catch(err => {
//     res.status(400).send(err)
//   })
// })

//DELETE
router.delete('/api/recipes/:id', (req, res) => {
  Recipes.findByIdAndRemove(req.params.id)
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