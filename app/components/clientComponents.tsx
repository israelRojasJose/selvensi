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
     <div
       className={`${styles.CardsWrapper} ${styles.CardsWrapperfirstColorBg}`}
     >
       <span className={styles.timeCard}>{time}</span>
     </div>
   );
}
      


export const ScrollOptions = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="options">Select an option:</label>
      <select id="options" value={selectedOption} onChange={handleOptionChange}>
        <option value="">--Please choose an option--</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};



      
      
