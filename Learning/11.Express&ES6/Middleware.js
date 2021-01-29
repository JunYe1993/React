import express from 'express'

// 建立 express 這 module
var app = express()
const port = 8888
var userName = "Unknown"

function hello(req, res) {
    res.send("Hello " + userName + "\n")
    res.end()
}

// 中間的匿名 function 就是 Middleware
app.get('/hello/:userName.:userPassword', function (req, res, next){
    userName = req.params.userName
    console.log(userName)
    next()
},  hello)

app.listen(8888)