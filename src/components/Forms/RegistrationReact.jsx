import { useState } from "react";

const RegistrationReact = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
  };

  return (
    <>
      <div
        id="mainContainer"
        className="flex items-center justify-center flex-col h-[100vh] w-full"
      >
        <p className="mb-4">{`Hello my name is ${user.firstName} ${user.lastName} and my no. is ${user.phone}`}</p>
        <form onSubmit={(e) => setUser(user.firstName)}>
          <div
            id="container"
            className="flex items-start justify-center flex-col gap-2"
          >
            <h1>Sign Up</h1>
            <p>Please fill the form to create an account.</p>
            {/* first name */}
            <label htmlFor="firstName">
              <b>First Name : </b>
            </label>
            <input
              type="text"
              placeholder="firstName"
              value={user.firstName}
              onChange={handleInputChange}
              required
              name="firstName"
              className="border py-1 px-2"
            />
            {/* last name */}
            <label htmlFor="lastName">
              <b>Last Name : </b>
            </label>
            <input
              type="text"
              placeholder="lastName"
              value={user.lastName}
              onChange={handleInputChange}
              required
              name="lastName"
              className="border py-1 px-2"
            />
            {/* phone number */}
            <label htmlFor="phone">
              <b>Phone : </b>
            </label>
            <input
              type="number"
              placeholder="phone..."
              value={user.phone}
              onChange={handleInputChange}
              required
              name="phone"
              className="border py-1 px-2"
            />
            {/* submit button */}
            <button
              type="submit"
              onSubmit={handleFormSubmit}
              className="bg-blue-400 py-1 px-3 rounded cursor-pointer text-white mt-5"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationReact;
