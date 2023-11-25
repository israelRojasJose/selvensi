"use client";
import styles from "styles/page.module.css";
import { useEffect, useState } from "react";

 export function GettingTime() {
   const [time, setTime] = useState("");
   
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
     <div className={styles.CardsWrapper}>
       <span className={styles.timeCard}>{time}</span>
     </div>
   );
}
      



      
      
