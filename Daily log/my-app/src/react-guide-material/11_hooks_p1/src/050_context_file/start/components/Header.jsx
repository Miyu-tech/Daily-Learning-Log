import { useContext } from "react";
import { ThemeContext } from "styled-components";

const Header = () => {

    const [theme, seTheme] = useContext(ThemeContext)
const changeTheme = (e) => setTheme(e.target.value)

  return (
      <header className={`content-${theme}`}>
        {THEMES.map(_theme => {
          return (
            <label>
            <input type="radio" key={_theme} value={_theme} checked={theme === _theme} onChange={changeTheme} />
            {_theme}
            </label>
          )
        })}
      </header>
  )
};

export default Header;
