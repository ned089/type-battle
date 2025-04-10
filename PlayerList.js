import React from "react";

const PlayerList = ({ players }) => {
  return (
    <div>
      <h3>Players:</h3>
      <ul>
        {Object.entries(players).map(([id, data]) => (
          <li key={id}>
            <strong>{id.substring(0, 5)}...</strong> — {data.wpm} WPM — {data.progress}% Completed
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
