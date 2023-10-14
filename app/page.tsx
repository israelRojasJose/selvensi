"use client";
import styles from "@/styles/page.module.css";
import { useEffect, useState } from "react";

function TimeComponent({ timeString }: { timeString: string }) {
   console.log(timeString);
   return <div>{timeString}</div>;
}

export default function Home() {
   const [time, setTime] = useState("");
   let synchronousTimeVariable = new Date();
   console.log(synchronousTimeVariable);
   // if (synchronousTimeVariable !== time) {
   //    setTime(synchronousTimeVariable);
   // }

   return (
      <div className={styles.coolLookingBox}>
         <TimeComponent
            timeString={synchronousTimeVariable.toLocaleTimeString()}
         />
      </div>
   );
}
### current the program looks to have two sets of data times the server time in utc and the client in local time. 
I choose the client time in case your acress the site form acrosss the world. 
hey brother, I belive in you. I believe in everything you can and will do. I love you. go hard.  