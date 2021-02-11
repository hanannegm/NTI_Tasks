const express= require('express')
const router= new express.Router()
const User =require('../models/users')

router.post('./register',async(req,res)=>{
    user = new User(req.body)
    try{
        await user.save()
        const token = await user.generateToken()
        res.send({
            status:1,
            message:'added',
            data:{user,token}
        })
    }
    catch(e){
        res.send({
            status:0,
            message:e.message,
            data:''
        })
    }
})
module.exports=router