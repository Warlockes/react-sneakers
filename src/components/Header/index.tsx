import React from "react";
import Logo from "../../img/logo.png";
import CartIcon from "../../img/icons/Cart.svg";
import FavoritesIcon from "../../img/icons/Favorites.svg";
import OrdersIcon from "../../img/icons/Orders.svg";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={Logo} alt="logo" />
        <div className={styles.description}>
          <p className={styles.title}>React Sneakers</p>
          <p className={styles.subtitle}>Магазин лучших кроссовок</p>
        </div>
      </div>
      <div className={styles.headerButtons}>
        <div className={styles.cartBlock}>
          <img src={CartIcon} alt="Cart" />
          <span>1205 руб.</span>
        </div>
        <div className={styles.favorites}>
          <img src={FavoritesIcon} alt="Favorites" />
        </div>
        <div className={styles.orders}>
          <img src={OrdersIcon} alt="Favorites" />
        </div>
      </div>
    </div>
  );
};
