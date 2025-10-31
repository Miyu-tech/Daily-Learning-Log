import {createContext, useReducer} from 'react';

const CounterContext = createContext();
const CounterDispatchContext = createContext();

const CounterProvider = () => {
    const [state, dispatch] = useReducer ((prev, {type, step}
    ) => {
        switch(type) {
        case '+':
            return prev + prev;
            case '-':
                return prev - prev;
                default:
                    throw new Error('Error')
    }
}, 0);
return (
    <CounterContext.Provider vakue={state}>
        <CounterDispatchContext.Provider value={dispatch}>
            {children}
        </CounterDispatchContext.Provider>
    </CounterContext.Provider>
)
}

const useCounter = () => {
    return useContext(CounterContext);
}

const useCountertext(CounterDispatchContext);

export { CounterProvider, useCounter, useCounterDispatch }