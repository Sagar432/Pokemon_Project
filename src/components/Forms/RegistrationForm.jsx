import { useState } from "react";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      phone,
    };

    console.log(formData);
  };

  return (
    <>
      <div
        id="mainContainer"
        className="flex items-center justify-center flex-col h-[100vh] w-full"
      >
        <p className="mb-4">{`Hello my name is ${firstName} ${lastName} and my no. is ${phone}`}</p>
        <form onSubmit={handleFormSubmit}>
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="border py-1 px-2"
            />
            {/* last name */}
            <label htmlFor="lastName">
              <b>Last Name : </b>
            </label>
            <input
              type="text"
              placeholder="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="border py-1 px-2"
            />
            {/* phone number */}
            <label htmlFor="phone">
              <b>Phone : </b>
            </label>
            <input
              type="number"
              placeholder="phone..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="border py-1 px-2"
            />
            {/* submit button */}
            <button
              type="submit"
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

export default RegistrationForm;
