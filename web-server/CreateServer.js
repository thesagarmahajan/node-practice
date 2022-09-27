let http = require('http')

let server = http.createServer((req, res)=>{
    res.write("Hello, World!")
    res.end()
})
server.listen(8808, "localhost", ()=>{
    console.log("Server Created Successfully")
})

