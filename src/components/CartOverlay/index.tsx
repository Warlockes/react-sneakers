import React from "react";
import classNames from "classnames";

import Sneakers from "../../img/Sneakers.png";
import { ReactComponent as DeleteIcon } from "../../img/icons/Delete.svg";
import { ReactComponent as OrderIcon } from "../../img/icons/Order.svg";

import styles from "./CartOverlay.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleCartVisible } from "../../redux/features/cart/cartSlice";
import { CartInfo } from "./CartInfo";

const cartItems: number[] = [1];

export const CartOverlay = () => {
  const isOpen = useSelector((state: RootState) => state.cart.isOpenCart);
  const dispatch = useDispatch();

  const handleClickOutsideCart = (event: React.MouseEvent) => {
    const { target } = event;

    if (target instanceof Element && !target.closest(`.${styles.cart}`)) {
      dispatch(toggleCartVisible());
    }
  };

  return (
    <div
      className={classNames(styles.overlay, { [`${styles.hidden}`]: !isOpen })}
      onClick={handleClickOutsideCart}
    >
      <div className={styles.cart}>
        <h2>Корзина</h2>
        <div className={styles.cartContent}>
          {cartItems.length > 0 ? (
            <>
              <div className={styles.cartList}>
                {cartItems.map((item) => (
                  <div key={item} className={styles.cartItem}>
                    <div className={styles.itemImageContainer}>
                      <img src={Sneakers} alt="Cart Item" />
                    </div>
                    <div className={styles.description}>
                      <p>Мужские Кроссовки Nike Air Max 270</p>
                      <p>12 999 руб.</p>
                    </div>
                    <div className={classNames("btn", styles.deleteBtn)}>
                      <DeleteIcon />
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.orderContainer}>
                <div>
                  <p>Итого:</p>
                  <div />
                  <p>21 498 руб.</p>
                </div>
                <div>
                  <p>Налог 5%:</p>
                  <div />
                  <p>1074 руб.</p>
                </div>
                <div className={classNames(styles.orderBnt, "cartBtn")}>
                  <span>Оформить заказ</span>
                  <OrderIcon height={12} />
                </div>
              </div>
            </>
          ) : (
            <CartInfo />
          )}
        </div>
      </div>
    </div>
  );
};
