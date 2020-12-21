const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
// bring in routes
const postRoutes = require('./routes/post');


// middlewares 
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use('/',postRoutes);


app.listen(port,()=>{

    console.log(`A node is running on port: ${port}`);
});
