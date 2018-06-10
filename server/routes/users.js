var router = require('express').Router()
var Users = require('../models/user')
var Recipies = require('../models/recipe')


router.post("/favorites", (req, res, next) => {
  Users.findById(req.session.uid)
    .then(user => {
      if (!user) { return res.status(401).send({ error: 'Please login to continue' }) }
      Recipies.findOne({ spoonId: req.body.spoonId }).then(r => {
        if (!r) {
          req.body.ingredients = req.body.ingredients.map(i => i.originalString ? i.originalString : i.original)
          Recipies.create(req.body).then(r => {
            user.favorites.addToSet(r)
            user.save().then(() => {
              res.send({ message: "Success" })
            })
          })
        } else {
          user.favorites.addToSet(r)
          user.save().then(() => {
            res.send({ message: "Success" })
          })
        }
      })
    })
})

router.get("/favorites", (req, res, next) => {
  Users.findById(req.session.uid).populate("favorites").exec((err, user) => {
    res.send(user)
  })
})




module.exports = {
  router
}