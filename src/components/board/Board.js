import React, { useState } from "react";
import Square from "../square/Square";
import "./board.css";
import { checkWinner } from "../../utility";

const Board = () => {
  // creating a board default values with null
  const [boardState, setState] = useState(Array(9).fill(null));
  const [currentTurn, setTurn] = useState(true);

  const isWinner = checkWinner(boardState);
  // handle click handler
  const handleClick = (index) => {
    const copyState = [...boardState];
    copyState[index] = currentTurn ? "X" : "O";
    setState(copyState);
    setTurn(!currentTurn);
  };

  const restart = () => {
    setState(Array(9).fill(null));
  };
  return (
    <div className="board-container">
      <div class="one">
        <h1>Tic-Tac-Toe</h1>
      </div>
      {isWinner ? (
        <div className="result">
          <div className="winnerTxt">{`${isWinner} won the game`}</div>
          <button onClick={restart}>Restart Game</button>
        </div>
      ) : (
        <div className="board-row">
          <Square onClick={() => handleClick(0)} value={boardState[0]} />
          <Square onClick={() => handleClick(1)} value={boardState[1]} />
          <Square onClick={() => handleClick(2)} value={boardState[2]} />
          <Square onClick={() => handleClick(3)} value={boardState[3]} />
          <Square onClick={() => handleClick(4)} value={boardState[4]} />
          <Square onClick={() => handleClick(5)} value={boardState[5]} />
          <Square onClick={() => handleClick(6)} value={boardState[6]} />
          <Square onClick={() => handleClick(7)} value={boardState[7]} />
          <Square onClick={() => handleClick(8)} value={boardState[8]} />
        </div>
      )}
    </div>
  );
};

Board.displayName = "Board";

export default Board;
