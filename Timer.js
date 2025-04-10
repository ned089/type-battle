import React, { useState, useEffect } from "react";

const Timer = ({ startTime, socket }) => {
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds countdown
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const now = Date.now();
      const elapsed = (now - startTime) / 1000;
      const remainingTime = 60 - Math.floor(elapsed);
      setElapsedTime(elapsed);
      setTimeLeft(remainingTime);

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        socket.emit("gameOver");
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [startTime, socket]);

  return (
    <div>
      <h2>Time Left: {timeLeft}s</h2>
      <p>Elapsed Time: {Math.floor(elapsedTime)}s</p>
    </div>
  );
};

export default Timer;
