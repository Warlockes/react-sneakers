import classNames from "classnames";

import { InfoBlock } from "../../components/InfoBlock";
import { Card } from "../../components/Card";
import { ReactComponent as BackIcon } from "../../img/icons/Back.svg";
import EmptyFavorites from "../../img/FavoriteImage.png";
import styles from "./Favorites.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavoritesState,
  selectIsFavoritesItemsLoading,
} from "../../redux/features/favorites/selectors";
import { useEffect } from "react";
import { LoadingStatus } from "../../redux/features/sneakers/sneakersSlice";
import { fetchFavoritesItems } from "../../redux/features/favorites/favoritesSlice";
import { ItemsLoader } from "../../components/ItemsLoader";

export const Favorites = () => {
  const dispatch = useDispatch();
  const { items, loadingStatus } = useSelector(selectFavoritesState);
  const isLoading = useSelector(selectIsFavoritesItemsLoading);

  useEffect(() => {
    if (loadingStatus === LoadingStatus.NEVER) {
      dispatch(fetchFavoritesItems());
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
            <h2>Мои закладки</h2>
          </div>
          <div className={styles.productList}>
            {items.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </>
      ) : (
        <InfoBlock
          title="Закладок нет :("
          description="Вы ничего не добавили в закладки"
          imageSrc={EmptyFavorites}
        />
      )}
    </>
  );
};
