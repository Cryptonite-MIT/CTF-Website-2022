import React, { useEffect, useState } from 'react';

const calculateTimeLeft = () => {
    const eventDate = new Date('23 Dec, 2022 21:30:00 GMT+05:30').getTime();
    const difference = eventDate - Date.now();
    const seconds = Math.floor( ( difference / 1000 ) % 60 );
    const minutes = Math.floor( ( difference / 1000 / 60 ) % 60 );
    const hours = Math.floor( ( difference / 1000 / 60 / 60 ) % 24 );
    const days = Math.floor( difference / 1000 / 60 / 60 / 24 );
    return {
        days,
        hours,
        minutes,
        seconds,
        total: difference
    };
}

function Timer(eventDate) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(eventDate));
   
    useEffect(() => {
      const t = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(eventDate));
      }, 1000);
      return () => clearTimeout(t);
    });
  
    if (timeLeft.total >0) {
      // Event has not happened yet
      return (
        <span className="timer">
          {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes and {timeLeft.seconds} seconds
        </span>
      );
    } else {
      // Event is live
      return <span className="timer">Event is live !!</span>;
    }
  }
  
export default Timer;