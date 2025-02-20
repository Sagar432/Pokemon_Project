import { useState } from "react";

const NewTodo = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([...task, input]);
    setInput("");

    // const updatedTasks = [...task, input];
    // setTask(updatedTasks);
  };
  return (
    <>
      <div id="container">
        <form>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="type here..."
            className="border"
          />
          <button onClick={handleSubmit}>Add Me</button>
        </form>

        <ul>
          {task.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NewTodo;
