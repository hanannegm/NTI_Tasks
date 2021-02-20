const express=require('express')
require('./db/db')
const userRoutes = require('./routes/user.routes')
const taskRoutes = require('./routes/task.routes')
const app = express()

app.use(express.json())
app.use(userRoutes)
app.use(taskRoutes)
module.exports = app