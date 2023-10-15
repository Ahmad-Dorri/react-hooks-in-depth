import React, { LegacyRef, forwardRef, useRef, useState } from 'react';

const MyInput = forwardRef((props: any, ref: LegacyRef<HTMLInputElement>) => {
  const [inputValue, setInputValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  return <input onChange={onChange} value={inputValue} ref={ref} />;
});

const UseRefComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>focus the input</button>
    </div>
  );
};
export default UseRefComponent;
