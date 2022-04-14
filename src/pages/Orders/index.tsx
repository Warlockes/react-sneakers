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
import { LoadingStatus } from "../../redux/features/sneakers/sneakersSlice";
import { fetchOrdersItems } from "../../redux/features/orders/ordersSlice";
import { ItemsLoader } from "../../components/ItemsLoader";

export const Orders = () => {
  const dispatch = useDispatch();
  const { items, loadingStatus } = useSelector(selectOrsersState);
  const isLoading = useSelector(selectIsOrdersItemsLoading);

  useEffect(() => {
    if (loadingStatus === LoadingStatus.NEVER) {
      dispatch(fetchOrdersItems());
    }
  }, [dispatch, loadingStatus]);

  if (isLoading) {
    return (
      <div className={styles.productList}>
        <ItemsLoader />
      </div>
    );
  }

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
          <div className={styles.productList}>
            {items.map((item) => (
              <Card key={item.id} item={item} />
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
