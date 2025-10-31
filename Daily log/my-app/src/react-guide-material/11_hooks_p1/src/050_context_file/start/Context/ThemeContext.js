import {useState, useContext, createContext} from 'react;'

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    return (
        <ThemeContext.provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.provider>
    );
};

export const useTheme = () => useContext(ThemeContext);