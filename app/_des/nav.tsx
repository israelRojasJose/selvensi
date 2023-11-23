import styles from "@/styles/portfolio.module.css";
export default function Nav({ children }: { children: React.ReactNode }) {
   return <div className={styles.nav}>{children}</div>;
}
