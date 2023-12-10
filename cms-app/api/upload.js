const express = require('express');
const multer = require('multer');
var path = require('path');
const app = express();

// Set up storage for multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads') // The folder where files will be saved
    },
    filename: function(req, file, cb) {
        console.log("file",file);
        cb(null, file.originalname) // Naming the file
    }
});

const upload = multer({ storage: storage });

// POST API to upload a file with title and description
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

// Start the server
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
