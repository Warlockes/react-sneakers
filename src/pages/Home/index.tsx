import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ContentSlider } from "../../components/ContentSlider";
import { ProductList } from "../../components/ProductList";
import { SearchField } from "../../components/SearchField";
import {
  fetchSneakers,
  LoadingStatus,
} from "../../redux/features/sneakers/sneakersSlice";
import { RootState } from "../../redux/store";
import styles from "./Home.module.scss";

export const Home = () => {
  const dispatch = useDispatch();
  const { items, loadingStatus } = useSelector(
    (state: RootState) => state.sneakers
  );
  const isLoading = loadingStatus === LoadingStatus.LOADING;

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
      <ProductList items={items} loading={isLoading} />
    </>
  );
};
