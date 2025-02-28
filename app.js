const http = require("http");

http.createServer(function(req, res) {
	res.write("We’re under construction 🚧 but don’t worry, no hard hats required. Back soon!");
	res.end();
}
).listen(3000);

console.log("Server started on port 3000");
