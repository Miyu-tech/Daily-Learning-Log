export default function ({ val1, val2, val3 }) {
    const isWinner = val1 === val2 && val1 === val3;
    return <div>
        <h1>
            {val1} {val2} {val3}
        </h1>
        <h2 style={{ color: isWinner ? 'green' : 'red' }}>
            {isWinner ? 'Win!' : 'Lose...'}</h2>
        {isWinner && <h3>Cograts!</h3>}
    </div>;
}