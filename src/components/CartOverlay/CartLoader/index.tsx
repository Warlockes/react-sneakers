import React from "react";
import ContentLoader from "react-content-loader";

import styles from "./CartLoader.module.scss";

const items: number[] = [1, 2, 3];

export const CartLoader: React.FC = () => {
  return (
    <>
      {items.map((item) => (
        <ContentLoader
          key={item}
          className={styles.cartLoaderItem}
          speed={3}
          width="100%"
          height={120}
          viewBox="0 0 100% 120"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="20" ry="20" width="100%" height="120" />
        </ContentLoader>
      ))}
    </>
  );
};
