exports.product = function(req, res){
    switch (req.url) {
        case "/product/all":
            res.write("This is user/all")
            break;
    
        default:
            res.writeHead(404, {})
            res.write("404: not found")
            break;
    }
}
