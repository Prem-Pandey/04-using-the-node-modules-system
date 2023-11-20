const http = require('http');
const express = require('express');
// const routes = require('./routes');

const app = express();

app.use((req, res, next)=>{
    console.log("in the middleware");
    next();
})
app.use((req, res, next)=>{
    console.log("in another middleware");  
    res.send('<h1>well from express!</h1>')
})
// console.log(routes.someText);

const server = http.createServer(app);

server.listen(3000);
