import { useState } from 'react';

function Counter() {
  const [value, setValue] = useState(0);

  const increment = () => {
    return setValue(value + 1);
  };

  const decrement = () => {
    return setValue(value - 1);
  };

  return (
    <div>
      <h1>Counter</h1>

      <p>Counter value: {value}</p>

      <button type="button" onClick={increment}>
        increment
      </button>

      <button type="button" onClick={decrement}>
        decrement
      </button>
    </div>
  );
}

export default Counter;
