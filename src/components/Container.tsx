import React from "react";
import Start from "./Start";
import Stop from "./Stop";
import TodayWork from "./TodayWork";
import TimeNow from "./TimeNow";
import Working from "./Working";
import Lap from "./Lap";

const Container: React.FC = () => {
  return (
    <div className="flex flex-col  items-center min-h-screen">
      <div className="flex space-x-4">
        <div className="w-80 h-80 bg-blue-200 flex flex-col space-between items-center pb-4 space-y-8 rounded-lg hover:shadow-lg hover:shadow-red-100">
          <div className="text-center pt-16 space-y-4">
            <TimeNow />
            <Working />
          </div>

          <div className="flex space-x-4">
            <Start />
            <Stop />
          </div>
        </div>
        <Lap />
      </div>

      <div className="pt-5">
        <TodayWork />
      </div>
    </div>
  );
};

export default Container;
