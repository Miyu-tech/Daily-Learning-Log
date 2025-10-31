import { useState } from 'react';

export default function ScoreKeeper() {
    const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 })
    function increaseP1Score() {
        setScores((previousScores) => {
            return { ...previousScores, p1Score: previousScores.p1Score + 1 };
        });
    }

    return (
        <div>
            <p>Player1:{scores.p1Score}</p>
            <p>Player2:{scores.p2Score}</p>
            <button onClick={increaseP1Score}>+1 Player1</button>
            <button>+1 Player2</button>
        </div>
    );
}