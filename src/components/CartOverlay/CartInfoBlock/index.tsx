import React from "react";

import EmptyCart from "../../../img/EmptyCart.png";
import CartOrder from "../../../img/CreateOrder.png";
import { InfoBlock } from "../../InfoBlock";

interface CartInfoBlockProps {
  isEmpty: boolean;
  orderNumber: number;
}

export const CartInfoBlock: React.FC<CartInfoBlockProps> = ({
  isEmpty,
  orderNumber,
}) => {
  return (
    <InfoBlock
      title={isEmpty ? "Корзина пуста" : "Заказ оформлен!"}
      description={
        isEmpty
          ? "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"
          : `Ваш заказ #${orderNumber} скоро будет передан курьерской доставке`
      }
      imageSrc={isEmpty ? EmptyCart : CartOrder}
      isOrder={isEmpty}
    />
  );
};
