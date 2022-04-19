import React from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as DeleteIcon } from "../../../img/icons/Delete.svg";
import { ReactComponent as OrderIcon } from "../../../img/icons/Order.svg";
import {
  fetchDeleteCartItem,
  SneakersItem,
} from "../../../redux/features/sneakers/sneakersSlice";
import { selectSneakersState } from "../../../redux/features/sneakers/selectors";
import { getTax } from "../../../utils/utils";
import styles from "./CartContent.module.scss";

interface CartContentProps {
  items: SneakersItem[];
  handleClickOrder: () => void;
}

export const CartContent: React.FC<CartContentProps> = ({
  items,
  handleClickOrder,
}) => {
  const { totalPrice } = useSelector(selectSneakersState);
  const dispatch = useDispatch();

  const handleDeleteCartItem = (item: SneakersItem) => {
    dispatch(fetchDeleteCartItem(item));
  };

  return (
    <>
      <div className={styles.cartList}>
        {items.map((item) => {
          const { id, imageUrl, price, title } = item;

          return (
            <div key={id} className={styles.cartItem}>
              <div className={styles.itemImageContainer}>
                <img src={imageUrl} alt="Cart Item" />
              </div>
              <div className={styles.description}>
                <p>{title}</p>
                <p>{price} руб.</p>
              </div>
              <div
                className={classNames("btn", styles.deleteBtn)}
                onClick={() => handleDeleteCartItem(item)}
              >
                <DeleteIcon />
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.orderContainer}>
        <div>
          <p>Итого:</p>
          <div />
          <p>{totalPrice} руб.</p>
        </div>
        <div>
          <p>Налог 5%:</p>
          <div />
          <p>{getTax(totalPrice)} руб.</p>
        </div>
        <div
          className={classNames(styles.orderBnt, "cartBtn")}
          onClick={handleClickOrder}
        >
          <span>Оформить заказ</span>
          <OrderIcon height={12} />
        </div>
      </div>
    </>
  );
};
