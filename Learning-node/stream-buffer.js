
const http = require('http');
const fs = require('fs');

// creating a server using raw node.js 
const server = http.createServer();

// listener 
server.on('request', (req, res) => {
    if (req.url === '/read-file' && req.method === 'GET') {

        const readableStream = fs.createReadStream('./texts/read.txt');

        readableStream.on('data', (buffer) => {
            res.write(buffer);
            res.statusCode = 200;
        })

        readableStream.on('end', () => {
            res.end('The Streaming is over');
            res.statusCode = 200;
        })

        readableStream.on('error', (error) => {
            console.log(error);
            res.end('Something went wrong');
            res.statusCode = 500;
        })
    }
});



server.listen(5000, () => {
    console.log('Server is listening on port 5000');
})