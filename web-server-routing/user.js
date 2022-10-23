exports.user = function(req, res){
    switch (req.url) {
        case "/user/all":
            res.write("This is user/all")
            break;
    
        default:
            res.writeHead(404, {})
            res.write("404: not found")
            break;
    }
}
