"use strict";
var hana = require("@sap/hana-client");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');


var connOptions = {
    serverNode: "<DBNODE>",
    encrypt: "true",
    sslValidateCertificate: "false",
    uid: "DBADMIN",
    pwd: "PWD",
};



app.use(bodyParser.json());

var dbConnection = hana.createConnection();
app.get('/users', function (req, res) {
    // Get correlation_id from logger bound to request
  dbConnection.connect(connOptions, function (err) {
    if (err) throw err;
    dbConnection.exec(
        "SELECT * FROM DBADMIN.DEMO_HANA WHERE ID BETWEEN ? AND ?",[1,9],
        function (err, result) {
            if (err) throw err;
              res.send(result);
            dbConnection.disconnect();
        }
    );
});
 
});


app.get('/orders', function (req, res) {
    // Get correlation_id from logger bound to request
   console.log(req.query.ORDERID); 
  dbConnection.connect(connOptions, function (err) {
    if (err) throw err;
    dbConnection.exec(
        "SELECT * FROM DBADMIN.ORDERS WHERE ORDERID BETWEEN ? AND ?",[1,7],
        function (err, result) {
            if (err) throw err;
              res.send(result);
            dbConnection.disconnect();
        }
    );
});
 
});





var port = process.env.PORT || 5001;
app.listen(port, function () {
	console.info("Listening on port: " + port);
});
