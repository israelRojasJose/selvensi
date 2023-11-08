import type { Metadata } from "next";
import styles from "@/styles/portfolio.module.css";
import Nav from "./nav";
import ScrollOptions from "./components/ScrollLink";
import Name from "./components/name";

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
         <body className={styles.body}>
            <Nav>
               <Name />
               <ScrollOptions />
            </Nav>
            {children}
         </body>
      </html>
   );
}
