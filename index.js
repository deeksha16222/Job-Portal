const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/message-post'){
        res.write('<html>');
        res.write('<body><form action="/deeksha" method="POST"> <input type="email" name="message" ><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end("Your Request Submitted");
    }
    if (url === '/deeksha' &&  method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFileSync('deeksha.txt', message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/message-post');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> Hello NodeJS App</title></head>');
    res.write('<body><h1>Hello NodeJS App</h1></body>');
    res.write('</html>');
    res.end();
   });
 server.listen(8000);