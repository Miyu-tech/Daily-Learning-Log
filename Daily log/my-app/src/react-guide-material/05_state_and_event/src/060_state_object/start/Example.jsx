import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);

  const changeName = (e) => {
setPerson({name: e.target.value, age: person.age})
  };

  const changeAge = (e) => {
    setPerson({name:person.name, age: e.target.value})
  };

  const reset = () => {
    setPerson({name: "", age:""})
  };

  return (
    <>
    <h3>Name: {person.name}</h3>
    <h3>Age: {person.age}</h3>
    <input type="text" value={person.name} onChange={changeName} />
    <input type="number" value={person.age} onChange={changeAge} />
    <div>
      <button onClick={reset}>Reset</button>
    </div>
    </>
  );
};

export default Example;







import { useState } from "react";

const Example = () => {
  const numArray = [1,2,3,4,5];
  const [nums, setNums] = useState(numArray);
  const shuffle = () => {
    const newNums = [...nums ]
    const value = newNums.pop();
    newNums.unshift(value);
    setNums(newNums);
  }

  return (
    <>
   <h1>{nums}</h1> 
   <button onClick={shuffle}>shuffle</button>
    </>
  )
}

export default Example;