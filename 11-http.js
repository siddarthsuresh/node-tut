const http = require('http')

const server = http.createServer((req,res) => {
// console.log(req)
if (req.url == '/'){
    res.end('Welcome to our home page')
}
else if (req.url == '/about'){
    res.end('Here is out short history')
}
else {
    res.end('<h1>Oops!</h1>'+ 
'<p>we are nor able to find the page you are looking for</p>'+
'<a href ="/">back home</a>')
}
})
server.listen(5000)