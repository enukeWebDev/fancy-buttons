import React from 'react';

function AngryButton() {
  return (
    <button className="AngryButton">
      {/* If you have not reached maximum */}<span>Don't click me too much! </span>
      {/* If you have reached the maximum */}<span>Rawr!</span>
    </button>
  );
}

export default AngryButton;