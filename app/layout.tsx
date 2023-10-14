import type { Metadata } from "next";
import styles from "@/styles/page.module.css";

export const metadata: Metadata = {
  title: "personalPortfolio",
  description: "Jose Ossorio portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
    </html>
  );
}
