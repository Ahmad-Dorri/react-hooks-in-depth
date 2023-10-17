import { useContext } from 'react';

import { ColorContext } from '../context/color-context-provider';

const ColorContextBox = () => {
  const { state } = useContext(ColorContext);

  return (
    <div
      className="h-80 w-80 transition-all "
      style={{
        backgroundColor: state.color,
      }}
    />
  );
};

export default ColorContextBox;
