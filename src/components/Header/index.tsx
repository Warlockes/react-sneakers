import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as CartIcon } from "../../img/icons/Cart.svg";
import { ReactComponent as FavoritesIcon } from "../../img/icons/Favorites.svg";
import { ReactComponent as OrdersIcon } from "../../img/icons/Orders.svg";
import { toggleCartVisible } from "../../redux/features/cart/cartSlice";
import Logo from "../../img/logo.png";
import { selectSneakersState } from "../../redux/features/sneakers/selectors";
import styles from "./Header.module.scss";
import classNames from "classnames";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectSneakersState);
  const cartItemsAmount = items.reduce(
    (accum, item) => (item.added2Cart ? (accum += 1) : accum),
    0
  );
  const favoriteItemsAmount = items.reduce(
    (accum, item) => (item.added2Favorites ? (accum += 1) : accum),
    0
  );

  const handleChangeCartVisible = () => {
    dispatch(toggleCartVisible());
  };

  return (
    <div className={styles.header}>
      <Link to="/">
        <div className={styles.headerLogo}>
          <img src={Logo} alt="logo" />
          <div className={styles.description}>
            <p className={styles.title}>React Sneakers</p>
            <p className={styles.subtitle}>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <div className={styles.headerButtons}>
        <div className={styles.cartBlock} onClick={handleChangeCartVisible}>
          <div className={styles.iconContainer}>
            <CartIcon />
            {cartItemsAmount > 0 && (
              <div className={styles.badge}>{cartItemsAmount}</div>
            )}
          </div>
          {totalPrice > 0 && <span>{totalPrice} руб.</span>}
        </div>
        <Link to="/favorites">
          <div className={styles.iconContainer}>
            <FavoritesIcon className={styles.favoritesIcon} />
            {favoriteItemsAmount > 0 && (
              <div className={classNames(styles.badge, styles.favoriteBarde)}>
                {favoriteItemsAmount}
              </div>
            )}
          </div>
        </Link>
        <Link to="/orders">
          <OrdersIcon className={styles.orderIcon} />
        </Link>
      </div>
    </div>
  );
};
