import { useState } from "react";

const [ count, setCount] = useState(0);
const countUp = () => {
    setCount(count + 1);
};
const countDown = () => {
    setCount(count - 1);
};

const Example = () => {
    return (
        <>
            <p>Current count:{count} </p>
            <button 
            onClick={countUp}
            >+</button>
            <button 
            onClick={countDown}
            >-</button>
        </>
    )
  
};

export default Example;

