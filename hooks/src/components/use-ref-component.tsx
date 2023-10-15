import { useState } from 'react';

const UseRefComponent = () => {
  const [inputValue, setInputValue] = useState(``);
  const handleClick = () => {
    console.log(inputValue);
  };
  console.log(inputValue);
  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>print the input</button>
    </div>
  );
};

export default UseRefComponent;
