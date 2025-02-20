import { useEffect, useState } from "react";

const EffectChallenge = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log(`Name is ${input}`);
  }, [input]);

  return (
    <>
      <div id="container">
        <h1>useEffect Challenge</h1>
        <p>
          Count: <span>{count}</span>
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-400 py-1 px-3 text-white rounded cursor-pointer"
        >
          Increment
        </button>
        <p>
          Name: <span>{input}</span>
        </p>
        <input
          type="text"
          placeholder="type here..."
          className="border py-1 px-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </>
  );
};

export default EffectChallenge;
