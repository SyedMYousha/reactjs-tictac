import React from 'react';
import "./ScoreBoard.css";

const ScoreBoard = ({ score, xPlaying, player1, player2 }) => {
    const { xScore, oScore } = score;

    return (
        <div className='scoreboard'>
            <span className={`score x-score ${!xPlaying && "inactive"}`}>{player1} - {xScore}</span>
            <span className={`score o-score ${xPlaying && "inactive"}`}>{player2} - {oScore}</span>
        </div>
    );
};

export default ScoreBoard;
