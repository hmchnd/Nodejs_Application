const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const hostname = 'localhost';
const port = 5000;
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/dishes',dishRouter);



// express static will be use to handle all static html page in this project
app.use(express.static(__dirname+'/public'));

// next parameter in app use for exta middle ware use case

app.use((req,res,next)=>{
res.statusCode=200;
 res.setHeader('Content-Type', 'text/html');
res.end('<html><body><h1>Hello, World!!</h1></body></html>');
});
const server = http.createServer(app);
server.listen(port,hostname);
