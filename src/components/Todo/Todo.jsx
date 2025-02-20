import { useState, useEffect } from "react";
// import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");
  //   const [checked, setChecked] = useState(true)

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = localStorage.getItem("Data");
    setTask(storedTasks ? JSON.parse(storedTasks) : []);
  }, []);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || task.includes(inputValue)) return;

    const updatedTasks = [...task, inputValue];
    setTask(updatedTasks);
    localStorage.setItem("Data", JSON.stringify(updatedTasks));
    setInputValue("");
  };

  const clearData = () => {
    localStorage.removeItem("Data");
    setTask([]);
  };

  const handleDeleteTodo = (taskToDelete) => {
    const updatedTasks = task.filter((t) => t !== taskToDelete);
    setTask(updatedTasks);
    localStorage.setItem("Data", JSON.stringify(updatedTasks));
  };
  //   const getDateTime = () => {
  //     const now = new Date();
  //     const formateDate = now.toLocaleDateString();
  //     const formateTime = now.toLocaleTimeString();
  //     setDateTime(${formateDate} - ${formateTime})
  //   }

  //   console.log("Hi");

  useEffect(() => {
    const interval = setInterval(() => {
      // getDateTime();
      const now = new Date();
      const formateDate = now.toLocaleDateString();
      const formateTime = now.toLocaleTimeString();

      setDateTime(`${formateDate} - ${formateTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-black h-[100vh] w-full py-10 px-[5vw] text-white text-center">
        <h1 className="text-3xl font-medium text-center pb-10">Todo List</h1>
        {/* Date and Time */}
        <h2 id="date_time" className="font-medium mb-5">
          {dateTime}
        </h2>
        <div className="mb-10">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Type here ..."
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
              className="bg-white text-black py-2 px-4 outline-none"
            />
            <button
              type="submit"
              className="bg-sky-400 py-2 px-4 cursor-pointer"
            >
              Add Me
            </button>
          </form>
        </div>
        <ul>
          {task.map((t, index) => (
            <li
              key={index}
              className="py-2 text-center flex items-center justify-center"
            >
              <div className="flex items-center justify-between bg-white w-[320px] text-black py-2 px-8 rounded-full">
                {t}
                <div id="btn_main">
                  {/* <button className="bg-green-500 text-white py-2 px-2 mr-6 rounded-full cursor-pointer">
                    <FaCheck />
                  </button> */}
                  <button
                    className="bg-red-600 text-white py-2 px-2 rounded-full cursor-pointer"
                    onClick={() => handleDeleteTodo(t)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button
          onClick={clearData}
          className="mt-4 bg-red-500 py-2 px-4 cursor-pointer"
        >
          Clear All
        </button>
      </div>
    </>
  );
};

export default Todo;
