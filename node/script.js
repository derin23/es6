const http = require('http');

const server = http.createServer(function(req,res){
    console.log(req);
})

const port = 9090;

server.listen(port, function(){
    console.log("Server running on " + port);
});