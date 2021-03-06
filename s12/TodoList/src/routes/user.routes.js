const express = require('express')
const User = require('../models/user.model')
const auth = require('../middleware/auth')
const multer = require('multer')
const router = new express.Router()

router.post('/user', async(req, res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        const token = await user.generateToken()
        res.status(200).send({
            error: null,
            apiStatus:true,
            data: {user, token}
        })
    }
    catch(error){
        res.status(400).send({
            error: error.message,
            apiStatus:false,
            data: 'unauthorized user'
        })

    }
})
router.post('/user/login', async(req, res)=>{
    try{
        const user = await User.findUserByCredentials(req.body.email, req.body.password)
        const token = await user.generateToken()
        res.status(200).send({
            error: null,
            apiStatus:true,
            data: {user, token}
        })
    }
    catch(error){
        res.status(400).send({
            error: error.message,
            apiStatus:false,
            data: 'unauthorized user'
        })
    }
})
router.post('/user/logout',auth, async(req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((singleToken)=>{
            return singleToken.token != req.token
        })
        await req.user.save()
        res.status(200).send({
            error: null,
            apiStatus:true,
            data: 'logged out successfully'
        })
    }
    catch(error){
        res.status(400).send({
            error: error.message,
            apiStatus:false,
            data: error.message
        })
    }

})
router.post('/user/logoutAll',auth, async(req,res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.status(200).send({
            error: null,
            apiStatus:true,
            data: 'logged out successfully'
        })
    }
    catch(error){
        res.status(400).send({
            error: error.message,
            apiStatus:false,
            data: error.message
        })
    }

})

router.patch('/user', auth, async(req, res)=>{
    const updates = Objects.keys(req.body)
    const allowed = ['name', 'phone','age']
    const isValid = updates.every(update => allowed.includes(update))
    try{
        if(!isValid) throw new Error('invalid updates')
        updates.forEach( update => req.user[update] = req.body[update] )
        await req.user.save()
        res.send({
            status:1,
            data: req.user,
            message:"user updated"
        })
    }
    catch(e){
        res.send({
            status:0,
            data: e,
            message:"error update user data"
        })
    }
})

module.exports=router