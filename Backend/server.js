
const express = require('express');
const {chats} = require('./data/data')
const dotenv = require('dotenv')
const http = require('http')
const {Server} = require('socket.io')
const cors = require('cors')


const app = express();
app.use(cors())
const server = http.createServer(app)
dotenv.config();


// app.get('/',(req,response)=>{
//     response.send('api is running')
// })

// app.get('/api/chat',(req,response)=>{
//    response.send(chats)
// })

// app.get('/api/chat/:id',(req,response)=>{

//     const singleChat = chats.find((c)=>c._id===req.params.id)
//    console.log(req.params.id)
//    response.send(singleChat)
// })



const PORT = process.env.PORT || 3001;
server.listen(3001,console.log(`Hey, I am alive`))


const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"]
    }
})

io.on("connection",(socket)=>{
console.log('socket.id',`${socket.id}`)

socket.on("send_message",(data)=>{  
    console.log('socket12',socket)
   socket.broadcast.emit("receive_message",data)
})
})

//console.log('io',io)






 