var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    fs.readFile('mynotes.txt', function(err,data){
        res.writeHead(200,{'Content-Type': 'text/html'});
        console.log("err",err);
        res.write(data);
       return res.end();
    })
    
}).listen(1234);