import React, { useState } from 'react';

function NumberBox() {
  const [number, setNumber] = useState(0);

  const incrementNumber = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  const decrementNumber = () => {
    setNumber(prevNumber => prevNumber - 1);
  };

  return (
    
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <button onClick={decrementNumber}>&#9666;</button>
        <div style={{ border: '1px solid black', padding: '10px', margin: '0 10px', minWidth: '50px', textAlign: 'center' }}>
          {number}
        </div>
        <button onClick={incrementNumber}>&#9656;</button>
      </div>
    </div>
  );
}

export default NumberBox;
