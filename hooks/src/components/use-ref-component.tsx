import { useRef, useState } from 'react';

const UseRefComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const value = useRef('');
  const handleClick = () => {
    value.current = inputValue;
  };

  // console.log(inputValue);
  console.log(value.current);

  return (
    <div>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button onClick={handleClick}>save the input value in Ref</button>
    </div>
  );
};

export default UseRefComponent;
