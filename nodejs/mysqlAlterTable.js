var mysql = require("mysql");

var con = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"nodejs_db"
});

const addColumns = ()=>{
    con.query("ALTER table users ADD column (dob date, email varchar(200), username varchar(50), password varchar(200), gender char(1), id int(10) )", function(err,res){
            if(err) throw err;
            if(res){
                console.log("Table is updated");
            }
        })
}

const addPrimaryKey = ()=>{
    con.query("ALTER table users ADD primary key (id)", function(err,res){
        if(err) throw err;
        if(res){
            console.log("Table is updated");
        }
    })
}
const modifyColumn = ()=>{
    con.query("ALTER table users MODIFY id INT NOT NULL AUTO_INCREMENT", function(err,res){
        if(err) throw err;
        if(res){
            console.log("Table is updated");
        }
    })
}
con.connect(function(err){
    if (err) throw err;
    addColumns();
    addPrimaryKey();
    modifyColumn();
})