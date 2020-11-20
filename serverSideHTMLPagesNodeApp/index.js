const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = "localhost";
const port=5000;
const server = http.createServer((req,res)=>{
console.log(req.url);
res.statusCode = 200;
res.setHeader('Content-Type','text/html');
var fileUrl;
//res.end('<html><body><h1>Hello, World!!</h1></body></html>');
if(req.url=='/'){
fileUrl ='/index.html';

}else if(req.url=='/about'){

fileUrl ='/aboutus.html';
}



var filePath = path.resolve('./public'+fileUrl);
const fileExt = path.extname(filePath);
if(fileExt=='.html'){
    fs.exists(filePath,(exists)=>{

        if(!exists){
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>No file found</h1></body></html>');
            return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(filePath).pipe(res);


    });
}


});

server.listen(port,hostname,()=>{

console.log(`Server running at http://${hostname}:${port}`);
});
