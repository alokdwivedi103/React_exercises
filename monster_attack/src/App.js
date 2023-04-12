import React, { useState } from "react";
import GameLog from "./components/gameLog";
import Functions from "./components/functions";
import DisplayHealth from "./components/Health_display";
import "./styles.css";

const App = () => {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [start, setStart] = useState(false);
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [gameLog, setGameLog] = useState([]);
  const [win, setWin] = useState(true);
  const [over, setOver] = useState(false);

  const attackMonster = () => {
    const damage = getRandomInt(1, 10);
    setMonsterHealth((prevState) => {
      if (prevState - damage > 0) {
        return prevState - damage;
      } else {
        setWin(true);
        resetGame();
      }
    });
    addToGameLog(`You attacked Monster and caused ${damage}% damage.`);
    monsterAttack();
  };

  const specialAttackMonster = () => {
    if (playerHealth > 90) {
      const damage = getRandomInt(10, 20);
      setMonsterHealth((prevState) => {
        if (prevState - damage > 0) {
          return prevState - damage;
        } else {
          setWin(true);
          resetGame();
        }
      });
      addToGameLog(
        `You used Special Attack and caused ${damage}% damage to Monster. Your health decreased by 10%.`
      );
      monsterAttack();
    } else {
      alert("You need to have at least 90% health to use Special Attack!");
    }
  };

  const healPlayer = () => {
    const heal = Math.min(playerHealth + 10, 100) - playerHealth;
    setPlayerHealth((prevState) => prevState + heal);
    addToGameLog(`You healed yourself and gained ${heal}% health.`);
    monsterAttack();
  };

  const monsterAttack = () => {
    const damage = getRandomInt(1, 20);
    setPlayerHealth((prevState) => {
      if (prevState - damage > 0) {
        return prevState - damage;
      } else {
        setWin(false);
        resetGame();
      }
    });
    addToGameLog(`Monster attacked you and caused ${damage}% damage.`);
  };

  const addToGameLog = (log) => {
    setGameLog((prevState) => [log, ...prevState]);
  };

  const resetGame = () => {
    setPlayerHealth(100);
    setMonsterHealth(100);
    setOver(true);
  };
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div className="App">
      <button
        className="start"
        onClick={(e) => {
          setStart(true);
          e.target.style.display = "none";
        }}
      >
        Start
      </button>
      {start && (
        <div className="start">
          <DisplayHealth
            playerHealth={playerHealth}
            monsterHealth={monsterHealth}
          />
          <Functions
            attackMonster={attackMonster}
            specialAttackMonster={specialAttackMonster}
            healPlayer={healPlayer}
            resetGame={resetGame}
          />
          <div className="new">
            <button
              className="new-game"
              onClick={() => {
                setGameLog([]);
                setPlayerHealth(100);
                setMonsterHealth(100);
                setOver(false);
              }}
            >
              New Game
            </button>
          </div>
          <GameLog gameLog={gameLog} win={win} over={over} />
        </div>
      )}
    </div>
  );
};

export default App;
