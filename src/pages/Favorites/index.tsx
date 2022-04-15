import classNames from "classnames";

import { InfoBlock } from "../../components/InfoBlock";
import { Card } from "../../components/Card";
import { ReactComponent as BackIcon } from "../../img/icons/Back.svg";
import EmptyFavorites from "../../img/FavoriteImage.png";
import { useSelector } from "react-redux";
import { ItemsLoader } from "../../components/ItemsLoader";
import {
  selectIsSneakersLoading,
  selectSneakersState,
} from "../../redux/features/sneakers/selectors";
import styles from "./Favorites.module.scss";

export const Favorites: React.FC = () => {
  const { items } = useSelector(selectSneakersState);
  const isLoading = useSelector(selectIsSneakersLoading);
  const favoriteItems = items.filter(({ added2Favorites }) => added2Favorites);

  if (isLoading) {
    return (
      <div className={styles.productList}>
        <ItemsLoader />
      </div>
    );
  }

  return (
    <>
      {favoriteItems.length > 0 ? (
        <>
          <div className={styles.title}>
            <div className={classNames("btn", styles.backBtn)}>
              <BackIcon />
            </div>
            <h2>Мои закладки</h2>
          </div>
          <div className={styles.productList}>
            {favoriteItems.map((item) => (
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
