const fs = require('fs');
const http = require('http');
const port = 8000;
const host = "127.0.0.1"

const data = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(`${data}`);
    }
    else{
        res.writeHead(404, {"Content-Type": "text/plane"});
        res.end("<h1>Page Not Found</h1>")
    }
})

server.listen(port, host, ()=>{
    console.log(`The Server is listening to The ${host}:${port}`);
})