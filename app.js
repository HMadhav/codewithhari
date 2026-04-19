const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
	res.write("Hi there");
	res.end();
})

server.listen(PORT)
console.log("server running on port", PORT);

