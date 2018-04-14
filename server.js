const formidable = require("express-formidable");

const fs = require("fs");

const express = require("express");

const app = express();

app.use(express.static("public"));

app.use(formidable());


app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

app.get('/about',  function (req, res)
{
    res.render('about.html');
});



app.post("/create-post", function(req, res) {
    console.log(req.fields);
    fs.readFile(__dirname + "/data/posts.json", function(error, file) {
         parsedFile = JSON.parse(file);
         parsedFile[new Date().getTime()] = req.fields.blogpost;
        console.log(parsedFile);
        fs.writeFile(__dirname + "/data/posts.json",JSON.stringify(parsedFile), function(error) {

        });
    });

});


fs.writeFile(__dirname + "/data/text.json","tttt", function(error) {

    // do something
  });
  


app.listen(3000, function() {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});

