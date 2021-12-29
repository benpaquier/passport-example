const express = require("express")
const app = express()


// middleware pour verifier que le user est bien connecté
const verifyUser = (req, res, next) => {
  if (!req.user) {
    res.status(401).send("Unauthorized")
  }

  next()
}

module.exports = {
  verifyUser
}
