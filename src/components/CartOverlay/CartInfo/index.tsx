import React from "react";
import classNames from "classnames";

import styles from "./CartInfo.module.scss";
import { toggleCartVisible } from "../../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { ReactComponent as OrderIcon } from "../../../img/icons/Order.svg";
import EmptyCart from "../../../img/EmptyCart.png";
import CreateOrder from "../../../img/CreateOrder.png";

export const CartInfo = () => {
  const dispatch = useDispatch();

  const handleCloseCart = () => {
    dispatch(toggleCartVisible());
  };

  return (
    <div className={styles.infoCartContainer}>
      {false ? (
        <>
          <div className={styles.imageContainer}>
            <img src={EmptyCart} alt="Empty cart" />
          </div>
          <h2>Корзина пуста</h2>
          <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          <div
            className={classNames("cartBtn", styles.cartBackBtn)}
            onClick={handleCloseCart}
          >
            <OrderIcon height={12} />
            <span>Вернуться назад</span>
          </div>
        </>
      ) : (
        <>
          <div className={styles.imageContainer}>
            <img src={CreateOrder} alt="Create order" />
          </div>
          <h2 className={styles.orderTitle}>Заказ оформлен!</h2>
          <p>Ваш заказ #18 скоро будет передан курьерской доставке</p>
          <div
            className={classNames("cartBtn", styles.cartBackBtn)}
            onClick={handleCloseCart}
          >
            <OrderIcon height={12} />
            <span>Вернуться назад</span>
          </div>
        </>
      )}
    </div>
  );
};
