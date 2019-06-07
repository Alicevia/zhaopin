let express = require('express')
let bodyParser = require('body-parser')
let cookieParser = require('cookie-parser')

let userRouter = require('./user.js')

let app = express()
app.use(cookieParser())
app.use(bodyParser.json())

app.use('/user',userRouter)

app.listen(3001,()=>{
    console.log('3001 success')
})