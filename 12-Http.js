const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello, this is hello Aditi Rathore')
    } else if (req.url === '/about') {
        res.end('Hey! This was a good day')
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>It seems you are here for a wrong page</p>
            <a href="/">Back Home</a>
        `)
    }
})

server.listen(5000)