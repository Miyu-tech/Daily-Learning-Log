import { useState } from "react";

const Example = () => {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(10);

  return (
    <>
    <p>You clicked Butoon A {countA} times!</p>
    <button onClick={(countA) => {
        setCountA(countA + 1);
    }}>Count A Button</button>
    
    <p>You clicked Butoon B {countB} times!</p>
    <button onClick={(countB) => {
        setCountA(countB + 1);
    }}>Count B Button</button>
    </>
  )
};

export default Example;
