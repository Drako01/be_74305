const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/algo' && req.method === 'GET'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("Hola, desde el Servidor puro de NodeJS");
    }else{
        res.writeHead(404, {'content-type': 'text/plain'});
        res.end("404 Not Found.!")
    }
});

server.listen(3000, () =>{
    console.log('Servidor escuchando en http://localhost:3000');
})