const Example = () => {
  const clickHandler = () => {
    alert("Button clicked!");
  };
  const clickHandler2 = () => {
    console.log("Button clicked again!");
  };
  return (
    <>
      <button onClick={clickHandler}>Click me!</button>
      <button onClick={clickHandler2}>Click me!</button>
    </>
  );
};

export default Example;
