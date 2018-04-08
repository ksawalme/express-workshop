const fs = require("fs");

const express = require("express");

const app = express();
const formidable = require("express-formidable");

app.use(express.static("public"));



app.post("/create-post", function(req, res) {
    console.log(req.fields);

});

app.use(formidable());


fs.readFile(__dirname + "/data/posts.json", function(error, file) {
    console.log(file.toString());
});



app.listen(3000, function() {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});

