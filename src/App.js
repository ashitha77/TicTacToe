import React, { useState } from "react";
import "./styles.css";
import Board from "./components/Board";
import Player from "./components/Player";
import { calculateWinner } from "./Helper";

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [isPlayer1, setIsPlayer1] = useState(true);
  const [gameStart, setGameStart] = useState(false);
  const startSquares = Array(9).fill(null);
  let newSquares = [...squares];
  let gameOver = false;

  const winnerArray = calculateWinner(squares);
  let winner = "";

  if (winnerArray.indexOf("X") >= 0 || winnerArray.indexOf("O") >= 0) {
    gameOver = true;
    if (winnerArray.indexOf("X") >= 0) {
      winner = "Player1";
    } else {
      winner = "Player2";
    }
  } else {
    if (squares.indexOf(null) === -1) {
      winner = "tie";
    }
  }

  const startGameHandler = () => {
    setGameStart(true);
  };

  const handleClick = (index, event) => {
    if (squares[index] !== "X" && squares[index] !== "O" && !gameOver) {
      isX ? (newSquares[index] = "X") : (newSquares[index] = "O");
      setSquares(newSquares);
      setIsX(!isX);
      setIsPlayer1(!isPlayer1);
    }
  };

  const resetHandler = () => {
    setSquares(startSquares);
    newSquares = startSquares;
    setIsPlayer1(true);
    setGameStart(false);
  };

  return (
    <div className="App">
      <h1> Tic Tac Toe </h1>
      <button className="buttons" onClick={startGameHandler}>
        Start
      </button>
      {gameStart ? (
        <div>
          <Player isPlayer1={isPlayer1} winner={winner} />
          <Board squares={squares} onClick={handleClick} />
        </div>
      ) : (
        <div>
          <Player isPlayer1={isPlayer1} winner={winner} />
          <Board squares={startSquares} onClick={() => {}} />
        </div>
      )}
      <button className="buttons" onClick={resetHandler}>
        Reset
      </button>
      {gameStart ? (
        <p className="para"> Game started </p>
      ) : (
        <p className="para"> Please start the game </p>
      )}
    </div>
  );
}
