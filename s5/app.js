const yargs = require('yargs')
yargs.command({
    command: 'addNew',
    describe:'add new user',
    builder:{
        title:{
            demandOption:true,
            descibe:"note title",  
            type:'string'
        },
        content:{
            demandOption:true,
            descibe:"note content",
            type:'string'
        }
    },
    handler: function(argv){
        console.log(`hello  ${argv.title} - ${argv.content}`);
    }
})
yargs.parse()