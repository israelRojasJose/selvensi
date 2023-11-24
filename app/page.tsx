import styles from "styles/page.module.css";
import { GettingTime } from "./components/clientComponents";




function ClockBody({ children }: { children: React.ReactNode }) {
   return <div className={styles.clock}>{children}</div>;
}

export default function Home() {
   return (
     <>
       <ClockBody>
   
           <GettingTime />
         
       </ClockBody>
     </>
   );
}

// hey brother, I believe in you. I believe in everything you can and will do. I love you. go hard.
