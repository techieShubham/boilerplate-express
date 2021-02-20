var express = require('express');
var app = express();

absolutePath = __dirname + "/views/index.html";
staticPath = __dirname + "/public"

app.use("/public",express.static(staticPath))

app.get("/", 
function(req, res) {
  res.sendFile(absolutePath);
  
}
);

app.get("/json",
function(req,res){
 if(process.env.MESSAGE_STYLE === "uppercase")
 {response = "Hello json".toUpperCase()} 
 else{response = "Hello json" }

 res.json({"message": response});
});

// console.log("Hello World");































 module.exports = app;
