
var express = require("express");
var app = express();
var server = app.listen(1234, function(){
    console.log("Listning on 1234");
});

// app.post("/welcome", function(req, res){
//     console.log("req",req.query.user_id);
//     res.send('hello welcome to Express JS');
// });

var mysql = require("mysql");
const conData = {
    host:"localhost",
    user:"root",
    password:"root",
    database:"nodejs_db"
};
var con = mysql.createConnection(conData);


app.post("/createUser", function(req, res){
    let userData = req.query;

    let insertSQL = `INSERT INTO users (name,dob,phone,email,username,password,gender) VALUES ('${userData.name}','${userData.dob}','${userData.phone}','${userData.email}','${userData.username}','${userData.password}','${userData.gender}')`;
    
    con.query(insertSQL, function(err,data){
        if(err) throw err;
        if(data){
            res.send("user is created.");
        }
    })
});
