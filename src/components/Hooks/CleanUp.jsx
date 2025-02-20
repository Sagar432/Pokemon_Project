import { useEffect } from "react";
import { useState } from "react";

const CleanUp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div id="container">
        <div id="counter">
          <p>My Subsribe on Youtube</p>
          <div id="odometer">{count}</div>
          <div id="title">
            Subsribe <br />
            Realtime Counter
          </div>
        </div>
      </div>
    </>
  );
};

export default CleanUp;
