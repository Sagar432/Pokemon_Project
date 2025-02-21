import { useRef } from "react";

const UseRef = () => {
  const text = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${text.current.value} ${password.current.value}`);
  };

  return (
    <>
      <div id="mainContainer">
        <h1 className="text-3xl font-medium">Hello useRef</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="text..."
            className="border outline-none py-1 px-2 my-4"
            ref={text}
          />
          <br></br>
          <input
            type="password"
            placeholder="password..."
            className="border outline-none py-1 px-2 mb-4"
            ref={password}
          />
          <br></br>
          <button
            type="submit"
            className="bg-blue-400 py-1 px-2 text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UseRef;
