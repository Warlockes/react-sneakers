import React from "react";
import { ContentSlider } from "../../components/ContentSlider";
import { SearchField } from "../../components/SearchField";

import { ReactComponent as PlusIcon } from "../../img/icons/Plus.svg";
import { ReactComponent as AddedIcon } from "../../img/icons/Added.svg";
import { ReactComponent as FavoritesIcon } from "../../img/icons/Favorites.svg";
import { ReactComponent as FavoriteAddIcon } from "../../img/icons/FavoriteAdd.svg";

import Sheakears from "../../img/Sneakers.png";
import styles from "./Home.module.scss";
import classNames from "classnames";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const Home = () => {
  return (
    <>
      <ContentSlider />
      <div className={styles.contentHead}>
        <h2>Все кроссовки</h2>
        <SearchField />
      </div>
      <div className={styles.productList}>
        {array.map((item) => (
          <div
            key={item}
            className={classNames(styles.productCard, styles.active)}
          >
            <div className={classNames(styles.btn, styles.favoritesBtn)}>
              <FavoritesIcon width={14.5} />
            </div>
            <div className={classNames(styles.btn, styles.favoriteAdded)}>
              <FavoriteAddIcon width={14.5} />
            </div>
            <div className={styles.cardImageContainer}>
              <img src={Sheakears} alt="Product" />
            </div>
            <p className={styles.description}>
              Мужские Кроссовки Nike Blazer Mid Suede
            </p>
            <div className={styles.cardFooter}>
              <div>
                <p>Цена:</p>
                <p>12 999 руб.</p>
              </div>
              <div className={classNames(styles.addButton, styles.btn)}>
                <PlusIcon />
              </div>
              <div className={classNames(styles.addedProduct, styles.btn)}>
                <AddedIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
