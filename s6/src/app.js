
const express = require('express')
const hbs = require('hbs')
const PORT=3000
const app = express()
const path = require('path')

const publicDir = path.join(__dirname,'../public')
const viewsDir = path.join(__dirname,'../myviews')
const layouts = path.join(__dirname,'../layouts')



app.set('view engine', 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(layouts)

app.use(express.static(publicDir))


 app.get('',(req,res)=>{
    res.render('first')
 })
 app.get('/a',(req,res)=>res.render('first'))
 app.get('/b',(req,res)=>res.render('seconde'))


 app.listen(3000)
 

 