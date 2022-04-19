import classNames from "classnames";

import { InfoBlock } from "../../components/InfoBlock";
import { Card } from "../../components/Card";
import { ReactComponent as BackIcon } from "../../img/icons/Back.svg";
import EmptyOrder from "../../img/OrderImage.png";
import styles from "./Orders.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsOrdersItemsLoading,
  selectOrsersState,
} from "../../redux/features/orders/selectors";
import { useEffect } from "react";
import { ItemsLoader } from "../../components/ItemsLoader";
import { fetchOrders } from "../../redux/features/orders/ordersSlice";
import { Link } from "react-router-dom";
import { selectSneakersState } from "../../redux/features/sneakers/selectors";

export const Orders = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector(selectOrsersState);
  const { items } = useSelector(selectSneakersState);
  const isLoading = useSelector(selectIsOrdersItemsLoading);
  const ordersItemIds = orders.flatMap(({ order }) => order);
  const renderItems = items.filter((item) => ordersItemIds.includes(item.id));

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={classNames(styles.productList, styles.productListLoader)}>
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
          <div className={styles.productList}>
            {renderItems.map((item, index) => (
              <Card key={index} item={item} />
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
