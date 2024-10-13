import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

let fileContent = '';

const users: { [key: string]: { username: string } } = {};

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.emit('init-file', fileContent);

  socket.on('set-username', (username) => {
    users[socket.id] = { username };
    console.log(`User ${username} connected with ID: ${socket.id}`);
  });

  socket.on('edit-file', (data) => {
    fileContent = data.content;
    if (users[socket.id]) {
      socket.broadcast.emit('file-update', { content: fileContent, editor: users[socket.id].username });
    } else {
      console.error(`User ${socket.id} tried to edit without setting username`);
    }
  });

  socket.on('cursor-move', (data) => {
    if (users[socket.id]) {
      socket.broadcast.emit('cursor-update', {
        userId: socket.id,
        username: users[socket.id].username,
        cursorPos: data.cursorPos,
        cursorCoordinates: data.cursorCoordinates
      });
    } else {
      console.error(`User ${socket.id} tried to move cursor without setting username`);
    }
  });

  socket.on('disconnect', () => {
    if (users[socket.id]) {
      console.log(`User ${users[socket.id].username} disconnected`);
      delete users[socket.id];
    }
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
