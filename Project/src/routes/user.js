const express = require('express')

const User = require('../models/user')

const jwt = require('jsonwebtoken')


const router = new express.Router()

router.post('/Register', async(req, res) => {
    const user = new User(req.body)
    try{
       
        await user.save()
        const token = await user.generateToken()
        res.status(200).send({
            status:1,
            data: user,
            msg: 'Your Account Has Benn Created!',
            token : token
        })
    }
    catch(e){
        res.status(500).send({
            status:0,
            data:e,
            msg:'error inserting data',
            token:""
        })
    }
})

router.post('/Login', async(req,res)=>{
    try{
        const role = req.body.role
        if(!role) {throw new Error('add user role')}
        const user = await User.findByCredentials(req.body.email, req.body.password, req.body.role)
        const token = await user.generateToken()
        res.send({
            status: 1,
            data: {user, token, token_type:'Bearer '},
            message: " user logged in"
        })
    }
    catch(e){
        res.status(200).send({
            status: 0,
            data: e,
            message: "Error occurs while log in"
        })
    }
})
module.exports=router
