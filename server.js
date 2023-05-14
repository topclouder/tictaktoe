const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

const io = socketio(server);

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("makeMove", (move) => {
    // Make the move on the server.
    io.emit("moveMade", move);
  });
});
