useState

Purpose: To store and update reactive data — data that causes the component to re-render when it changes.

When to use:

When you want to display or react to changing data in the UI.

Example:

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

When you call setCount, the component re-renders and shows the new value.

2. useRef

Purpose: To keep a mutable value that does not cause re-renders when it changes.
It’s also often used to directly access DOM elements.

When to use:

When you need to store something between renders but don’t want to trigger a re-render.

When you want to reference a DOM node.

Examples:

import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Access the DOM node directly
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}


Changing inputRef.current does not cause a re-render.

3. useEffect

Purpose: To perform side effects — actions that happen outside the normal render cycle, like fetching data, updating the DOM, or setting up event listeners.

When to use:

When you need to run code after the component renders or when certain data changes.

Example:

import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(timer); // cleanup when unmounted
  }, []); // run once when mounted

  return <p>Time: {seconds}s</p>;
}

