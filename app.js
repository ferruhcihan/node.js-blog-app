const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello NodeJS!");
});

server.listen(port, () => {
  console.log(`Server started on http://${hostname}:${port}/`);
});
