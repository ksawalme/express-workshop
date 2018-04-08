
const express = require("express");

const app = express();

app.post("/create-post", function(req, res) {
    console.log("I am /create-post endpoint");
  });
  

  app.get("/hello-world", function(req, res) {
  res.send("Hello there!");
});


app.use(express.static("public"));

app.listen(3000, function() {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});

