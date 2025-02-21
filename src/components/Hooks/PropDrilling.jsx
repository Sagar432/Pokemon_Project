const PropDrilling = () => {
  return (
    <section className="bg-gray-600 h-[100vh] w-[100%] text-white flex justify-center items-center flex-col">
      <h1 className="text-2xl">Component A</h1>
      <ChildComponent data="React.js" />
    </section>
  );
};

export default PropDrilling;

// This is ChildComponent
const ChildComponent = (props) => {
  return (
    <section>
      <h1>I am Component B</h1>
      <GrandChildComponent data={props.data} />
    </section>
  );
};

const GrandChildComponent = (props) => {
  return (
    <section>
      <h1>I'm Component C</h1>
      <GrandGrandChildComponent data={props.data} />
    </section>
  );
};

const GrandGrandChildComponent = (props) => {
  return (
    <section>
      <h1>Hello, I'm Grand of GrandChildComponent</h1>
      <p>Here's the data: {props.data}</p>
    </section>
  );
};
