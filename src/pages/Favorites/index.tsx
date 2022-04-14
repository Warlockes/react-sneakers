import classNames from "classnames";
import React from "react";
import { InfoBlock } from "../../components/InfoBlock";
import { ProductList } from "../../components/ProductList";

import { ReactComponent as BackIcon } from "../../img/icons/Back.svg";
import EmptyFavorites from "../../img/FavoriteImage.png";
import styles from "./Favorites.module.scss";

const items: number[] = [];

export const Favorites = () => {
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
          <ProductList items={[]} />
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
