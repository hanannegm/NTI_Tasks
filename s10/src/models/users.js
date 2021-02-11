const mongoose = require('mongoose')
const bcrybt = require('bcryptjs') 
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        minLength:[5, 'minmum length'],
        maxLength:[25, 'maxmum length']

    },
    lname:{
        type:String,
        minLength:[5, 'minmum length'],
        maxLength:[25, 'maxmum length']

    },
    password:{
        type:String,
        required:true,
        trim:true

    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true

    },
    age:{
        type:Number,
        trim:true

    },
    tokens:[
          { token: { type:String}
        }
        ]
    
})
userSchema.method.toJSON=function(){
    const user = this.toObject()
    delete user.password
    delete user._v
    return user
}
userSchema.method.generateToken= async function(){
    const user = this
     const tokens = jwt.sign({_id:user._id.toString()}, '54234456') 
     user.tokens = user.tokens.concat({token})
     await user.save()
    return token
}
userSchema.pre('save', async function(next){
    const user = this 
    if (user.isModified('password'))
    user.password= await bcrybt.hash(user.password,12)
    next()
})
const User = mongoose.model('User',userSchema)
module.exports=User
