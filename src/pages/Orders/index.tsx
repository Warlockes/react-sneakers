import classNames from "classnames";
import React from "react";
import { InfoBlock } from "../../components/InfoBlock";
import { ProductList } from "../../components/ProductList";

import { ReactComponent as BackIcon } from "../../img/icons/Back.svg";
import EmptyOrder from "../../img/OrderImage.png";
import styles from "./Orders.module.scss";

const items: number[] = [];

export const Orders = () => {
  return (
    <>
      {items.length > 0 ? (
        <>
          <div className={styles.title}>
            <div className={classNames("btn", styles.backBtn)}>
              <BackIcon />
            </div>
            <h2>Мои покупки</h2>
          </div>
          <ProductList items={[]} />
        </>
      ) : (
        <InfoBlock
          title="У Вас нет заказов"
          description="Вы нищеброд? Оформите хотя бы один заказ"
          imageSrc={EmptyOrder}
        />
      )}
    </>
  );
};
