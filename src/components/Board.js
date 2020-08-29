import React from "react";
import Square from "./Square.js";
import "./Board.css";

const Board = ({ squares, onClick }) => (
  <div id="board">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
