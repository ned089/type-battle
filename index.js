const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const paragraph = "The quick brown fox jumps over the lazy dog.";

let players = {};

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);
  players[socket.id] = { progress: 0, wpm: 0 };

  socket.emit("paragraph", paragraph);
  io.emit("players", players);

  socket.on("updateProgress", ({ progress, wpm }) => {
    players[socket.id] = { progress, wpm };
    io.emit("players", players);
  });

  socket.on("disconnect", () => {
    delete players[socket.id];
    io.emit("players", players);
    console.log("User disconnected:", socket.id);
  });
});

server.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
