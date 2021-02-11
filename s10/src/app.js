const express = require('express')
require('./DB/db')

const userRoutes= require('./routs/user')
const app = express()

app.use(express.json())
app.use(userRoutes)
app.listen(3000)