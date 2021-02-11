const express = require('express')
require('./DB/mongoose')
const productRoutes = require('./routs/products')

const app = express()

app.use(express.json())
app.use(productRoutes)
app.listen(3000)