let http = require('http')
let user = require('./user.js').user
let product = require('./product.js').product

console.log(user)

function parent(req, res){
    console.log("Parent")
    
    let endpointsArray = req.url.split("/")
    
    switch (endpointsArray[1]) {
        case "user":
            user(req, res)
            break;
        
        case "product":
            product(req, res)
            break;
    
        default:
            res.writeHead(404, {})
            res.write("404: Unknown Endpoint")
            break;
    }

    res.end()
}

let server = http.createServer(parent)

server.listen(8080, "localhost", ()=>{
    console.log("Server Created Successfully")
})

