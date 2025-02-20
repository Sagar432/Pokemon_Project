import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const loginData = {
      email,
      password,
    };

    const userData = localStorage.setItem("allData", JSON.stringify(loginData));
    console.log(userData);
  };
  const gettingData = localStorage.getItem("allData");

  return (
    <>
      <div
        id="mainConatiner"
        className="h-[100vh] w-full flex items-center justify-center flex-col"
      >
        <div
          id="login"
          className="border py-4 px-6 flex items-start justify-center flex-col gap-1"
        >
          <h2 className="font-bold mb-2">Login Form</h2>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            placeholder="userName..."
            className="border py-1 px-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="password..."
            className="border py-1 px-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* button */}
          <button className="bg-blue-400 py-2 px-10 mt-5" onClick={handleLogin}>
            Login
          </button>
        </div>
        {/* showing the data */}
        <div>{gettingData.email}</div>
      </div>
    </>
  );
};

export default LoginForm;
