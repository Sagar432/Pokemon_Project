import GrandGrandChild from "./GrandGrandChild";

const GrandChild = () => {
  return (
    <>
      <h1 className="pb-5">I'm Grand Child Component</h1>
      <GrandGrandChild />
    </>
  );
};

export default GrandChild;
