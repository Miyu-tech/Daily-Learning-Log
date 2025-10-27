// import {useState} from 'react';

// const Example = () => {
//   const [count, setCount] = useState(0);

// const countUp = () => {
//   setCount(++prev)
// };

//   return (
//     <>
//     <h3>{State}</h3>
//     <button onClick={countUp}>Click Button!</button>
//     </>
//   );
// };

// export default Example;


When you use useReducer;

import {useState, useReducer} from 'react';

const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer
 ((prev, action) => {
switch(action) {
  case '+';
  return ++prev;
  case '-';
  return --prev;
  default;
  prev;
}


  //   if(action === '+') {
  //     return ++prev;
  //   } else if(action === '-') {
  //     return --prev;
  //   }
  }, 0)

const countUp = () => {
  setCount(prev = ++prev)
};
const rcountUp = () => {
  dispatch('+');
};
const rcountDown = () => {
  dispatch('-');
};

  return (
    <>
    <h3>{State}</h3>
    <button onClick={countUp}>Click Button!</button>
    <h3>{rstate}</h3>
    <button onClick={rcountUp}>+</button>
    <button onClick={rcountDown}>-</button>
    </>
  );
};

export default Example;

