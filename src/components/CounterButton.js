import React, { useState } from 'react';

function CounterButton(props) {
  const [clickAmount, setClickAmount] = useState();
  return (
    <button className="CounterButton">
      You clicked me X amount of time
    </button>
  );
}

export default CounterButton;