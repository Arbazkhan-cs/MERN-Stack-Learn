const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.end("<h1>Home Page</h1>")
    }
    else if(req.url == "/about"){
        res.end("<h1>About Us</h1>");
    }
    else if(req.url == "/contact"){
        res.end(`<h1>Contact Us: 9953xxxxxx</h1>`);
    }
    else{
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end(`<h1>Page Not Found</h1>`);
    }
})

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Listening to the port 8000");
});