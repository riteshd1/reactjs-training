let express = require("express");
var cors = require('cors');
var path = require('path');
const multer = require('multer');
var fs = require('fs');

let app = express();
// app.use(express.json());
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

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './uploads') // The folder where files will be saved
  },
  filename: function(req, file, cb) {
      cb(null, file.originalname) // Naming the file
  }
});
const upload = multer({ storage: storage });

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

// app.post("/edit-blog", upload.single('file'), function (request, response) {
//   let result = request?.body?editBlog(request.body):false;

//   if(result){
//     response.send("Blog saved successfully");
//   }else{
//     response.send("Something went wrong!"+request.body);
//   }  
// });
app.post('/edit-blog', upload.single('file'), function(req, res) {
  try {
      const title = req.body.title; // Accessing the title from the request body
      const description = req.body.description; // Accessing the description from the request body
      let request = { 
          message: 'File uploaded successfully!', 
          file: req.file,
          title: title,
          description: description 
      };
      console.log("request",request);
      // You can now use the title and description along with the file
      res.send(request);
  } catch (error) {
      res.status(500).send({ message: 'Error during file upload', error: error });
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
