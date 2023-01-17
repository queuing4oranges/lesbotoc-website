import React, { useState, useEffect } from "react";

export default function BubbleGrid6x7(props) {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    countBubbles();
  }, []);

  const countBubbles = () => {
    const bubbleArray = [];
    for (let i = 1; i < 43; i++) {
      bubbleArray.push(i);
    }
    console.log(bubbleArray);
    setBubbles(bubbleArray);
  };

  return (
    <div className="bubble-grid6x7">
      {bubbles &&
        bubbles.map((key) => (
          <div
            key={key}
            className="bubble6x7"
            style={{ backgroundColor: props.color }}
          >
            {props.children}
          </div>
        ))}
    </div>
  );
}
