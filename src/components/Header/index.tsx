import Logo from "../../img/logo.png";
import { ReactComponent as CartIcon } from "../../img/icons/Cart.svg";
import { ReactComponent as FavoritesIcon } from "../../img/icons/Favorites.svg";
import { ReactComponent as OrdersIcon } from "../../img/icons/Orders.svg";

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
          <CartIcon className={styles.cartIcon} />
          <span>1205 руб.</span>
        </div>
        <FavoritesIcon className={styles.favoritesIcon} />
        <OrdersIcon className={styles.orderIcon} />
      </div>
    </div>
  );
};
