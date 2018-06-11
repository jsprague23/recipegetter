var router = require('express').Router()
var Recipe = require('../models/recipe')


//GET ALL
router.get('/api/recipes/:id', (req, res, next) => {
  Recipe.find({userId: req.params.id})
  .then(recipes => {
    res.send(recipes)
  })
  .catch(err => {
    res.status(400).send(err)
  })
})



//FAVORITE 
  //create data as recipie =>returned object will have _id
  //get user by session
  //add returned recipie _id to found users' favorites array

  router.put('/api/recipes/:id',   (req,res)=>{
    Recipe.find({_id: req.params.id})
    .then(function (recipe) {
      recipe.push(req.body)
      // favorites.save()
      res.send(recipe)
    })
    .catch(err=>{
      res.status(400).send(err)
    })
  })



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

// CREATE NEW
router.post('/api/recipes/', (req, res) => {
  Recipe.create(req.body)
  .then(newRecipe => {
    res.send(newRecipe)
  })
  .catch(err => {
    res.status(400).send(err)
  })
})

//DELETE
router.delete('/api/Favorites/:id', (req, res) => {
  Recipe.findByIdAndRemove(req.params.id)
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