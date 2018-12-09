"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const port = 3000;
const app = express_1.default();
const server = http_1.default.createServer(app);
app.get('/', (req, res) => res.send('Hello World!'));
const io = socket_io_1.default(server);
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
//# sourceMappingURL=server.js.map