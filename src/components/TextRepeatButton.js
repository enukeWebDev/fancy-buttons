import React, { useState } from 'react';

function TextRepeatButton(props) {
  const [repetitions, setRepetitions] = useState();
  return (
    <button classname="TextRepeatButton">
      <span>I like this text</span>
    </button>
  );
}

export default TextRepeatButton;