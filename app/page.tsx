"use client";
import styles from "@/styles/page.module.css";
import { useEffect, useState } from "react";

type customTimeFormat = {
   hours: number;
   minutes: number;
   seconds: number;
   meridiem: string;
};

function TimeComponent(timeSet: customTimeFormat) {
   const hours_format = timeSet.hours % 12 || 12;
   return (
      <div>
         {hours_format}:{timeSet.minutes}:{timeSet.seconds}
         {timeSet.meridiem}
      </div>
   );
}

export default function Home() {
   const [time, setTime] = useState(new Date());
   useEffect(() => {
      const intervalId = setInterval(() => {
         setTime(new Date());
      }, 1000);

      return () => {
         clearInterval(intervalId);
      };
   }, []);
   const hours = time.getHours();
   const minutes = time.getMinutes();
   const seconds = time.getSeconds();
   const meridiem = hours >= 12 ? "PM" : "AM";

   const timeSet: customTimeFormat = {
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      meridiem: meridiem,
   };
   return (
      <div className={styles.coolLookingBox}>
         <TimeComponent
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            meridiem={meridiem}
         />
      </div>
   );
}

// hey brother, I believe in you. I believe in everything you can and will do. I love you. go hard.
