import { createContext } from "react";


const CalcContext = createContext();

cosnt CalcProvider = (children) => {

      const initState = {
        a: 1,
        b: 2,
        result: 3,
      };

        const [state, dispatch] = useReducer(reducer, initState);

        
    return (
        <CalcContext.Provider value={} >
            {children}
        </CalcContext.Provider>
    )
}