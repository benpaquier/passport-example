const express = require("express")
const app = express()
const passport = require("../config/passport")

app.post(`/login`, passport.authenticate('local'), (req, res) => {
  if (req.user) {
    req.logIn(req.user, (err) => {
      if (err) throw err
      res.status(200).json(req.user)
    })
  }
})

module.exports = app
