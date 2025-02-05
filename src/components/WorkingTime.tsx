// import React from "react";

// export default function WorkingTime() {
//     return (
//         <div className="text-3xl font-bold text-center p-4 bg-gray-200 rounded-lg">
//         0:0:0</div>
//       );
// };

import React, { useState, useEffect } from "react";

export default function WorkingTime() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <div className="text-3xl font-bold text-center p-4 bg-gray-200 rounded-lg">
      {formatTime(time)}
    </div>
  );
}
