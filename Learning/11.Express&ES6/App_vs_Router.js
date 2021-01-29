import express from 'express'

var app = express()
var router = express.Router() 
const port = 8888

// Some router level function
function logger (req, res, next) {
    console.log('Request URL:', req.url)
    console.log('Request Type:', req.method)
    next()
}
function welcome (req, res) {
    res.send("Welcome to the localhost!\n")
}
function hello (req, res, next) {
    res.send("Hello " + req.params.userName + "\n")
    next()
}

router.use(logger)
router.get('/', welcome)
router.get('/user/:userName', hello)

// load router，就可獲得兩個 page ( '/' 跟 '/user/:userName' )
// 這裡要注意的是要掛載 router 的 app 要用 app.use() 而不能是 app.Method()
// 若用 app.Method()，'/user/:userName' 就會被 app.Method() 濾掉
// 只剩一個 page
app.use('/', router)
app.listen(port)