import express from 'express'

// 建立 express 這 module
var app = express()
const port = 8888

// This responds a GET request for the homepage
app.get('/', (req, res) => {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET!\n')
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST\n');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing\n');
})

// This responds a GET request for ab*cd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match\n');
})

// This responds a GET request for book1, book2 and book3
app.get('/book[123]', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match\n');
})

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})