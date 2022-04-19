import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { InfoBlock } from "../../components/InfoBlock";
import { Card } from "../../components/Card";
import { ReactComponent as BackIcon } from "../../img/icons/Back.svg";
import EmptyOrder from "../../img/OrderImage.png";
import {
  selectIsOrdersItemsLoading,
  selectOrsersState,
} from "../../redux/features/orders/selectors";
import { ItemsLoader } from "../../components/ItemsLoader";
import { selectSneakersState } from "../../redux/features/sneakers/selectors";
import styles from "./Orders.module.scss";

export const Orders: React.FC = () => {
  const { orders } = useSelector(selectOrsersState);
  const { items } = useSelector(selectSneakersState);
  const isLoading = useSelector(selectIsOrdersItemsLoading);

  if (isLoading) {
    return (
      <div className={classNames(styles.productList, styles.ordersListLoader)}>
        <ItemsLoader />
      </div>
    );
  }

  return (
    <>
      {orders.length > 0 ? (
        <>
          <div className={styles.title}>
            <Link to="/">
              <div className={classNames("btn", styles.backBtn)}>
                <BackIcon />
              </div>
            </Link>
            <h2>Мои покупки</h2>
          </div>
          <div className={styles.ordersWrapper}>
            {orders.map(({ order, id }) => (
              <React.Fragment key={id}>
                <h2>Заказ №{id}</h2>
                <div className={styles.ordersList}>
                  {items
                    .filter((item) => order.includes(item.id))
                    .map((item) => (
                      <Card key={item.id} item={item} />
                    ))}
                </div>
              </React.Fragment>
            ))}
          </div>
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
