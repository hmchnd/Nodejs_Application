const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/').all((req,res,next)=>{

res.statusCode=200;
res.setHeader('Content-Type','text/plain');
next();

}).get((req,res,next)=>{
res.end('Will send all the dishes to you . Thankyou!!!');

}).post((req,res,next)=>{
   
    res.end('Data has been recieved' + req.body.name  + 'with details' + req.body.description);

}).put((req,res,next)=>{
   res.statusCode=403;
    res.end('PUT operation not supported');

}).delete((req,res,next)=>{

    res.end('Deleting operation');

});
// app.get('/dishes/:dishId', (req,res,next) => {
//     res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
// });

module.exports = dishRouter;
