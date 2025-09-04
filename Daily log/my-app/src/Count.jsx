import { useEffect } from "react";

export default function Count() {
    const [count, setCount] = useState(0);
    useEffect(function myEffect() {
        console.log('Effectが呼ばれました')
    });

    const increment = () => {
        setCount((c) => c + 1);
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
        </div>
    )
};