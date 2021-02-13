const express = require('express')
require('./DB/db')
const app = express()
const userRoutes = require('./routs/user')
port = process.env.PORT || 3000
app.use(express.json())
app.use(userRoutes)
app.listen(port)