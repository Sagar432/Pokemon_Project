import { useState } from "react";

const ShortCircuit = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("");

  return (
    <>
      <div
        id="mainContainer"
        className="h-[100vh] w-full flex items-center justify-center"
      >
        <div
          id="container"
          className="h-[60vh] w-[80vw] bg-amber-200 py-14 px-20 flex items-start justify-center flex-col gap-10"
        >
          <h1 className="text-2xl">Welcome to the ShortCircuit Evaluation</h1>

          {/* paragraph */}
          {isLoggedIn ? <p>You are logged In!</p> : ""}
          {/* set User */}
          {user ? `Hello ${user}` : `Please Log In.`}
          {/* all buttons */}
          <div
            id="all_btns"
            className="flex items-center justify-between w-full"
          >
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="bg-blue-400 py-1 px-3 rounded-md text-white cursor-pointer"
            >
              Toggle Login State
            </button>
            <button
              onClick={() => setUser("Sagar !")}
              className="bg-blue-400 py-1 px-3 rounded-md text-white cursor-pointer"
            >
              Set User
            </button>
            <button
              onClick={() => setUser("")}
              className="bg-blue-400 py-1 px-3 rounded-md text-white cursor-pointer"
            >
              Clear User
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortCircuit;
