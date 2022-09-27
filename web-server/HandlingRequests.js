let http = require('http')

let server = http.createServer((req, res)=>{
    console.log(req.url)
    switch(req.url){
        case "/":
            res.write("Welcome to home page")
            break;
        case "/about":
            res.write("Welcome to about page")
            break;
        case "/contact":
            res.write("Welcome to contact page")
            break;
        case "/sample-json":
            res.write(JSON.stringify({"samplekey":"samplevalue"}))
            break;
        default:
            res.write("404 : Page Not Found")
            break;
    }
    res.end()
})
server.listen(8808, "localhost", ()=>{
    console.log("Server Created Successfully")
})

