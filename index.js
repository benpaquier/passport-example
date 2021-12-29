const express = require("express")
const app = express()
const port = 5000
const session = require("express-session")
const passport = require("./config/passport")

const authRoutes = require("./routes/auth")
const heroesRoutes = require("./routes/heroes")

app.use(express.json())

// initialisation de la session
app.use(session({
  secret: 'MyAwesomeSecret',
  resave: true,
  saveUninitialized: false 
}))

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authRoutes)
app.use('/heroes', heroesRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})