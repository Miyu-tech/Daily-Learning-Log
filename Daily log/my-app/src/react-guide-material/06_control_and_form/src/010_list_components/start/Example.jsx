
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animalList = [];
for (const animal of animals) {
  animalList.push(<li>{animal}</li>);
}

const helloAnimals animals.map((animal) => 
<li key={animal}>Hello, {animall}</li> );
return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}

      </ul>
    </>
  );
};

export default Example;


// map is frequetly use in React more than for()


