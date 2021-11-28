const {readFile,writeFile} = require('fs')
console.log('start')
readFile('./contents/first.txt','utf-8',(err,result)=> {
    if (err){
        console.log(err)
        return
    }
    else{
        const first = result
        readFile('./contents/second.txt','utf-8',(err,result)=> {
            if (err){
                console.log(err)
                return
            }
            else{
                const second = result
                writeFile('./contents/result-async.txt',
                'Hello the result is \n'+first+'\n'+second+'\n',
                (err,result)=>{
                    if (err){
                        console.log(err)
                        return
                    }
                    else{
                        console.log('done')
                    }
                }
                )
            }
    })
}
})
console.log('starting next task')