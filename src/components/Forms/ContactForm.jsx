// import { useState } from "react";

// const ContactForm = () => {
//   const [username, setUsername] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     const formData = {
//       username,
//       phone,
//       message,
//     };

//     console.log(formData);
//   };

//   return (
//     <>
//       <div
//         id="mainContainer"
//         className="h-[100vh] w-full flex items-center justify-center"
//       >
//         <div
//           id="contact"
//           className="border flex items-start justify-center flex-col gap-2 py-4 px-8"
//         >
//           <h1 className="font-bold text-2xl">Contact Form</h1>
//           <form
//             onSubmit={handleFormSubmit}
//             className="flex items-start justify-center flex-col gap-2"
//           >
//             {/* userName */}
//             <label htmlFor="userName">
//               <b>Username</b>
//             </label>
//             <input
//               type="text"
//               placeholder="username..."
//               className="border py-1 px-2"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             {/* phoneNumber */}
//             <label htmlFor="phoneNumber">
//               <b>Phone Number</b>
//             </label>
//             <input
//               type="number"
//               placeholder="phone..."
//               className="border py-1 px-2"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             {/* message */}
//             <label htmlFor="message">
//               <b>Message</b>
//             </label>
//             <textarea
//               name=""
//               id=""
//               placeholder="message..."
//               className="border py-1 px-2 w-full"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             ></textarea>
//             {/* <input
//               type="text"
//               placeholder="message..."
//               className="border py-1 px-2"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             /> */}
//             {/* Send Button */}
//             <button
//               type="submit"
//               className="bg-blue-400 py-1 px-4 w-full mt-4 text-white rounded"
//             >
//               Send Button
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactForm;

// // ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
// // ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
// // ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
// // ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
// // ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
// // ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
// // ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
// // ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
// // ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
// // ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
// // ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
// // ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
// Another Method of handling form where we have so many input fields are there.

import { useState } from "react";

const ContactForm = () => {
  const [contactmsg, setContactmsg] = useState({
    username: "",
    phone: "",
    message: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(contactmsg);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setContactmsg((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div
        id="mainContainer"
        className="h-[100vh] w-full flex items-center justify-center"
      >
        <div
          id="contact"
          className="border flex items-start justify-center flex-col gap-2 py-4 px-8"
        >
          <h1 className="font-bold text-2xl">Contact Form</h1>
          <form
            onSubmit={handleFormSubmit}
            className="flex items-start justify-center flex-col gap-2"
          >
            {/* userName */}
            <label htmlFor="userName">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="username..."
              className="border py-1 px-2"
              required
              name="username"
              value={contactmsg.username}
              onChange={handleInputChange}
            />
            {/* phoneNumber */}
            <label htmlFor="phoneNumber">
              <b>Phone Number</b>
            </label>
            <input
              type="number"
              placeholder="phone..."
              className="border py-1 px-2"
              required
              name="phone"
              value={contactmsg.phone}
              onChange={handleInputChange}
            />
            {/* message */}
            <label htmlFor="message">
              <b>Message</b>
            </label>
            <textarea
              name="message"
              id=""
              placeholder="message..."
              className="border py-1 px-2 w-full"
              required
              value={contactmsg.message}
              onChange={handleInputChange}
            ></textarea>
            {/* <input
              type="text"
              placeholder="message..."
              className="border py-1 px-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            /> */}
            {/* Send Button */}
            <button
              type="submit"
              className="bg-blue-400 py-1 px-4 w-full mt-4 text-white rounded"
            >
              Send Button
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
