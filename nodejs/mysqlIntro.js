// var http = require('http');
var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root"
});

con.connect(function(err){
    if(err) throw err;

    con.query("CREATE DATABASE nodejs_db", function(err,data){
        if(err) throw err;
        console.log("Database created: "+data);
    });
    
});

