// const Example = () => {
//   return (
//     <p style={{ textAlign: "center" }}>
//       startフォルダの内容が表示されます。
//       <br />
//       練習用に使ってください！
//     </p>
//   );
// };

// export default Example;


import { useState } from "react";

const Example = () => {

  const [fruit, setFruit] = useState('Apple');
  const onChange = (e) => setFruit(e.target.value);

  const RADIO_COLLECTION = ['Apple', 'Banana', 'Cherry']
  return (
    <>
    {RADIO_COLLECTION.map(value => {

      return (
        <label key={value}>
          <input 
          type="radio" 
          value="value" 
          checked={fruit === 'value'}
          onChange={onChange}
        />
        {value}
       </label>
      );
    })}
   
    {/* <label>
      <input 
      type="radio" 
      value="Banana" 
      checked={fruit === 'Banana'}
      onChange={onChange}
      />
    Banana
    </label>
     <label>
      <input 
      type="radio" 
      value="Cherry" 
      checked={fruit === 'Cherry'}
      onChange={onChange}
      />
    Cherry
    </label> */}
    </>
  )
}
