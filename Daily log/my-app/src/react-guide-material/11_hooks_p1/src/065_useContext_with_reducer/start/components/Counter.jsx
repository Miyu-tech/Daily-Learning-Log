import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"

const Counter = ({ state, countUp, countDown }) => {
    return (
        <>
            <CounterResult state={state} />
            <CounterButton step={2} calcType="+" />
            <CounterButton step={2} calcType="-" />
        </>
    )
}
export default Counter;