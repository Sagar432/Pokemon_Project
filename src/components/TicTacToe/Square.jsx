// import { useState } from "react";

const Square = ({ value, onSquareClick }) => {
  //   const [value, setValue] = useState(null);

  //   const handleClick = () => {
  //     setValue("X");
  //   };
  return (
    <>
      <button className="h-20 w-20 border-2 text-5xl" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
};

export default Square;
