import React, { useState, useEffect } from 'react';

// GUIDE: https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks

 const Timer = () => {
  const [time, setTime] = useState(25*60*1000);
   const [isActive, setIsActive] = useState(false);

   useEffect(() => {
     let interval = null;
     if(isActive) {
       interval = setInterval(() => {
        setTime(time => time - 1)
       }, 1);
     } else if (!isActive && time !== 0) {
       clearInterval(interval);
     }
     return () => clearInterval(interval);
   }, [isActive, time]);

  return (
    <>
      <h1>{time}</h1>
      <button onClick={()=> setIsActive(true)}>start</button>
     </>
  )
}

export default Timer;