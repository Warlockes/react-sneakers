import React from "react";

import { CartOverlay } from "../../components/CartOverlay";
import { ContentSlider } from "../../components/ContentSlider";
import { ItemLoader } from "../../components/ItemLoader";
import { ProductList } from "../../components/ProductList";
import { SearchField } from "../../components/SearchField";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <>
      <ContentSlider />
      <div className={styles.contentHead}>
        <h2>Все кроссовки</h2>
        <SearchField />
      </div>
      <ProductList />
    </>
  );
};
