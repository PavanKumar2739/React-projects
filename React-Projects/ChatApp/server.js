//const {validateToken} = require('./server/controller/validator');
//const initializeSocket = require("./server/controller/socketConn");

const express = require('express');
const Server = require('socket.io').Server;
const {connection} = require('./server/controler/db');
const mongose = require('mongoose');
const Chat = require('./server/controler/chats')
const app = express();

const http = require('http');
const cors = require('cors');
const { disconnect } = require('process');
const { timeStamp } = require('console');

const server = http.createServer(app);
connection();
require('dotenv').config();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors());

const io = new Server(server,{
    cors:{
        origin: "*" //"*" - all can access it or we can give our own
    }
});

io.on('connection',(socket)=>{
    console.log("connected");
    // socket.on("chat",chat=>{
    //     io.emit("chat",chat);
    // });
    const loadMessages= async()=>{
        try{
            const messages = await Chat.find().sort({timeStamp:1 }).exec();
            socket.emit('chat',messages);

        }catch(e){
            console.log(e);
        }
    }
    loadMessages();

    socket.on('newMessage', async(msg)=>{//when new message came it will collect and store in db
        try{
            const newMsg = new Chat(msg);
            await newMsg.save();
            io.emit('message',msg);
        }catch(e){
            console.log(e);
        }
    })
    socket.on("disconnect",()=>{
        console.log("disconnected..");
    })
})

// const login = require('./server/routers/login');
// const register = require('./server/routers/register');
// const vdRoom = require('./server/routers/virtualRoom');

// app.use('/api/', validateToken,login);
// app.use('/api/', validateToken, register);
// app.use('/api/', validateToken, vdRoom);



const port = process.env.PORT || '3002';

app.set('port', port);

server.listen(port, '0.0.0.0', ()=>{
    console.log(`Server is running at ${port} `);
})




