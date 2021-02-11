const { MongoClient, ObjectID} = require('mongodb')

console.log(new ObjectID())
const myDBUrl = 'mongodb://127.0.0.1:27017'
const dbName = "myNewG4"
data = [
    {name:'hanan',age:23},
    {name:'mai',age:22},
    {name:'ali',age:34},
    {name:'ahmed',age:30},
]
MongoClient.connect(
    myDBUrl,
    {useNewUrlParser:true, useUnifiedTopology:true},
    (error, client)=>{
        if(error) return console.log('db error')
        
        const db = client.db(dbName)
        /*insert data */

        // db.collection('t2').insertMany(data, (err, result)=>{
        //     if(err) return console.log(err)
        //     //console.log(`data inserted succesfully ${result.insertedCount} inserted`)
        // })
 
        //get data
        //ObjectId("602274e155a52e04a43c7a71")
        db.collection('t2').find(
            {})
            .toArray((err, data)=>{
                console.log(data)})

        //         db.collection('newCollection').findOne(
        //     {_id :new ObjectID('602274e155a52e04a43c7a71')},
        //     (err, data)=>{console.log(data)}
        // )
        // db.collection('newCollection').updateMany(
        //     {
        //         name:'mazen'
        //     },
        //     {
        //         $inc:{
        //             age:1
        //         }
        //     }
        // )

// db.collection('newCollection').updateMany(
//     {age:{$exists:true}},
//     {$inc:{age:1}}
//     )
//     .then((res)=>{console.log(res)})
//     .catch((err)=>console.log(err))



// db.collection('newCollection').deleteMany(
//     {x:{$exists:true}})
//     .then((res)=>{console.log(res)})
//     .catch((err)=>console.log(err))

})