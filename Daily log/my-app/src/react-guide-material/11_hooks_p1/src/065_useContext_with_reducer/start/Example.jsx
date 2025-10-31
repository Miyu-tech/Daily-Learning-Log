import { useReducer } from "react";
import Counter from "./components/Counter";
import {CounterProvider} from './context/CounterContext';

// POINT useContext x useReducer
const Example = () => {
  const [state, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case "+":
        return prev + step;
      case "-":
        return prev - step;
      default:
        throw new Error('不明なactionです。')
    }
  }, 0);


  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default Example;
