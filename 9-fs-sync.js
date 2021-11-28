const {readFileSync,writeFileSync} = require('fs')
// const path = require('path/posix')
console.log('start')
const first = readFileSync('./contents/first.txt','utf-8')
console.log(first)

const second = readFileSync('./contents/second.txt','utf-8')
console.log(second)

writeFileSync(
    './contents/result.txt',
    'Hello the result is \n'+first+'\n'+second+'\n',
    {flag:'a'},
    'utf-8'
    )
console.log('done with this task')
console.log('starting the next one')
