import React from 'react';

export default function DisplayHealth({playerHealth,monsterHealth}){
    return(
        <>
        <div className="details">
            <h2>Player Health: {playerHealth}%</h2>
            <h2>Monster Health: {monsterHealth}%</h2>
          </div>
          <div className="health-bars">
            <div className="bars">
              <div
                className="player-bar"
                style={{ width: `${playerHealth}%` }}
              ></div>
            </div>
            <div className="bars">
              <div
                className="monster-bar"
                style={{ width: `${monsterHealth}%` }}
              ></div>
            </div>
          </div>
          </> 
           )
}
