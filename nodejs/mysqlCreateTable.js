var mysql  = require('mysql');
var con= mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"nodejs_db"
});

con.connect(function(err){
    con.query("CREATE TABLE posts (name varchar(200))", function(err,res){
        if(err){
        console.log("Create table error",err);
        }
        if(res){
            console.log("Table created");
        }

    })
})