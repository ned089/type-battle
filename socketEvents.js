const { startGame, endGame, updatePlayer } = require("./gameLogic");

const socketEvents = (socket, io) => {
  socket.on("startGame", () => {
    startGame();
    io.emit("gameStart");
  });

  socket.on("updateProgress", ({ progress, wpm }) => {
    updatePlayer(socket.id, progress, wpm);
    io.emit("players", players);
  });

  socket.on("gameOver", () => {
    endGame(socket);
  });

  socket.on("disconnect", () => {
    delete players[socket.id];
    io.emit("players", players);
    console.log("User disconnected:", socket.id);
  });
};

module.exports = socketEvents;
