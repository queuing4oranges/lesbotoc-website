import React from "react";
import { useState, useEffect } from "react";

export default function BubbleGrid(props) {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    countBubbles();
  }, []);

  //looping 1-21 (amount bubbles)
  const countBubbles = () => {
    const bubbleArr = [];
    for (let i = 1; i < 22; i++) {
      bubbleArr.push(i);
    }
    //setting bubbles to number array 1-21
    setBubbles(bubbleArr);
  };

  console.log(bubbles);

  //make container for each bubble by mapping through bubbles
  return (
    <div className="bubble-grid">
      {bubbles &&
        bubbles.map((key) => (
          <div
            key={key}
            className="bubble"
            style={{ backgroundColor: props.color }}
          >
            {props.children}
          </div>
        ))}
    </div>
  );
}
