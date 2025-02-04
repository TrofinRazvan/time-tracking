import React, { useState } from "react";

export default function Lap() {
  const [laps, setLaps] = useState<string[]>([]);

  const addLap = () => {
    setLaps([...laps, `Lap ${laps.length + 1}`]);
  };

  return (
    <div
      className="w-80 bg-blue-200 flex flex-col items-center pb-4 space-y-8 rounded-lg hover:shadow-lg hover:shadow-red-100"
      style={{ height: `${80 + laps.length * 40}px` }} 
    >
      <h3 className="text-xl font-bold">Laps</h3>
      
      <ul className="space-y-2">
        {laps.map((lap, index) => (
          <li key={index} className="text-lg">{lap}</li>
        ))}
      </ul>
      
    </div>
  );
}
