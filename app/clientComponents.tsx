"use client";
import styles from "@/styles/portfolio.module.css";
import { useEffect, useState } from "react";

const date = new Date();

export function Hours() {
   const hours = date.getHours();
   const [time, setTime] = useState<number>(hours);
   useEffect(() => {
      setInterval(() => {
         const date = new Date();
         setTime(date.getHours());
      }, 1000);
   });
   const hoursIn24Format = time % 12 ? time : time + 12;
   return <>{hoursIn24Format}</>;
}

export function Minutes() {
   return <div className={styles.clockShortHand}>{date.getMinutes()}</div>;
}
export function Seconds() {
   const [time, setTime] = useState(date);
   return <div className={styles.clockShortHand}>{date.getSeconds()}</div>;
}

export function ClockFaceCard({ children }: { children: React.ReactNode }) {
   return <div className={styles.clock}>{children}</div>;
}
