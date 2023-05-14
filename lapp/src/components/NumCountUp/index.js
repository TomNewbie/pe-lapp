import React, { useEffect, useState } from "react";

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

  return (
    <div style={{ textAlign: "center" }} className="text-8xl">
      <div id="counter">
        <span role="img" aria-label="users">
          🎉
        </span>
        {upto}
        <span role="img" aria-label="users">
          🎉
        </span>
      </div>
      <h1>Users using LAPP</h1>
    </div>
  );
};

export default NumCountUp;
