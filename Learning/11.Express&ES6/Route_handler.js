import express from 'express'

// 建立 express 這 module
var app = express()
const port = 8888

// 可以塞複數個 callback, 只要確保你有傳和呼叫 next()
app.get('/normal', function (req, res, next) {
    console.log('Hello from the first callback function!')
    next()
}, function (req, res) {
    console.log('Hello from the second callback function!')
    res.send("Hi, this is the second callback function!\n")
    res.end()
})

// array 版
function callbackA(req, res, next) {
    console.log('Hello from callbackA function!')
    res.send("Hi, this is callbackA!\n")
    next()
}
function callbackB(req, res, next) {
    console.log('Hello from callbackB function!')
    res.send("Hi, this is callbackB!\n")
    next()
}
function callbackC(req, res, next) {
    console.log('Hello from callbackC function!')
    res.send("Hi, this is callbackC!\n")
    res.end()
}

app.get('/array', [callbackA, callbackB, callbackC])



var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })