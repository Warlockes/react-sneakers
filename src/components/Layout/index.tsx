import React from "react";
import { CartOverlay } from "../CartOverlay";
import { Header } from "../Header";

import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.appContent}>
        <Header />
        <div className={styles.body}>{children}</div>
        <CartOverlay />
      </div>
    </div>
  );
};
