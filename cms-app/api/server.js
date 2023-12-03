let express = require("express");
var cors = require('cors');
let app = express();
app.use(express.json());
app.use(cors());

app.listen(1234, function () {
  console.log("Connected on 1234");
});


let mysql = require("mysql");
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "cms-app",
});

const editBlog = async (data) => {
  let insertSQL = `INSERT INTO blogs (title,description,image, created_by) VALUES ('${data.title}','${data.description}','${data.image}','test')`;
  await con.query(insertSQL, function(err, data){
    if(err) throw err;
    if(data){
        return true;
    }
  });
  return false;
};

app.post("/edit-blog", function (request, response) {
  console.log(request.body);

  let result = editBlog(request.body);
  if(result){
    response.send("Blog saved successfully");
  }else{
    response.send("Something went wrong!"+request.body);
  }  
});


const getBlogs = async ()=>{
    let blogsData = [];
    let sql = "SELECT * FROM blogs";
     await con.query(sql,function(err,data){
        if(err) throw err;
        // console.log("data",JSON.parse(JSON.stringify(data)));
        if(data){
            blogsData =  JSON.parse(JSON.stringify(data));
        }
    });
    console.log("blogsData",blogsData);
    return blogsData;
}
app.get("/list-blogs", function (request, response) {
    
    let sql = "SELECT * FROM blogs";
     con.query(sql,function(err,data){
        if(err) throw err;
        // console.log("data",JSON.parse(JSON.stringify(data)));
        if(data){
            response.json(JSON.parse(JSON.stringify(data)));
        }
    }); 
  });
