var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    // let fileContent ="";
    let fileContent = fs.readFileSync("mynotes.html", function (err, data) {
      return data;
    });
    fileContent = fileContent + "this is new data in the file.";
    
    fs.writeFile("mynotes.html", fileContent, function (err) {
      if (err) {
        console.log("err", err);
      }
    });

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(fileContent);
    res.end();
  })
  .listen(1234);
