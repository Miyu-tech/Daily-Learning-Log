import { useState } from "react";

const Example = () => {
  const [toggle, setToggle] = useState(true);
    const [count, setCount] = useState(0);

  const toggleComponent = () => {
    setToggle(prev => !prev)
  };

  return (
    <>
    <button onClick={toggleComponent}>Toggle</button>
    {toggle 
    ? <count title="A" key="A" count={count} setCount={setCount}
    /> : <count title="B" key="B" count={count} setCount={setCount}/>
    </>
    );
    };

const Count = ({ title, sount, setCount }) => {
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{title}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
