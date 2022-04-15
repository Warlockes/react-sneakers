import React from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import EmptyCart from "../../img/EmptyCart.png";
import CartOrder from "../../img/CreateOrder.png";
import { ReactComponent as DeleteIcon } from "../../img/icons/Delete.svg";
import { ReactComponent as OrderIcon } from "../../img/icons/Order.svg";
import { toggleCartVisible } from "../../redux/features/cart/cartSlice";
import { InfoBlock } from "../InfoBlock";
import { selectCartState } from "../../redux/features/cart/selectors";
import { getTax } from "../../utils/utils";
import { selectSneakersState } from "../../redux/features/sneakers/selectors";
import styles from "./CartOverlay.module.scss";
import { fetchDeleteCartItem } from "../../redux/features/sneakers/sneakersSlice";

//TODO:
// 1) Сделать loader для корзины
// 2) Добавить для иконок header иконки с количеством добавленных товаров
// 3) сделать загрузку не в home, а выше

export const CartOverlay: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpenCart } = useSelector(selectCartState);
  const { items, totalPrice } = useSelector(selectSneakersState);
  const cartItems = items.filter(({ added2Cart }) => added2Cart);

  const handleClickOutsideCart = (event: React.MouseEvent) => {
    const { target } = event;

    if (target instanceof Element && !target.closest(`.${styles.cart}`)) {
      dispatch(toggleCartVisible());
    }
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
          {cartItems.length > 0 ? (
            <>
              <div className={styles.cartList}>
                {cartItems.map((item) => {
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
                        onClick={() => dispatch(fetchDeleteCartItem(item))}
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
                <div className={classNames(styles.orderBnt, "cartBtn")}>
                  <span>Оформить заказ</span>
                  <OrderIcon height={12} />
                </div>
              </div>
            </>
          ) : (
            <InfoBlock
              title="Корзина пуста"
              description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"
              imageSrc={EmptyCart}
            />

            // <InfoBlock
            //   title="Заказ оформлен!"
            //   description="Ваш заказ #18 скоро будет передан курьерской доставке"
            //   imageSrc={CartOrder}
            //   isOrder
            // />
          )}
        </div>
      </div>
    </div>
  );
};
