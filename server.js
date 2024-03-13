const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello There</h1>');
});
server.listen(5000, hostname, () => {
  console.log(`Server running at 5000`);
});
