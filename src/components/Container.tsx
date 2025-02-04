import React from "react";
import Start from "./Start";
import Stop from "./Stop";
const Container: React.FC = () => {
  return (
    <div className="flex justify-center ">
      <div className="w-80 h-60 bg-blue-200 flex justify-center items-end pb-4 space-x-4 rounded-lg hover:shadow-lg hover:shadow-red-100">
        <Start />
        <Stop />
      </div>
    </div>
  );
};

export default Container;
