const express = require("express")
const app = express()
const port = 5000
const session = require("express-session")
const passport = require("./config/passport")

const authRoutes = require("./routes/auth")
const booksRoutes = require("./routes/heroes")

app.use(express.json())

app.use(session({
  secret: 'MyAwesomeSecret',
  resave: true,
  saveUninitialized: false 
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authRoutes)
app.use('/books', booksRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})