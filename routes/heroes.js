const express = require("express")
const app = express()
const passport = require("../config/passport")

app.get(`/heroes`, (req, res) => {
  if (!req.user) {
    res.status(401).send('Unauthorized')
  }
  
  res.status(200)
})

module.exports = app
