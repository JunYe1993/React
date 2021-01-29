import express from 'express'

// 建立 express 這 module
var app = express()
const port = 8888

// 回傳 { "userId": xxx, "bookId": xxx }
app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})

// 可以用 "-" 分割，回傳 { "userId": xxx, "authorId": xxx, "bookId": xxx }
app.get('/users/:userId-:authorId-:bookId', function (req, res) {
    res.send(req.params)
})

// 可以用 "." 分割，回傳 { "userId": xxx, "authorId": xxx, "bookId": xxx }
app.get('/users/:userId.:authorId.:bookId', function (req, res) {
    res.send(req.params)
})

app.get('/users', function (req, res) {
    res.send("/users\n")
})

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})