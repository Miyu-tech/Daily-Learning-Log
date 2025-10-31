import {useTheme} 


const Main = () => {
const [theme, seTheme] = useContext(ThemeContext)
  return (
      <main className={`content-${theme}`}>
        <h1>テーマの切り替え</h1>
      </main>
  )
};

export default Main;
