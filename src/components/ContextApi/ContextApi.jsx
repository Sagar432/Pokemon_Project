import { createContext } from "react";
import ChildComponent from "./ChildComponent";

export const BioContext = createContext();

const ContextApi = () => {
  const myData = {
    name: "Sagar",
    course: "MCA",
    address: {
      city: "Hyderabad",
      country: "India",
    },
    friends: ["Rahul", "Aman", "Rakesh"],
  };
  //   console.log(children);

  return (
    <>
      <BioContext.Provider value={myData}>
        <h2 className="pb-5">I'm ContextApi (main-parent) Component</h2>
        <ChildComponent />
      </BioContext.Provider>
    </>
  );
};

export default ContextApi;
