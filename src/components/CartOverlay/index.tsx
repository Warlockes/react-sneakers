import React from "react";
import classNames from "classnames";

import Sneakers from "../../img/Sneakers.png";
import { ReactComponent as DeleteIcon } from "../../img/icons/Delete.svg";
import { ReactComponent as OrderIcon } from "../../img/icons/Order.svg";
import styles from "./CartOverlay.module.scss";

export const CartOverlay = () => {
  return (
    <div className={classNames(styles.overlay, styles.hidden)}>
      <div className={styles.cart}>
        <h2>Корзина</h2>
        <div className={styles.cartContent}>
          <div className={styles.cartList}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
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
            <div className={styles.orderBnt}>
              <span>Оформить заказ</span>
              <OrderIcon height={12} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
