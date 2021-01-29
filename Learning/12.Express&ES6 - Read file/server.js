import express from 'express'
import path from 'path';

// 建立 express 這 module
var app = express()
const port = 8888
const __dirname = path.resolve();

// This responds a GET request for the homepage
app.get('/', (req, res) => {
    console.log("Got a GET request for the homepage, from");
    res.sendFile(__dirname + "/Learning/10.Node\&ES6\&React\ -\ Read\ file/hello.html");
})

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})