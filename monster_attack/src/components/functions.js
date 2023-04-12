import React from "react";
export default function Functions({
  attackMonster,
  specialAttackMonster,
  healPlayer,
  resetGame,
}) {
  return (
    <div className="functions">
      <button className="attack" onClick={attackMonster}>
        Attack
      </button>
      <button className="special-attack" onClick={specialAttackMonster}>
        Special Attack
      </button>
      <button className="heal" onClick={healPlayer}>
        Heal
      </button>
      <button className="give-up" onClick={resetGame}>
        Give Up
      </button>
    </div>
  );
}
