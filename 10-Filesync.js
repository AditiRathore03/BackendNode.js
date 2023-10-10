const { readFileSync , writeFileSync} = require('fs')
console.log('start')

const first = readFileSync('./content/first.txt' , 'utf-8')
const second = readFileSync('./content/second.txt' , 'utf-8')



writeFileSync(
    './content/result-new.txt',
    `Hey! I am the new one here ${first} ,  ${second}`, 
    { flag:'a' }
   
)

console.log('done witht the task')
console.log('starting with the new one')