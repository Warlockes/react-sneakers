import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as CartIcon } from "../../img/icons/Cart.svg";
import { ReactComponent as FavoritesIcon } from "../../img/icons/Favorites.svg";
import { ReactComponent as OrdersIcon } from "../../img/icons/Orders.svg";
import { toggleCartVisible } from "../../redux/features/cart/cartSlice";
import Logo from "../../img/logo.png";
import styles from "./Header.module.scss";
import { selectSneakersState } from "../../redux/features/sneakers/selectors";

export const Header = () => {
  const dispatch = useDispatch();
  const { totalPrice } = useSelector(selectSneakersState);

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
          <CartIcon />
          {totalPrice > 0 && <span>{totalPrice} руб.</span>}
        </div>
        <Link to="/favorites">
          <FavoritesIcon className={styles.favoritesIcon} />
        </Link>
        <Link to="/orders">
          <OrdersIcon className={styles.orderIcon} />
        </Link>
      </div>
    </div>
  );
};
