import styles from "styles/page.module.css";
import { GettingTime } from "./components/gettingTime";


export default function Home() {
   return (
     <div className={styles.clock}>
       <GettingTime />

       <div className={styles.bar1}>
         <span className={styles.container_of_ticks}></span>
       </div>
     </div>
   ); 
}  

// hey brother, I believe in you. I believe in everything you can and will do. I love you. go hard.
