import { forwardRef, useId, useRef } from "react";

const ForwardRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <BeforeReact19Input label="username" ref={username} />
        <BeforeReact19Input label="password" ref={password} />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ForwardRef;

// const BeforeReact19Input = forwardRef((props, ref) => {
//   const id = useId();

//   return (
//     <>
//       <label htmlFor={id}>{props.label}</label>
//       <input type="text" ref={ref} className="border-2" />
//     </>
//   );
// });

const BeforeReact19Input = ({ label, ref }) => {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="text" ref={ref} className="border-2" />
    </>
  );
};
