import express from 'express';
import http from 'http';
import socketIO from 'socket.io';

const port = 3000;

const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => res.send('Hello World!'));

const io = socketIO(server);

io.on('connection', (socket) => {
   console.log('User connected');

   socket.on('sendMsg', (data) => {
      io.emit('getMsg', { msg: data.msg });
   });

   socket.on('disconnect', () => {
      console.log('user disconnected');
   });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
