//const mongoose = require('mongodb')
const mongoose  = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/News9',{
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const Doctor = new mongoose.model('Doctor',{
    name:{
        type: String
    },
  
    age:{
        type: Number,
        validate(value){
            if(value<25) throw new Error('invalid')
        }
    },
   
    spesialize:{
        type: String
    },
    phone:{
        type: Number,
        minLength : 10
    }

})
const patient = mongoose.model('patient', {


name:{
    type: String
},
age:{
    type: Number,
  
},

history:[
    {
        visitDate:{
            type : Date
            },
        description:{
            type: String
        }
    }
]


})

const data = new Doctor(
    {
        name:'hanan',
        age:28, 
        spesialize:'Surgery',
        phone:2314567809
    })
   
    data.save()
.then(data=>console.log(data))
.catch((err)=>console.log(err))

const p = new patient(
    {
        name:'ali',
        age:'15', 
      
        history:[
            {visitDate:10/2/2021, description:'kjjdkd'},
            {visitDate:10/2/2021, description:'kjjdkd'},
            {visitDate:10/2/2021, description:'kjjdkd'},
        ]
    })
    p.save()
    .then(p=>console.log(p))
    .catch((err)=>console.log(err))