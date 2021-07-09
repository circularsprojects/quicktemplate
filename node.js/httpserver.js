const http = require('http');

const server = http.createServer((req, res) => {
        // You can use req.url to get the URL of the request, and req.method to get the method of the request.
        // Example file response code (using fs library): fs.createReadStream(__dirname + "/index.html").pipe(res);
        res.setHeader('Content-Type', 'text/html') // or any other content-type
        res.writeHead(200) // or any other response code
        res.end(/* Content goes here */);
});

server.listen(/* Server port */);
