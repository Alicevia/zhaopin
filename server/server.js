let express = require('express')
let bodyParser = require('body-parser')
let cookieParser = require('cookie-parser')
let app = express()
let userRouter = require('./user.js')

let model = require('./model')
let User = model.getModel('user')
let Chat = model.getModel('chat')



let server = require('http').Server(app)
let io = require('socket.io')(server)
io.on('connection',(socket)=>{
    socket.on('sendmsg',(data)=>{
        let {from,to,msg} = data
        let chatid = [from,to].sort().join('_')
        Chat.create({chatid,from,to,content:msg},(e,d)=>{
            io.emit('recvmsg',Object.assign({},d._doc))
            
        })
        console.log(data)

    })
})

app.use(cookieParser())
app.use(bodyParser.json())

app.use('/user',userRouter)

server.listen(3001,()=>{
    console.log('3001 success')
})
// app.listen(3001,()=>{
//     console.log('3001 success')
// })