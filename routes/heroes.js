const express = require("express")
const app = express()
const passport = require("../config/passport")
const { verifyUser } = require("../middlewares/auth")

const heroes = [
  {
    name: "Batman"
  }
]

app.get(`/`, verifyUser, (req, res) => {  
  res.json(heroes)
})

module.exports = app
