const express = require('express')
require('./DB/db')
const app = express()
const userRoutes = require('./routs/user')
app.use(express.json())
app.use(userRoutes)

app.listen(3000)