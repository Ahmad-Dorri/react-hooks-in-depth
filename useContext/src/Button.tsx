import useCounter from './hooks/use-counter';

export const Button = () => {
  const { dispatch, ACTIONS } = useCounter();
  return (
    <button
      style={{
        backgroundColor: '#f2aa',
        border: 'none',
        padding: '1rem',
        borderRadius: '5px',
        display: 'block',
        margin: 0,
        cursor: 'pointer',
      }}
      onClick={() => dispatch({ type: ACTIONS.INCREAMENT, payload: 5 })}>
      add
    </button>
  );
};
