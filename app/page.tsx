import styles from "@/styles/portfolio.module.css";
import { Hours, Minutes, Seconds } from "./clientComponents";

type customTimeFormat = {
   hours: number;
   minutes: number;
   seconds: number;
   meridiem: string;
};
function ClockFaceCard({ children }: { children: React.ReactNode }) {
   return <div className={styles.clock}>{children}</div>;
}

export default function Home() {
   return (
      <div className={styles.fatherTime}>
         <ClockFaceCard>
            <Hours />
         </ClockFaceCard>
         <span>:</span>
         <ClockFaceCard>
            <Minutes />
         </ClockFaceCard>
         <ClockFaceCard>
            <Seconds />
         </ClockFaceCard>
      </div>
   );
}

// hey brother, I believe in you. I believe in everything you can and will do. I love you. go hard.
