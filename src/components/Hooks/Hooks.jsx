import { useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(""); // Keep input initially empty

  const handleIncrement = () => {
    const value = input === "" ? 1 : Number(input); // Default to 1 if input is empty
    setCount((prevCount) => Math.min(prevCount + value, 100)); // Limit max count to 100
  };

  const handleDecrement = () => {
    const value = input === "" ? 1 : Number(input); // Default to 1 if input is empty
    setCount((prevCount) => Math.max(prevCount - value, 0)); // Prevent going below 0
  };

  const handleReset = () => {
    setCount(0);
    setInput("");
  };

  return (
    <>
      <div id="container">
        <h1>useState Challenge</h1>

        <div id="count_main">
          <p>
            Count : <span className="font-bold">{count}</span>
          </p>
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)} // Keep input as string to allow empty value
            className="border"
            placeholder="Enter a number"
          />
        </div>

        <div id="all_btn" className="mt-4">
          <button onClick={handleIncrement} disabled={count >= 100}>
            Increment
          </button>
          <button
            onClick={handleDecrement}
            disabled={count <= 0}
            className="mx-10"
          >
            Decrement
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Hooks;
