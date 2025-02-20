import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log(`Count ${count}`);
    setInterval(() => {
      const updatedDate = new Date();
      setCount(updatedDate.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      <div>
        <h1 className="text-3xl">useEffect</h1>
        <p>Time : {count}</p>
        {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      </div>
    </>
  );
};

export default UseEffectHook;
