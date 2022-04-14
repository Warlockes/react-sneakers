import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ContentSlider } from "../../components/ContentSlider";
import { Card } from "../../components/Card";
import { SearchField } from "../../components/SearchField";
import {
  fetchSneakers,
  LoadingStatus,
} from "../../redux/features/sneakers/sneakersSlice";
import { ItemsLoader } from "../../components/ItemsLoader";
import {
  selectIsSneakersLoading,
  selectSneakersState,
} from "../../redux/features/sneakers/selectors";
import styles from "./Home.module.scss";

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { items, loadingStatus } = useSelector(selectSneakersState);
  const isLoading = useSelector(selectIsSneakersLoading);

  useEffect(() => {
    if (loadingStatus === LoadingStatus.NEVER) {
      dispatch(fetchSneakers());
    }
  }, [dispatch, loadingStatus]);

  return (
    <>
      <ContentSlider />
      <div className={styles.contentHead}>
        <h2>Все кроссовки</h2>
        <SearchField />
      </div>
      <div className={styles.productList}>
        {isLoading ? (
          <ItemsLoader />
        ) : (
          <>
            {items.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </>
        )}
      </div>
    </>
  );
};
