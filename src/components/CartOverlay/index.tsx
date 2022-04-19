import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { toggleCartVisible } from "../../redux/features/cart/cartSlice";
import { selectCartState } from "../../redux/features/cart/selectors";
import {
  selectIsSneakersLoading,
  selectSneakersState,
} from "../../redux/features/sneakers/selectors";

import { selectOrsersState } from "../../redux/features/orders/selectors";
import { CartInfoBlock } from "./CartInfoBlock";
import { CartContent } from "./CartContent";
import { fetchOrder } from "../../redux/features/sneakers/sneakersSlice";
import { addOrder } from "../../redux/features/orders/ordersSlice";
import { CartLoader } from "./CartLoader";
import styles from "./CartOverlay.module.scss";

export const CartOverlay: React.FC = () => {
  const [cartInfo, setCartInfo] = useState<"empty" | "order">("empty");
  const { isOpenCart } = useSelector(selectCartState);
  const { items } = useSelector(selectSneakersState);
  const isLoading = useSelector(selectIsSneakersLoading);
  const { orders } = useSelector(selectOrsersState);
  const dispatch = useDispatch();
  const cartItems = items.filter(({ added2Cart }) => added2Cart);
  const isEmptyCartInfo = cartInfo === "empty";

  useEffect(() => {
    if (!isOpenCart) {
      setTimeout(() => setCartInfo("empty"), 1000);
    }
  }, [isOpenCart]);

  const handleClickOutsideCart = (event: React.MouseEvent) => {
    const { target } = event;

    if (target instanceof Element && !target.closest(`.${styles.cart}`)) {
      dispatch(toggleCartVisible());
    }
  };

  const handleOrder = () => {
    setCartInfo("order");
    dispatch(fetchOrder(cartItems));
    dispatch(
      addOrder({
        id: `${orders.length + 1}`,
        order: cartItems.map(({ id }) => id),
      })
    );
  };

  return (
    <div
      className={classNames(styles.overlay, {
        [`${styles.hidden}`]: !isOpenCart,
      })}
      onClick={handleClickOutsideCart}
    >
      <div className={styles.cart}>
        <h2>Корзина</h2>
        <div className={styles.cartContent}>
          {isLoading ? (
            <CartLoader />
          ) : (
            <>
              {cartItems.length > 0 ? (
                <CartContent items={cartItems} handleClickOrder={handleOrder} />
              ) : (
                <CartInfoBlock
                  isEmpty={isEmptyCartInfo}
                  orderNumber={orders.length}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
