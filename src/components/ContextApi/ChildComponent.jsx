import GrandChild from "./GrandChild";

const ChildComponent = () => {
  return (
    <>
      <h1 className="pb-5">I'm Child Component</h1>
      <GrandChild />
    </>
  );
};

export default ChildComponent;
