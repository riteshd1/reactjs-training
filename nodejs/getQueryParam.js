var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    let data = url.parse(req.url,true).query;
    console.log("data",data);
    res.end("hello");
}).listen(1234);