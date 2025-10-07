import { useState } from "react";
import styled from 'styled-components';

console.dir(styled);
const StyledButton = styled.button`
    margin: auto;
    border-radius: 9999px;
    border: none;
    display: block;
    width: 120px;
    height: 60px;
    font-weight: bold;
    cursor: pointer;
    backgroung: ${({isSelected}) => isSelected ? 'pink' : ''};

    @media (max-width: 600px) {
      border-radius: 0;
    }
    `;

    const OrangeButton = styled(StyledButton)`
    background-color: orange;

    :hover, :active {
      color: red;
      opacity: 0.7;
    }
    `;

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
    <StyledButton isSelected={isSelected} onClick={clickHandler}>Button</StyledButton>
    <OrangeButton isSelected={isSelected} onClick={clickHandler}>Button</OrangeButton>

      <button
        className={`btn ${isSelected ? "selected" : ""}`}
        onClick={clickHandler}
      >
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
