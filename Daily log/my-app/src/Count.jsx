import { useState, useEffect } from "react";

export default function Count() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(function myEffect() {
        console.log('Effectが呼ばれました')
    },
        [count, name]
    );

    const increment = () => {
        setCount((c) => c + 1);
    };

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <p>{name}</p>
            <input value={name} onChange={handleChange} type="text" />
        </div>
    )
};