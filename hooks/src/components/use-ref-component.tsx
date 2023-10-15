import { useRef, useState } from 'react';

const UseRefComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        ref={inputRef}
      />
      <button onClick={handleClick}>focus the input</button>
    </div>
  );
};

export default UseRefComponent;
