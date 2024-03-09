const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
require('dotenv').config();

const server = http.createServer(app);

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors());

const login = require('./server/routers/login');

app.use('/api/',login);

const port = process.env.PORT||'4000';

app.set('port',port);

server.listen(port,'0.0.0.0',()=>{console.log(`Server started at : ${port}`)})