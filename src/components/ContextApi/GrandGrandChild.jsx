import { useContext } from "react";
import { BioContext } from "./ContextApi";

const GrandGrandChild = () => {
  const bioData = useContext(BioContext);
  return (
    <>
      <h1 className="pb-5">I'm GrandGrandChild Component</h1>
      <h2>My name is {bioData.name}</h2>
      <h1>I'm pursuing {bioData.course}</h1>
      <h1>My address is {bioData.address.city}</h1>
      <h1>My Country is {bioData.address.country}</h1>
      <h1>My friend is {bioData.friends[2]}</h1>
    </>
  );
};

export default GrandGrandChild;
