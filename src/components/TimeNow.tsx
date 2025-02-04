import React, { useState, useEffect } from "react";

export default function TimeNow() {
  const [time, setTime] = useState("0:0:0");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      // const seconds = now.getSeconds();
      setTime(`${hours}:${minutes}`);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-3xl font-bold text-center p-4 bg-gray-200 rounded-lg">
      {time}
    </div>
  );
}
