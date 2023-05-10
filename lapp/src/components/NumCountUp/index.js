import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const NumCountUp = () => {
  const [upto, setUpto] = useState(0);
  const desiredNumber = 1700;
  let interval;

  useEffect(() => {
    interval = setInterval(updated, 1);
    return () => clearInterval(interval);
  }, []);

  const updated = () => {
    setUpto((prevUpto) => {
      if (prevUpto >= desiredNumber) {
        clearInterval(interval);
        return prevUpto;
      }
      return prevUpto + 1;
    });
  };

  const confettiColors = ["#cc6666", "#00ff00", "#0000ff"]; // Customize the confetti colors

  return (
    <div style={{ textAlign: "center" }}>
      <div id="counter">
        {upto}
        {upto === desiredNumber && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false} // Disable confetti recycling
            numberOfPieces={200} // Set the number of confetti pieces
            gravity={0.1} // Set the gravity of confetti animation
            friction={0.99} // Set the friction of confetti animation
            colors={confettiColors} // Customize the confetti colors
            confettiSource={{ x: 0, y: -100, w: window.innerWidth, h: 0 }} // Customize the confetti source
            initialVelocityX={10} // Set initial X-axis velocity of confetti
            initialVelocityY={30} // Set initial Y-axis velocity of confetti
            run={5} // Set the duration of confetti animation in seconds
          />
        )}
      </div>
      <h1>Users using LAPP</h1>
    </div>
  );
};

export default NumCountUp;
