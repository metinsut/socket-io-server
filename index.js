const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const port = 3000;

const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => res.send('Hello World!'));

const io = socketIO(server);

io.on('connection', socket => {
   console.log('User connected');

   socket.on('sayHey', data => {
      console.log(data);
   });

   setInterval(() => {
      socket.emit('sendMes', { name: 'John' });
   }, 2000);

   socket.on('disconnect', () => {
      console.log('user disconnected');
   });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
