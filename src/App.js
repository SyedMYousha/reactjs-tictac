import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Footer from "./components/Footer";
import ResetBtn from "./components/ResetBtn";
import ScoreBoard from "./components/ScoreBoard";


function App() {

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const handleStartGame = () => {
    const player1Name = prompt("Enter First Player's Name");
    const player2Name = prompt("Enter Second Player's Name");

    if (player1Name && player2Name) {
      setPlayer1(player1Name);
      setPlayer2(player2Name);
    }
  };

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [score, setScore] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false)

  const boxClickHandler = (boxIdx) => {
    if (board[boxIdx] || checkWinner(board)) {
      return;
    }

    const updatedBoard = board.map((value, idx) =>
      idx === boxIdx ? (xPlaying ? "X" : "O") : value
    );

    const winner = checkWinner(updatedBoard);

    if (winner) {
      setScore((prevScore) => {
        // if (winner === "O") {
        //   console.log("Player O wins")
        // } else if(winner === "X"){
        //   console.log("X wins");
        // } else {
        //   console.log("no winner");
        // }

       
        return {
          ...prevScore,
          [winner === "O" ? "oScore" : "xScore"]: prevScore[winner === "O" ? "oScore" : "xScore"] + 1
        };
      });
      
    }

    
    // if (winner === "X") {
    //   alert("Player X Wins!");
    // } else if (winner === "O") {
    //   alert("Player O Wins!");
    // } else {
    //   alert("It's a Tie! No Winner.");
    // }
    

    setBoard(updatedBoard);
    setXPlaying((prevXPlaying) => !prevXPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)
        return board[x];
      }
    }
    return null;
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null))
  }


  return (
    <div className="App">
      <button className='startBtn' onClick={handleStartGame}>Start Game</button>
      <ScoreBoard score={score} xPlaying={xPlaying} player1={player1} player2={player2} />
      <Board board={board} onClick={gameOver ? resetBoard : boxClickHandler} />
      <ResetBtn resetBoard={resetBoard}/>
      <Footer />
    </div> 
  );
}

export default App;
