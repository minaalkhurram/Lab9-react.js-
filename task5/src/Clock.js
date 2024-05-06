import React, { useState, useEffect } from "react";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <h2>Current Time:</h2>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}


