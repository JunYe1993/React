import express from 'express'

// 建立 express 這 module
var app = express()
const port = 8888

function reqType (req, res, next){
    console.log('Request Type:', req.method)
    next()
}

function timer (req, res, next){
    var date = new Date()
    console.log('Time:', date.toString())
    if (req.params.userName == "Admin") {
        next('route') // 只能在 app.Method() 使用，在 use() 裡就會只是普通的 next()
    } else {
        next()
    }
}

function logger (req, res, next){
    console.log
    (
        'User Date:', '\n',
        'User:', req.params.userName, '\n',
        'Password:', req.params.userPassword, '\n'
    )
    res.end()
}

function warning(req, res, next) {  
    console.log("Warning: Your village is under attack\n")
    res.end()
}

// app.use() 在 route 之前，所以會先執行 use 裡的 Middleware function
// 之後在依照 Request Method 去找相對的 app.Method() 做 Reuest Handle
app.use('/hello/:userName.:userPassword', reqType)

// 正常來講，若 Request 是 GET 且 URL 符合的話，會依照順序執行 routing function
// 但 timer 裡有 next('route')，符合條件的話會直接把控制權交給下個 routing function，
// 忽略它本身後面的 Middleware function，這裡就是 logger。
app.get('/hello/:userName.:userPassword', timer, logger)
app.get('/hello/:userName.:userPassword', warning)
app.listen(8888)