import React from "react";

const GameLog = ({ gameLog, win, over }) => {
  return (
    <div className="game-log">
      {gameLog.length === 0 && <h3>No Moves Played</h3>}
      {over && (win ? <h2>Player Win</h2> : <h2>Monster Win</h2>)}
      <ol>
        {gameLog.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ol>
    </div>
  );
};

export default GameLog;
