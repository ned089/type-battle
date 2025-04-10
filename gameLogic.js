let players = {};
let gameInProgress = false;

const startGame = () => {
  players = {};
  gameInProgress = true;
};

const endGame = (socket) => {
  gameInProgress = false;
  const winner = Object.entries(players).reduce((max, [id, data]) => (data.wpm > max.wpm ? { id, ...data } : max), { wpm: 0 });
  io.emit("gameOver", winner);
  console.log("Game Over! Winner:", winner);
};

const updatePlayer = (socketId, progress, wpm) => {
  if (!gameInProgress) return;

  players[socketId] = { progress, wpm };
};

module.exports = { startGame, endGame, updatePlayer };
