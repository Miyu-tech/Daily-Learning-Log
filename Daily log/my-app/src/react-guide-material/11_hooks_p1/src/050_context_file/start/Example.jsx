import "./Example.css";
import Main from "./components/Main";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";


export const ThemeContext = createContext();

const Example = () => {
  const [theme, setTheme] = useState('light')
  
  const THEMES = ['light', 'dark', 'red'];

  return (
 <ThemeProvider>
    <Header />
    <Main />
 </ThemeProvider>
  );
};

export default Example;
