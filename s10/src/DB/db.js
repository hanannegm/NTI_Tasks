const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/s10',{

    useCreateIndex: true,

    useUnifiedTopology: true,
    
    useNewUrlParser: true,
    
})