const express = require('express')
require('./db/db')
const app = express()
const userRoutes = require('./routes/user')
const bookRoutes = require('./routes/book')

app.use(express.json())
app.use(userRoutes)
app.use(bookRoutes)

app.listen(3000)