import { useEffect, useState } from 'react';

const UseEffectComponent = () => {
  const [url, setUrl] = useState(
    'https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain&rnd=new'
  );
  const [version, setVersion] = useState(0);
  const [number, setNumber] = useState(0);
  useEffect(() => {
    let active = true;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (active) {
          setNumber(data);
        }
      });
    return () => {
      active = false;
    };
  }, [url, version]);
  return (
    <>
      <button onClick={() => setVersion((prevVersion) => prevVersion + 1)}>
        change the number
      </button>
      <div key={version}>Your number is : {number}</div>
    </>
  );
};

export default UseEffectComponent;
