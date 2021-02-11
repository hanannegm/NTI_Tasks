// fs = require('fs')
// try{
//     tasks = JSON.parse(fs.readFileSync('data.json').toString())
// }
// catch(e){
//     tasks=[]
//     fs.writeFileSync('data.json','[]')
// }
// const task = { title: 't1', content: 'c1'}
// tasks.push(task)
// fs.writeFileSync('data.json', JSON.stringify(tasks))

// const fs = require('fs')
// fs.writeFileSync('text.txt','hello')

const myFunModule = require('./mysule')
myFunModule.myFun()


