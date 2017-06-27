//First we need to actually import the packages we downloaded
//Using the require keyword

var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http); //IO is going to be how we communicate between clients

//You can think of io as being the server, passing data between two/more clients


//app.get(path, callback)
app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html");
});

//Use express to serve up static files(css, js, other htmls besides index) so that our page can be pretty
app.use(express.static("public"));



//Tell the server where it should run on the host
http.listen(process.env.PORT || cd3000, function(){
	console.log("listening on *:3000");
});
