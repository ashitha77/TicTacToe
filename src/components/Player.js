import React from "react";
import "./Player.css";

const Player = ({ isPlayer1, winner }) => {
  if (winner === "tie") winner = "Game is tie";
  else if (winner === "Player1") winner = "Player 1 wins !";
  else if (winner === "Player2") winner = "Player 2 wins !";
  else winner = "Let's see who wins!!";
  return (
    <div>
      <label id={`player${isPlayer1}`}> Player 1 </label>
      <label id={`player${!isPlayer1}`}> Player 2 </label>
      <p>{winner}</p>
    </div>
  );
};

export default Player;
