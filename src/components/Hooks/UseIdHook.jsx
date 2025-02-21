import { useId } from "react";

// const UseIdHook = () => {
//   const usernameId = useId();
//   const passwordId = useId();
//   const emailId = useId();
//   return (
//     <>
//       <form>
//         <div>
//           <label htmlFor={usernameId}>Username: </label>
//           <input type="text" id={usernameId} name="name" />
//         </div>
//         <div>
//           <label htmlFor={passwordId}>Password: </label>
//           <input type="password" id={passwordId} name="password" />
//         </div>
//         <div>
//           <label htmlFor={emailId}>Email: </label>
//           <input type="email" id={emailId} name="email" />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default UseIdHook;

// This is the another way
const UseIdHook = () => {
  const id = useId();

  return (
    <>
      <form>
        <div>
          <label htmlFor={id + "usernameId"}>Username: </label>
          <input type="text" id={id + "usernameId"} name="name" />
        </div>
        <div>
          <label htmlFor={id + "passwordId"}>Password: </label>
          <input type="password" id={id + "passwordId"} name="password" />
        </div>
        <div>
          <label htmlFor={id + "emailId"}>Email: </label>
          <input type="email" id={id + "emailId"} name="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UseIdHook;
