"use client";
import styles from "styles/page.module.css";
import { useEffect, useState } from "react";

 export function GettingTime() {
   const [time, setTime] = useState("");
  //  I want the bars to be the clock hands around a laying down cyclinder. 
   useEffect(() => {
     const date = new Date();
     const dateTime = setTimeout(() => {
        const formattedDate = date.toLocaleString("en-US", {
         hour: "numeric",
         minute: "numeric",
         second: "numeric",
       });
         setTime(formattedDate);
      
     }, 1000);
    return () => {
       clearInterval(dateTime);
     };
   }, [time]);

   return (
    <span className={styles.time}>{time}</span>
   );
}
      



      
      
