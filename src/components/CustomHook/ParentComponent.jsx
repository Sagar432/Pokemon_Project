import { createContext, useContext } from "react";
import ChilddComponent from "./ChilddComponent";

export const BioContext = createContext();

const ParentComponent = () => {
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
        <h1 className="text-2xl font-medium mb-4">Welcome to Custom Hook</h1>
        <h2 className="pb-5">I'm Parent Component</h2>
        <ChilddComponent />
      </BioContext.Provider>
    </>
  );
};

export default ParentComponent;

// Custom Hook
export const useSagar = () => {
  const context = useContext(BioContext);
  if (context === undefined) {
    throw new Error("Component must be wrapped inside BioProvider");
  }
  return context;
};
